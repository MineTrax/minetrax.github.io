---
sidebar_position: 31
title: Troubleshooting
id: troubleshooting
---

This document covers some known issues and the process to debug and fix them.

### 1. laravel.log permission issue.
If you get some error like:
```
Error in exception handler: The stream or file "/var/www/minetrax/app/storage/logs/laravel.log" could not be opened: failed to open stream: Permission denied in /var/www/minetrax/bootstrap/compiled.php:8423
```

It is because of missing permission required to write logs. 
You need to make sure the ownership of the files belongs to the user who is running web server (in most cases its www-data).

You can simply run `update.sh` and it will fix permissions
```
sh update.sh
```


or manually, Give the permission by running below command.
```
chmod -R 775 /var/www/minetrax/storage/* var/www/minetrax/bootstrap/cache
chown -R $USER:www-data /var/www/minetrax
```

### 2. Player Stats are not getting tracked.
Player statistics are tracked using the SFTP/FTP/Local connection. Make sure you have configured the connection correctly. 

You can verify that by going to `Admin > Server > Edit Server` and then clicking on `Test Connection` button.

Once you have verified the connection is getting successful. You can try fixing file permissions & then restarting queue workers.
Run below command
```
sh update.sh
sudo supervisorctl restart all
```

Once done. Do a manual rescan from server listing page and see if it fixes the issue.

*Ping us on discord if issue persists*

### 3. Minetrax taking too much CPU and Memory.
If your queue workers are not working properly, it can cause high CPU and Memory usage.

Queue workers fails mostly due to permission issues. You can fix permission and then restart queue workers by running below command.
```
sh update.sh
sudo supervisorctl restart all
```

After that it should be fixed. Not not then check logs in /var/www/minetrax/storage/logs/ for any errors.

*Feel free to ping us on discord*

### 4. Out of Memory Error while Building Frontend Assets.
:::info
This happen only if you rebuilding frontend assets.
:::
Building frontend assets(`npm run prod`) is memory intensive task. If your server RAM where web is hosted is low (<2GB), the build process might get failed with message like `Killed` or `ERR_WORKER_OUT_OF_MEMORY`.

In such cases, you need to do two things.
1. Increase node memory limit. 
   Run this command
   ```
   export NODE_OPTIONS="--max-old-space-size=8192"
   ```
   This will increase node memory limit for your current session.
   *You will have to run above for every new SSH Terminal you open to build frontend.*

2. Add Swap space to your server if there is none already.
 	Follow this tutorial to add Swap space: https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04