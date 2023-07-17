#!/bin/bash

# Function to update and upgrade the system
update_and_upgrade() {
    echo "Updating package lists..."
    sudo apt update
}

# Function to check and install MySQL if needed
install_mysql() {
    if ! dpkg -l | grep -q "mysql-server"; then
            echo "Installing MySQL..."
            sudo apt install mysql-server -y
    else
        echo "MySQL is already installed. continuing..."
    fi
}

# Function to check and install PHP if needed
install_php() {
    if ! dpkg -l | grep -q "php8.2"; then
            echo "Installing PHP..."
            sudo apt install software-properties-common -y
            sudo add-apt-repository ppa:ondrej/php -y
            sudo apt update
			sudo apt -y install curl php8.2 php8.2-cli php8.2-gd php8.2-mysql php8.2-pdo php8.2-mbstring php8.2-tokenizer php8.2-bcmath php8.2-xml php8.2-fpm php8.2-curl php8.2-zip php8.2-intl php8.2-redis
    else
        echo "PHP 8.2 is already installed. continuing..."
    fi
}

# Function to install miscellaneous packages
install_miscellaneous() {
    echo "Installing miscellaneous packages (Nginx, NodeJS, Redis Server, Git, Sendmail, Supervisor, Composer)..."
    # Install Nginx
    sudo apt install nginx -y

    # Install NodeJS
    curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
    sudo bash /tmp/nodesource_setup.sh
    sudo apt install -y nodejs

    # Install Redis Server, Git, Sendmail, Supervisor
    sudo apt install redis-server git supervisor sendmail unzip -y
    sudo systemctl enable --now redis-server

    # Install Composer
	# MUST BE INSTALLED AFTER PHP
    curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
}


# Function to setup the database and store the password in a variable
setup_database() {
    echo "Setting up the database..."	
    if ! sudo mysql <<EOF
CREATE DATABASE $database_name;
CREATE USER '$database_name'@'localhost' IDENTIFIED BY '$database_password';
GRANT ALL PRIVILEGES ON $database_name.* TO '$database_name'@'localhost' WITH GRANT OPTION;
exit
EOF
    then
        echo "ERROR: Database setup failed. Please try again with a different database name. Exiting..."
        exit 1
    fi
    echo "Database setup completed."
}

# Function to clone code from GitHub and perform additional setup steps
clone_and_setup_code() {
	sudo mkdir -p /var/www/minetrax
    cd /var/www/minetrax
    echo "Cloning MineTrax code from GitHub..."
    sudo git clone https://github.com/MineTrax/minetrax.git .
    sudo chmod -R 775 storage/* bootstrap/cache/

    echo "Copying .env configuration file..."
    sudo cp .env.example .env

    echo "Updating .env file with database password..."
    sudo sed -i "s/DB_PASSWORD=password/DB_PASSWORD=$database_password/" .env
	sudo sed -i "s/DB_DATABASE=minetrax/DB_DATABASE=$database_name/" .env
	sudo sed -i "s/DB_USERNAME=root/DB_USERNAME=$database_name/" .env

    echo "Installing project dependencies..."
    yes | sudo composer install
	
	php artisan key:generate --force
	
	echo "Migrating database..."
	php artisan migrate --seed
	php artisan storage:link
	
	chown -R $USER:www-data /var/www/minetrax/*
}

# Function to add the cron job to the crontab
add_cron_job() {
    echo "Adding cron job to execute MineTrax schedule..."
    (crontab -l ; echo "* * * * * php /var/www/minetrax/artisan schedule:run >> /dev/null 2>&1") | crontab -
    echo "Cron job added successfully."
}


# Function to configure and start queue workers using Supervisor
configure_and_start_queue_workers() {
    echo "Configuring and starting queue workers using Supervisor..."

    # Create configuration files for the queue workers
    echo "[program:minetrax-worker-default]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/minetrax/artisan queue:work --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=2
redirect_stderr=true
stopwaitsecs=3660" | sudo tee /etc/supervisor/conf.d/minetrax-worker-default.conf

    echo "[program:minetrax-worker-long]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/minetrax/artisan queue:work --queue=longtask,default redis-longtask --timeout=0 --sleep=3 --tries=3 --max-jobs=500
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=2
redirect_stderr=true
stopwaitsecs=3660" | sudo tee /etc/supervisor/conf.d/minetrax-worker-long.conf

    # Reread and update Supervisor to load the new configurations
    sudo supervisorctl reread
    sudo supervisorctl update

    # Start the queue workers
    sudo supervisorctl start minetrax-worker-default:*
    sudo supervisorctl start minetrax-worker-long:*

    echo "Queue workers configured and started using Supervisor."
}


# Function to set up Nginx for MineTrax
setup_nginx_config() {
    echo "Setting up Nginx for MineTrax..."

    sudo sed -i "s#APP_URL=http://localhost#APP_URL=http://$domain_name#" /var/www/minetrax/.env

    # Create Nginx configuration file
    echo "server {
    listen 80;
    listen [::]:80;
    server_name $domain_name www.$domain_name;
    root /var/www/minetrax/public;

    add_header X-Frame-Options \"SAMEORIGIN\";
    add_header X-Content-Type-Options \"nosniff\";

    index index.php;

    charset utf-8;

    location / {
        try_files \$uri \$uri/ /index.php?\$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME \$realpath_root\$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}" | sudo tee /etc/nginx/sites-available/minetrax.conf

    # Create a symbolic link to sites-enabled
    sudo ln -s /etc/nginx/sites-available/minetrax.conf /etc/nginx/sites-enabled/

    # Reload Nginx to apply the changes
    sudo systemctl reload nginx

    echo "Nginx setup for MineTrax completed."
}

update_minetrax() {
 cd /var/www/minetrax
 sudo sh update.sh
}

# Prompt Everything at start

# Prompt user for the domain name
echo "[PROMPT] Please enter your Domain where MineTrax will open, Use just domain, dont include http:// (eg: your_domain.com) -> "
read domain_name

echo "[PROMPT] Please enter desired name of the MySQL database for MineTrax Installation (eg: minetrax) -> "
read database_name

echo "[PROMPT] Please enter a strong password for your newly created MySQL database -> "
read database_password


# Main script execution
update_and_upgrade
install_mysql
install_php
install_miscellaneous


# Check if /var/www/minetrax directory doesn't exist or is empty
if [ ! -d "/var/www/minetrax" ] || [ -z "$(ls -A /var/www/minetrax)" ]; then
	setup_database
	# Clone code from GitHub and perform additional setup
    clone_and_setup_code
	add_cron_job
	configure_and_start_queue_workers
	setup_nginx_config
	update_minetrax

    echo "SUCCESS: MineTrax setup completed successfully."
    echo "Please visit https://minetrax.github.io/docs/installation/setup-web-autoinstaller#finalize for next steps."
else
    echo "ERROR: The /var/www/minetrax directory already exists and is not empty. Skipping MineTrax setup."
fi

# Check if the MySQL or PHP installation was skipped, in that case, don't proceed further
if [ $? -eq 1 ]; then
    echo "ERROR: MineTrax installation process terminated."
    exit 1
fi


echo "Done! Check above messages for SUCCESS or ERROR."