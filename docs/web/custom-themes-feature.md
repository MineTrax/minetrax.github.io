---
sidebar_position: 60
title: Custom Themes
id: custom-themes
---

MineTrax supports custom themes to personalize the look and feel of your site.

## Before Installing a Theme

### Built-in Color Schemes

Before installing a custom theme, check if MineTrax's built-in color schemes already give you the look you want. MineTrax ships with **8 color schemes** that can be changed instantly from the Admin Dashboard — **no theme installation required**.

Available color schemes: **Sky, Saffron, Caffeine, Neo Brutalism, Notebook, Lime, Moss, Claude** — each with their own unique color palette, fonts, and visual style.

To change your color scheme:
1. Go to **Admin Dashboard → Settings → Theme Settings**
2. Select a color scheme from the dropdown
3. Save — changes are applied immediately

If you just want to change colors, fonts, or the visual style of your site, built-in color schemes are the easiest option. Custom themes are for when you want to change the layout, structure, or functionality of pages.

## Install a Custom Theme

### 1. Download Theme

Download the theme zip file from the source you got it from.

The theme package will contain a `resources/` directory with the theme files:

```sql
my-shiny-theme-v1.0/
├── how-to-install.txt               # (optional) Installation instructions
├── resources/
│   ├── my-shiny-theme/
│   │   ├── css/
│   │   ├── js/
│   │   ├── views/                   # (optional)
│   │   ├── markdown/                # (optional)
├── public/
│   ├── theme-assets/                # (optional) Additional images, fonts, etc.
│   │   ├── my-shiny-theme/
```

:::tip Theme Inheritance
MineTrax themes use **theme inheritance** — they only contain files that differ from the default theme. Everything else is automatically inherited, keeping packages lightweight and updates easy.
:::

### 2. Upload Theme to MineTrax

1. Connect to your server using any SFTP client like [Bitvise SSH Client](https://www.bitvise.com/ssh-client-download) or [MobaXterm](https://mobaxterm.mobatek.net/download.html), or any other SFTP client using your SSH credentials.
2. Navigate to your MineTrax installation directory. Usually, it's located at `/var/www/minetrax`.
3. Upload the theme zip file to some temp directory and extract it there.
4. Copy the `resources/my-shiny-theme/` directory to the `resources/` directory of your MineTrax project.
5. Copy any additional assets if the theme requires. Eg: `public/theme-assets/my-shiny-theme/` directory to the `public/theme-assets/` directory of your MineTrax project.

After uploading, the directory structure will look like this:

```sql
/var/www/minetrax/
├── resources/
│   ├── my-shiny-theme/         # Your custom theme (override files only)
│   │   ├── css/
│   │   ├── js/
│   │   ├── ...
│   ├── default/                # Default theme (ships with MineTrax)
│   │   ├── css/
│   │   ├── js/
│   │   ├── ...
├── public/
│   ├── theme-assets/           # (optional)
│   │   ├── my-shiny-theme/
...
```

### 3. Activate the Theme

Open your `.env` file and update the `APP_THEME` variable to the name of your new theme.

```php title=".env"
APP_THEME=my-shiny-theme
```

Then run the update script to build and activate the theme:

```bash
cd /var/www/minetrax
sh update.sh
```

The update script automatically detects your custom theme and builds the frontend assets. This requires Node.js to be installed on your server (which is already part of the standard MineTrax installation).

**Visit your site and you should see the new theme applied.**

:::info Additional Steps
Some themes may require additional steps (e.g., uploading files to `public/theme-assets/`). Check the theme's documentation or `how-to-install.txt` for more information.
:::

## Switching Back to Default Theme

To switch back to the default theme:

1. Update the `.env` file:
    ```php title=".env"
    APP_THEME=default
    ```
2. Run:
    ```bash
    cd /var/www/minetrax
    sh update.sh
    ```

The default theme ships with pre-built assets, so no build step is needed.

## Verify Active Theme

You can check which theme is currently active from the **Admin Dashboard sidebar** — it displays both the Web Version and the active Theme name at the bottom.

## Develop Custom Themes

Interested in creating your own theme? MineTrax's theme inheritance system makes it easy — you only need to create files you want to customize, and everything else falls back to the default theme automatically.

Check out the [theme development guide](../development/develop-custom-themes) to get started.

Or join our [Discord](https://discord.gg/Hzfj27k) to find new themes or ask for theme development services.
