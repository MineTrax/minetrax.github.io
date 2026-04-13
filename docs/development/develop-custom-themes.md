---
sidebar_position: 20
title: Develop Custom Themes
id: develop-custom-themes
---

MineTrax supports custom themes with **theme inheritance** — you only need to create files you want to override. Everything else automatically falls back to the default theme.

## Prerequisites

1. You have already setup MineTrax locally for development. If not, follow the guide [here](./setup-minetrax-locally-for-dev).
2. You are familiar with Programming & have a basic understanding of HTML, CSS, JavaScript, and Vue.js.
3. Your development environment is up and running.

## Before You Start

### Vue.js & Inertia
MineTrax uses Vue.js with Inertia for the frontend. If you are not familiar with Inertia or Vue.js, we recommend you take a crash course on them before proceeding. Search for free tutorials on [YouTube](https://youtube.com), [Laracasts](https://laracasts.com), or read the official documentation.

[Laravel Docs](https://laravel.com/docs)

[VueJS Docs](https://vuejs.org/guide/introduction.html)

[InertiaJS Docs](https://inertiajs.com/)

### Tailwind CSS

MineTrax default theme uses [Tailwind CSS](https://tailwindcss.com) for styling. 
Its a utility-first CSS framework that is easy to learn and use. 

Using Tailwind is optional. If you are not familiar with Tailwind or don't want to use it for your custom theme, you can add your CSS directly to the `app.css` file instead.

### Frontend Structure

The frontend of MineTrax is built using Vue.js and Inertia. Each theme has its own directory inside the `resources/` directory:

```plaintext
resources/
├── default/          # Base theme (ships with MineTrax)
│   ├── css/
│   ├── js/
│   │   ├── Pages/
│   │   ├── Components/
│   │   ├── Shared/
│   │   ├── Layouts/
│   │   ├── ...
│   ├── markdown/
│   ├── views/
├── my-shiny-theme/   # Your custom theme (only override files)
│   ├── css/
│   ├── js/
│   │   ├── Pages/        # Only pages you want to change
│   │   ├── Components/   # Only components you want to change
│   │   ├── ...
│   ├── views/            # Only Blade views you want to change
```

### How Theme Inheritance Works

MineTrax uses a **fallback system** — when a file is requested, it first looks in your theme directory. If the file doesn't exist there, it automatically falls back to the `default` theme.

This works at two levels:

1. **Vue/JS files** (Pages, Components, Shared, Layouts, etc.) — A Vite plugin intercepts `@/` imports and resolves them from your theme first, then from `default/`.
2. **Blade views** — Laravel's view system checks your theme's `views/` directory first, then falls back to `default/views/`.

**You only need to create files you want to change.** Everything else is inherited from the default theme automatically.

## Getting Started

Open your MineTrax project in any code editor.

### 1. Scaffold Your Theme

Run the following artisan command to create a new theme:

```bash
php artisan theme:create my-shiny-theme
```

:::info Keep your theme name unique
The name should be lowercase letters, numbers, hyphens(-), and underscores(_) only. No spaces or special characters are allowed.
Try to keep the name unique to avoid conflicts with other themes.

Don't use `default` as the theme name as it is reserved for the default theme.
:::

This will scaffold a minimal theme structure in `resources/my-shiny-theme/` with the following files:

```plaintext
resources/my-shiny-theme/
├── js/
│   ├── app.js              # App bootstrap (entry point)
│   ├── ssr.js              # SSR bootstrap (entry point)
│   ├── bootstrap.js        # Axios/Echo config (entry point)
│   ├── Pages/.gitkeep      # Add page overrides here
│   ├── Components/.gitkeep # Add component overrides here
│   ├── Shared/.gitkeep     # Add shared component overrides here
│   ├── Layouts/.gitkeep    # Add layout overrides here
├── css/
│   ├── app.css             # Imports default CSS + your overrides
├── views/.gitkeep          # Add Blade view overrides here
├── markdown/.gitkeep
```

The scaffolded `app.js` and `ssr.js` are ready to use — they contain the full app bootstrap with theme-aware page resolution built in.

The scaffolded `css/app.css` imports the default theme's styles so you start with a fully working theme. Add your CSS overrides below the import.

:::warning Theme directory not visible in code editor?
Custom theme directories in `resources/` may be gitignored. Add an exclusion for your theme in `.gitignore`:

```plaintext title=".gitignore"
/resources/*
!/resources/default/
// highlight-next-line
!/resources/my-shiny-theme/
```
:::


### 2. Update .env Variable

Open your `.env` file and update the `APP_THEME` variable to the name of your new theme.

```php title=".env"
APP_THEME=my-shiny-theme
```

### 3. Start Developing

#### a. Start Dev Server

```bash
npm run dev
```

Open your browser and go to `http://minetrax.test`. You should see the MineTrax site using the default theme's pages (since you haven't overridden any yet).

#### c. Override a Page

To customize a page, create the same file path in your theme's `js/Pages/` directory. For example, to customize the Dashboard:

1. Copy `resources/default/js/Pages/Dashboard.vue` to `resources/my-shiny-theme/js/Pages/Dashboard.vue`
2. Edit the copy in your theme directory
3. The Vite dev server picks it up automatically — refresh your browser

**Only the Dashboard page uses your theme's version. All other pages still come from the default theme.**

#### d. Override a Component

Same pattern — create the same file path in your theme directory:

```plaintext
# To override the footer:
resources/my-shiny-theme/js/Shared/MainFooter.vue

# To override the navbar:
resources/my-shiny-theme/js/Shared/MainNavbarCustom.vue

# To override a layout:
resources/my-shiny-theme/js/Layouts/AppLayout.vue
```

#### e. Override a Blade View

For Blade template overrides, create the same path under `views/`:

```plaintext
# To override the main app template:
resources/my-shiny-theme/views/app.blade.php

# To override an email template:
resources/my-shiny-theme/views/mail/user/you-are-banned.blade.php
```

#### f. Customize Styles

Edit `resources/my-shiny-theme/css/app.css`. It already imports the default theme's CSS. Add your overrides below:

```css title="resources/my-shiny-theme/css/app.css"
@import '../../default/css/app.css';

/* Override CSS custom properties */
:root {
    --primary: hsl(280 70% 50%);
}

/* Add custom styles */
.my-custom-class {
    /* ... */
}
```

Or remove the `@import` entirely to start with a completely custom stylesheet.

:::note Important: `@/` imports vs relative imports
The fallback system works with `@/` alias imports (e.g., `@/Components/Button.vue`). If a file in the default theme uses a **relative import** like `./Partials/SomePartial.vue`, and you want to override that partial, you'll need to also override the parent file that imports it.

In practice, the vast majority of imports in MineTrax use the `@/` alias, so this is rarely an issue.
:::

### 4. Build for Production

When you're done developing, build the assets for production:

```bash
npm run prod
```

This creates optimized assets in `public/build/my-shiny-theme/`.

### 5. Pack Your Theme for Sharing

You only need to distribute the files you actually changed:

```sql
my-shiny-theme-v1.0/
├── how-to-install.txt                # (optional) Installation instructions
├── resources/
│   ├── my-shiny-theme/
│   │   ├── css/
│   │   │   ├── app.css               # Your CSS (imports default + overrides)
│   │   ├── js/
│   │   │   ├── app.js                # App bootstrap
│   │   │   ├── ssr.js                # SSR bootstrap
│   │   │   ├── bootstrap.js          # Bootstrap config
│   │   │   ├── Pages/                # Only overridden pages
│   │   │   │   ├── Dashboard.vue
│   │   │   │   ├── Welcome.vue
│   │   │   ├── Shared/               # Only overridden components
│   │   │   │   ├── MainFooter.vue
│   │   ├── views/                    # Only overridden Blade views (if any)
├── public/
│   ├── theme-assets/                 # (optional) Additional images, fonts, etc.
│   │   ├── my-shiny-theme/
│   │   │   ├── images/
```

:::tip Pre-built assets not required
The `update.sh` script automatically builds frontend assets when a custom theme is detected, so you don't need to include `public/build/my-shiny-theme/` in your theme package. This keeps packages small and ensures builds match the user's environment.

However, you may still include pre-built assets if you want to support users who don't have Node.js installed.
:::

Create a zip file and share it with others. Your theme package only contains your override files, keeping it lightweight.

#### How end users install your theme

Your theme users will need to:
1. Unzip the theme archive.
2. Copy the `resources/my-shiny-theme/` directory to `resources/` of their MineTrax project.
3. Copy any additional assets if required. Eg: `public/theme-assets/my-shiny-theme/` to `public/theme-assets/`.
4. Update the `.env` file:
    ```php title=".env"
    APP_THEME=my-shiny-theme
    ```
5. Run `sh update.sh` — this will automatically install dependencies and build the theme.

Check [Custom Themes](../web/custom-themes) for the full user installation guide.

**Join [Discord](https://discord.gg/Hzfj27k) server to share your theme with others or for any queries.**

### 6. Become `Theme Developer`

If you are interested in developing themes for MineTrax and want to share/sell them with others, you can become a `Theme Developer`.

Join [Discord](https://discord.gg/Hzfj27k) server and ping @Xinecraft to get the `Theme Developer` role.

:::info Role Requirement
You may be required to provide link to your previous works, a demo theme & GitHub profile to get the role.
:::

## Images & Other Assets

If your theme requires adding additional assets like images, fonts, etc. you can add them to the `public/theme-assets` directory.

Create a new directory for your theme and add your assets there. For example, if your theme is named `my-shiny-theme` you can add your assets to `public/theme-assets/my-shiny-theme` directory.

You can then reference these assets in your theme's frontend code using the `/theme-assets/my-shiny-theme` path.

While sharing your theme with others, you will have to include it in your theme package and instruct the users to copy those to the `public/theme-assets` directory.

## How to Keep Your Theme Updated with MineTrax

Since your theme only contains override files, most MineTrax updates won't affect your theme at all. Unoverridden files automatically use the latest default theme, so your theme gets new features and bug fixes for free.

When MineTrax is updated:
1. Pull the latest MineTrax code (which updates the `default` theme).
2. Check the changelog for any changes to files your theme overrides.
3. Update only those specific files in your theme if needed.
4. Rebuild: `npm run prod`

We recommend versioning your theme to match MineTrax versions. (Eg: If MineTrax is at v8.0.0, your theme should be at v8.0.0).

Going forward, MineTrax will try not to introduce breaking changes in minor versions so your theme won't break for minor version updates.

## FAQ

### 1. Is there any theme development service available?

Yes, Join [Discord](https://discord.gg/Hzfj27k) server and create a request for it.

### 2. Do I need to copy every file from the default theme?

**No!** That's the whole point of theme inheritance. You only create files you want to customize. Everything else is automatically inherited from the default theme.

For example:
- Want to change only the homepage? Just create `js/Pages/Welcome.vue`.
- Want to change the footer? Just create `js/Shared/MainFooter.vue`.
- Want to change the color scheme? Just edit `css/app.css`.

### 3. Can I use a different CSS framework instead of Tailwind?

Yes, you can use any CSS framework or write plain CSS. Remove the `@import '../../default/css/app.css'` from your theme's `app.css` and add your own styles.

### 4. Can I use a different JavaScript framework instead of Vue.js?

Though it's technically possible, we recommend using Vue.js as it is the default framework used in MineTrax.

### 5. Do I need my custom theme to be customizable like the default theme? (Eg: having multiple Footer styles.)

No, you can structure your theme however you like. You can make it customizable or not — it's up to you.

### 6. What files are required in my theme at minimum?

The `php artisan theme:create` command scaffolds the minimum required files:
- `js/app.js` — App entry point
- `js/ssr.js` — SSR entry point
- `js/bootstrap.js` — Bootstrap config
- `css/app.css` — Stylesheet entry point

Everything else is optional and falls back to the default theme.

### 7. How does the fallback work for Inertia pages?

When your app tries to render a page (e.g., `Dashboard`), the system first checks if `resources/my-theme/js/Pages/Dashboard.vue` exists. If it does, that file is used. If not, it falls back to `resources/default/js/Pages/Dashboard.vue`. This happens transparently at build time.
