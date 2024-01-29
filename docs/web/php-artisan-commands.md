---
sidebar_position: 80
title: Console Commands
id: console-commands
---

This page lists some useful console commands you can run in the terminal to perform various tasks.

## Artisan Commands

These commands are executed with `php artisan` command. You run them in the same directory where minetrax is installed.
Eg: If minetrax is installed in `/var/www/minetrax`, then you should run the commands in `/var/www/minetrax` directory.

```bash
cd /var/www/minetrax
php artisan COMMAND
```

### Reset Password of a User

This command resets the password of a user. This is helpful if you forgot the password of a user and don't have alternative way to reset it's password. It will display the new password in the terminal.

```bash
php artisan auth:password:reset USERNAME

# Example
php artisan auth:password:reset superadmin
```

### Maintenance Mode

This command puts the website in maintenance mode. This is helpful if you want to perform some maintenance tasks on the website. Or you want to prevent users from accessing the website temporarily.

```bash
php artisan down
```

To bring the website back online, run the following command:

```bash
php artisan up
```

### Clear Cache

This clear website cache. This can be helpful if you want to see the changes you made to the website immediately. Eg: You changing language file.

```bash
php artisan cache:clear
```

### Clear Config Cache

This clear config cache. Clearing config cache is required when you change the config file. Eg: You change the `.env` file.

```bash
php artisan config:clear
```

You should also cache the config again after clearing the config cache.

```bash
php artisan config:clear
php artisan config:cache
```

Note: Alternatively, you can run `sh update.sh` and it will clear both cache and config cache.

### Restart Queue Worker

This command restarts the queue workers. This can be helpful if your queue workers are stuck or crashed.

```bash
php artisan queue:restart
```

## Other Commands

### Restart Supervisor

This command restarts the supervisor. This can be helpful if your queue workers are stuck or crashed.

```bash
sudo supervisorctl restart all
```

Check the status of supervisor with the following command:

```bash
sudo supervisorctl status all
```

### Restart WebServer

#### Nginx

```bash
sudo service nginx restart
sudo service php8.2-fpm restart
```

#### Apache

```bash
sudo service apache2 restart
```

### Restart MySQL

```bash
sudo service mysql restart
```

### Restart Redis Server

```bash
sudo service redis-server restart
```
