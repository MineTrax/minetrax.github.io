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
Give the permission by running below command.
```
chown -R www-data:www-data /var/www/minetrax/storage
chmod -R 755 /var/www/minetrax/storage
```

### 2. Out of Memory Error while Building Frontend Assets.
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