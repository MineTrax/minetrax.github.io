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

```sql
my-theme-v4/
├── how-to-install.txt               # (optional) Instructions for installing the theme.
├── resources/
│   ├── my-shiny-theme/
│   │   ├── css/
│   │   ├── js/
│   │   ├── markdown/
│   │   ├── views/
├── public/
│   ├── build/
│   │   ├── my-shiny-theme/
│   │   │   ├── assets/
│   │   │   ├── manifest.json
│   ├── theme-assets/                # (optional) If additional assets required by the theme.
│   │   ├── my-shiny-theme/
│   │   │   ├── images/
```

### 2. Upload Theme to MineTrax

1. Connect to your server using any SFTP client like [Bitvise SSH Client](https://www.bitvise.com/ssh-client-download) or [MobaXterm](https://mobaxterm.mobatek.net/download.html), or any other SFTP client using your SSH credentials.
2. Navigate to your MineTrax installation directory. Usually, it's located at `/var/www/minetrax`.
3. Upload the theme zip file to some temp directory and extract it there.
4. Copy the `resources/my-shiny-theme` directory to the `resources` directory of your MineTrax project.
5. Copy the `public/build/my-shiny-theme` directory to the `public/build` directory of your MineTrax project.
6. Copy any additional assets if theme requires. Eg: `public/theme-assets/my-shiny-theme` directory to the `public/theme-assets` directory of your MineTrax project.

After uploading, the directory structure will look like this:

```sql
/var/www/minetrax/
├── resources/
│   ├── my-shiny-theme/
│   │   ├── css/
│   │   ├── js/
│   │   ├── markdown/
│   │   ├── views/
│   ├── default/               # Default theme that comes with MineTrax.
│   │   ├── css/
│   │   ├── js/
│   │   ├── markdown/
│   │   ├── views/
├── public/
│   ├── build/
│   │   ├── my-shiny-theme/
│   │   │   ├── assets/
│   │   │   ├── manifest.json
│   ├── theme-assets/                # (optional) If additional assets required by the theme.
│   │   ├── my-shiny-theme/
│   │   │   ├── images/
...
```

### 3. Update .env variable

Open your `.env` file and update the `APP_THEME` variable to the name of your new theme.

For example, if the theme you uploaded is named `my-shiny-theme` update the `APP_THEME` variable like this:

```php title=".env"
APP_THEME=my-shiny-theme
```

Finally run the following command so that the changes are reflected in the application:

```bash
cd /var/www/minetrax
sh update.sh
```

**Visit your site and you should see the new theme applied.**

:::info Addtional Steps
Some themes may require additional steps to be followed (eg: uploading some file to `public/theme-assets` folder). Check the theme documentation for more information.
:::

## Develop Custom Themes

Check out the guide on how to develop your own custom themes for MineTrax [here](../development/develop-custom-themes).

or join our [Discord](https://discord.gg/Hzfj27k) to find new themes or ask for theme development services.
