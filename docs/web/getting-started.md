---
sidebar_position: 1
title: Getting started
id: getting-started
---

:::tip
If you want us to install minetrax for your servers or stuck in any step and need help, Feel free to join our [__Discord group__](https://discord.gg/Hzfj27k) and ask in help section or ping `Xinecraft#2139`. Its free. ¯\\_(ツ)\_/¯
:::


## Server Requirements
:::note
The installation steps given in this docs consider you using debian based OS eg: `Ubuntu 20.04`. If your server is running any other OS then you might have to do slight adjustments as per need during the process. Feel free to contact us in [Discord](https://discord.gg/Hzfj27k) for any help.
:::
MineTrax is designed to run on your web server of choice. It is recommended to use a VPS or Dedicated Server as hosting and not any shared hosting.

Web requires a VPS or Dedicated Server with atleast 1GB of RAM and 1 CPU. Ubuntu 20.04 is recommended.

Software Dependencies:
 - PHP 8.1+
 - MySQL 8+ or MariaDB 10+
 - Apache2 or Nginx
 - NodeJS 12+
 - Redis Server
 - Git
 - Composer
 - Supervisor
 - Sendmail

:::tip
It is recommended to start with a fresh server to follow along. A small Virtual Server with 1 vCPU should be fine to start with.
Cloud providers like [DigitalOcean](https://m.do.co/c/aece040492d0) give credit upto 100$ to get started for free. 
:::

## Installing Dependencies
Update operating system to make sure all existing packages are up to date:
```bash
sudo apt update && sudo apt upgrade -y
```

### PHP
First, install the prerequisites and PPA and update.
```bash
sudo apt install software-properties-common && sudo add-apt-repository ppa:ondrej/php -y
sudo apt update
```

Install PHP 8.1 and all required extensions.
```bash
sudo apt -y install php8.1 php8.1-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip,intl}
```

### MySQL / MariaDB
:::caution
Make sure to only install one. Either MySQL or MariaDB.
:::

To install MySQL run the below command in terminal.
```bash
sudo apt install mysql-server
```


### Apache2 / Nginx
:::caution
Make sure to only install one. Either Nginx or Apache2.
:::
#### Installing Apache2:
Install Apache2 server and php extension for it.
```bash
sudo apt install apache2 libapache2-mod-php8.1
sudo systemctl restart apache2
```

#### Installing Nginx:
```bash
sudo apt install nginx php8.1-fpm
```


### Composer
Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.
You'll need composer installed before continuing in this process.
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

### NodeJS
Add the Node PPA and update (here we are installing version 16, you can change if you want).
```bash
curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
```

Install NodeJS from APT
```bash
sudo apt install nodejs
```

### Redis Server, Git, Sendmail & Supervisor
```bash
sudo apt install redis-server git supervisor sendmail unzip
sudo systemctl enable --now redis-server
```

## Installation

### Cloning the codes from Github
Create a folder where the web will live and move to that folder.
```bash
mkdir -p /var/www/minetrax
cd /var/www/minetrax
```

Now clone the MineTrax git repo to the newly created folder and fix permissions.
```bash
git clone git@github.com:minetrax/minetrax.git .
chmod -R 755 storage/* bootstrap/cache/
```

### Setup the Database
You need to create a MySQL/MariaDB database and a user with all permission to that database.
```sql
mysql -u root -p

// Create the database
CREATE DATABASE minetrax;
// Create the user, change 'randomStrongPassword' to any strong password of your choice.
CREATE USER 'minetrax'@'127.0.0.1' IDENTIFIED BY 'randomStrongPassword';
// Give permission of the DB to user
GRANT ALL PRIVILEGES ON minetrax.* TO 'minetrax'@'127.0.0.1' WITH GRANT OPTION;
exit
```

### Environment and Migration
Now that the database is up we need to go back to the minetrax folder and copy `.env.example` file to `.env`.
```bash
cd /var/www/minetrax
cp .env.example .env
```

Install the composer dependencies.
```bash
composer install
```

Install the npm dependencies and build frontend assets.
```bash
npm install
npm run prod
```

Now generate a new key using.
```bash
# Only run the if you are doing fresh install and don't have data in the database.
php artisan key:generate --force
```
:::caution
Backup the encryption key (`APP_KEY`) from the `.env` file to some safe location. It is used to encrypt critical data before storing in database (eg: api keys and server credentials).
Without that key recovering data won't be possible.
:::

Next, change the database related variables in the `.env` file to match your database user credentials
```js title=.env
APP_URL=http://minetrax.test //Change this to the URL which you wanna setup minetrax on.

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=minetrax
DB_USERNAME=minetrax
DB_PASSWORD=randomStrongPassword
```

Migration and Seed the database, run the below command in terminal:
```bash
php artisan migrate --seed
```

Create symlink for storage
```
php artisan storage:link
```

### Setup Queue Listeners
Queue are used to run long running task like sending email, clearing stale data and importing data from servers. Queue workers in need to setup for these tasks to run.

#### Add the cron
Firstly, need to add the scheduler runner command to cron. 
Open crontab  `sudo crontab -e` and add then following in a new line there.
```
* * * * * php /var/www/minetrax/artisan schedule:run >> /dev/null 2>&1
```

#### Create queue worker:
We use supervisor for running of queue worker so incase they crash supervisor will automatically restart them.

Configuration file for supervisor are stored in folder `/etc/supervisor/conf.d`. All supervisor conf file we create will be in there.

#### Default queue:
Create a new file called `minetrax-worker-default.conf` and put below context in there.
```bash title=/etc/supervisor/conf.d/minetrax-worker-default.conf
[program:minetrax-worker-default]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/minetrax/artisan queue:work --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=4
redirect_stderr=true
stopwaitsecs=3660
```

#### Long queue:
Create a new file called `minetrax-worker-long.conf` and put below context in there.
```bash title=/etc/supervisor/conf.d/minetrax-worker-long.conf
[program:minetrax-worker-long]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/minetrax/artisan queue:work --queue=longtask,default redis-longtask --sleep=3 --tries=3 --max-jobs=500
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=4
redirect_stderr=true
stopwaitsecs=3660
```

#### Start the supervisor workers:
```
sudo supervisorctl reread
sudo supervisorctl update

sudo supervisorctl start minetrax-worker-default:*
sudo supervisorctl start minetrax-worker-long:*
```

### WebSocket setup
In this step we are going to setup [Pusher](https://pusher.com) as our websocket server.

:::tip
Pusher provide 200k messages per day in free tier, depending on your audience it might not be enough. In that case please check __[Websocket Options](./websocket-options.md)__ page to learn how to setup Pusher alternatives.
:::

1. Go to pusher.com and create a account.
2. In dashboard click "Create app" option to create a new app.
3. Name your app anything you like and choose a location closest to your server location. Choose `View.js` in Frontend and `Laravel` in Backend dropdowns.
4. Click `Create App`.
5. Now go to `App Keys` section and note down the `app_id`, `key`, `secret` and `cluster` variables.
Eg:
```js
app_id = "1367909"
key = "4b48b850682acb371c34"
secret = "41cc8be68c0d57fea4f3"
cluster = "ap2"
```

After this open your `.env` file and replace the pusher related credentials to match above.
```js title=.env
PUSHER_APP_ID=1367909
PUSHER_APP_KEY=4b48b850682acb371c34
PUSHER_APP_SECRET=41cc8be68c0d57fea4f3
PUSHER_APP_CLUSTER=ap2
```

Now rebuild your frontend assets.
```bash
npm run prod
```

### Web Server Configuration
Finally lets setup the web server to access the web.
Make sure your domain name is pointing to the IP address of the VPS/Dedicated server in which we are setting up the web. To do that you need to create an A record for your domain to the webserver IP from your domain DNS Provider. 


:::caution
Follow either Nginx or Apache2 steps as per your installation.
:::

#### Nginx Setup
First, Create a new file with any name(eg: `minetrax.conf`) in the Nginx sites directory `/etc/nginx/sites-available`  with context provided below replacing highlighted section as per your installation.
```bash
sudo nano /etc/nginx/sites-available/minetrax.conf
```
```text title=/etc/nginx/sites-available/minetrax.conf
server {
    listen 80;
    listen [::]:80;
    // highlight-next-line
    server_name your_domain.com www.your_domain.com;
    root /var/www/minetrax/public;
 
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
 
    index index.php;
 
    charset utf-8;
 
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
 
    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }
 
    error_page 404 /index.php;
 
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }
 
    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

Now create a symlink of the file created to `sites-enabled` folder.
```bash
sudo ln -s /etc/nginx/sites-available/minetrax.conf /etc/nginx/sites-enabled/
```

and finally reload your Nginx server to reflect the changes.
```bash
sudo systemctl reload nginx
```

:::caution
You should disable default site `/etc/nginx/sites-enabled/default` by removing it.
```bash
rm /etc/nginx/sites-enabled/default
sudo systemctl reload nginx
```
:::

#### Apache2 Setup
First, Create a new file with any name(eg: `minetrax.conf`) in the Apache2 sites directory `/etc/apache2/sites-available`  with context provided below replacing highlighted section as per your installation.
```bash
sudo nano /etc/apache2/sites-available/minetrax.conf
```
```text title=/etc/apache2/sites-available/minetrax.conf
<VirtualHost *:80>
  // highlight-next-line
  ServerName your_domain.com www.your_domain.com
  DocumentRoot "/var/www/minetrax/public"
  
  AllowEncodedSlashes On
  
  <Directory "/var/www/minetrax/public">
    AllowOverride all
    Require all granted
  </Directory>
</VirtualHost>
```

Next, enable rewrite mod & the site, and finally restart apache2 to reflect the changes.
```
sudo a2enmod rewrite
sudo a2ensite minetrax.conf

sudo systemctl restart apache2
```


:::caution
You should disable default site `/etc/apache2/sites-enabled/000-default.conf`.
```bash
a2dissite 000-default.conf
sudo systemctl restart apache2
```
:::

### Finalize
Now minetrax should be up and running on your domain `http://your_domain.com`.

After checking your site is up and running, make sure to change `APP_ENV=production` and `APP_DEBUG=false` in the `.env` file.
```js title=.env
APP_NAME=YOUR_DESIRED_APP_NAME
APP_ENV=production
APP_DEBUG=false
```
