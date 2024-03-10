---
sidebar_position: 60
title: Custom Themes
id: custom-themes
---

MineTrax supports custom themes. 
This guide will walk you through the process of installing and activating a custom theme for your site.

## Install Theme

### 1. Download Theme

Download the theme zip file from the source you got it from.

The theme directory structure should look like this:

```
my-theme/
├── assets/
├── manifest.json
```

### 2. Upload Theme to MineTrax

1. Connect to your server using any SFTP client like BitviseSSH or MobaXterm using your SSH credentials.
2. Navigate to your MineTrax installation directory. Usually, it's located at `/var/www/minetrax`.
3. Upload the theme directory in `public/build` directory.

After uploading, the directory structure will look like this:

```
public/
├── build/
│   ├── my-theme/
│   │   ├── assets/
│   │   ├── manifest.json
│   ├── default/
│   │   ├── assets/
│   │   ├── manifest.json
...
```

### 3. Update .env variable

Open your `.env` file and update the `APP_THEME` variable to the name of your new theme.

For example, if you want to name your theme `my-theme` then update the `APP_THEME` variable like this:

```php title=".env"
APP_THEME=my-theme
```

Finally run the following command so that the changes are reflected in the application:

```bash
cd /var/www/minetrax
sh update.sh
```


## Develop Custom Themes

Check out the guide on how to develop your own custom themes for MineTrax [here](../development/develop-custom-themes).

or join our [Discord](https://discord.gg/Hzfj27k) to find new themes or ask for theme development services.
