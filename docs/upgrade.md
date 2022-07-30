---
sidebar_position: 30
title: Upgrade Guide
id: upgrade
---

This document covers the process of upgrading MineTrax from older version to latest.
It is highly recommened to always keep your version updated to get latest features and bug fixes.

## Supported Versions
|Web Version|Plugin Version|Supported|PHP Versions|Minecraft Versions|
|---|---|---|---|---|
|1.0.0-alpha|1.0.0-alpha| |`8.1`|`1.16`, `1.17`|
|1.0.1-alpha|1.0.1-alpha| |`8.1`|`1.16`, `1.17`, `1.18`|
|1.0.2-alpha|1.0.2-alpha| |`8.1`|`1.16`, `1.17`, `1.18`|
|1.0.3-alpha|1.0.3-alpha| |`8.1`|`1.16`, `1.17`, `1.18`, `1.19`|
|1.0.4-alpha|1.0.4-alpha| |`8.1`|`1.16`, `1.17`, `1.18`, `1.19`|
|<b>1.0.5-alpha</b>|<b>1.0.5-alpha</b>|✅|`8.1`|`1.16`, `1.17`, `1.18`, `1.19`|

## Upgrading Web
:::caution
Upgrade guide for web consider `Ubuntu` as operating system. If you using some other OS you might have to tweak some commands accordingly.
:::

Follow the process step by step to upgrade web to latest version.

### 1. Enter Maintenance Mode
Maintenance mode will disable the web for end user so we don't expose any unexpected error or logs to them.
```
cd /var/www/minetrax

php artisan down
```

### 2. Clear compiled template & cache
```
cd /var/www/minetrax

php artisan cache:clear
php artisan view:clear
php artisan config:clear
php artisan clear
```

### 3. Take the latest pull
Take latest pull from the Github web repo.
```
cd /var/www/minetrax

git pull origin main
```

:::caution
If you have made any changes to the code, this process might fail and you have to revert back your changes before taking the pull. If the process fail then stash out your local changes and try to pull again. Make sure to backup your changes so you can add them back.
```
cd /var/www/minetrax

git stash
git pull origin main
```
:::

Once latest changes are pulled fix back the permissions for storage.
```
cd /var/www/minetrax
chmod -R 755 storage/* bootstrap/cache
```

### 4. Update the composer & npm dependencies
Install the latest dependencies changes from composer & npm
```
cd /var/www/minetrax

composer install
npm install
npm run prod
```

### 5. Run the migrations
```
cd /var/www/minetrax

php artisan migrate --force
```

### 6. Restart the Queue Listeners
```
cd /var/www/minetrax

php artisan queue:restart
```

### 7. Fix Permissions
```
chown -R www-data:www-data /var/www/minetrax/*
```

### 8. Exit the Maintenance Mode
Everything is done! Now lets turn back the site up for everyone.
```
cd /var/www/minetrax

php artisan up
```


:::danger Note on Breaking changes
Some version upgrade might introduce breaking changes. If so, it will be mentioned in the release note and discord.
Make sure to read the release note on github and discord for any additional step required for upgrading to version with breaking changes.
:::

**Web Release Notes: [https://github.com/MineTrax/minetrax/releases](https://github.com/MineTrax/minetrax/releases)**

## Upgrading Plugin
Upgrading your plugin is as simple as just downloading the latest version of the plugin and replacing old `Minetrax.jar` file with the new one. 

**Download Link: [https://github.com/MineTrax/plugin/releases](https://github.com/MineTrax/plugin/releases)**

:::info
Make sure to replace the file and not keep two version of it in plugins directory. 
Eg: If you have `Minetrax-1.0.2.jar` and upgrading to `Minetrax-1.0.3.jar` make sure to delete the old file i.e., `Minetrax-1.0.2.jar`.
:::