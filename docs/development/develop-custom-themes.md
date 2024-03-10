---
sidebar_position: 20
title: Develop Custom Themes
id: develop-custom-themes
---

MineTrax supports custom themes. This guide will walk you through the process of developing a custom theme for MineTrax.

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

Using Tailwind is optional, If you are not familiar with Tailwind or don't want to use it for your custom theme you can do so and instead add your CSS directly to `app.css` file and so on.

### Frontend Structure

The frontend of MineTrax is built using Vue.js and Inertia. The frontend is located in the `resources/js` directory. This is the directory where you will be editing the frontend code for your custom theme.

Each theme has its own directory in the `resources/js` directory. The default theme is located in the `resources/js/default` directory.

## Getting Started

Open your MineTrax project in any code editor.

### 1. Create a New Theme Directory

:::info Keep your theme name unique
The name should be lowercase letters, numbers, hyphens(-), and underscores(_) only. No spaces or special characters are allowed.
Try to keep the name unique to avoid conflicts with other themes.

Don't use `default` as the theme name as it is reserved for the default theme.
:::

Create a new directory for your theme in the `resources/js` directory by copying the `default` directory. Eg: If you want to name your theme `my-shiny-theme` then create a new directory named `my-shiny-theme` in the `resources/js` directory and copy the contents of the `default` directory to it.

Now your `resources` directory structure should look like this:

```plaintext
resources/
├── default/
│   ├── css/
│   ├── js/
│   ├── markdown/
│   ├── views/
├── my-shiny-theme/
│   ├── css/
│   ├── js/
│   ├── markdown/
│   ├── views/
```

:::warning Why My theme directory don't show up in code editor
Every directory (except `default`) in `resources` directory is added to `.gitignore` file. So, if you are using a code editor like VSCode. You can add exclusion for your theme directory in `.gitignore` like its added for `default` theme.

```plaintext title=".gitignore"
...
/resources/*
!/resources/default/
// highlight-next-line
!/resources/my-shiny-theme/
```
:::


### 1. Update .env variable

Open your `.env` file and update the `APP_THEME` variable to the name of your new theme.


```php title=".env"
APP_THEME=my-shiny-theme
```

### 2. Start Developing Your Theme

#### a. Update `jsconfig.json` file
Open `jsconfig.json` located in the root directory of your project and `resources/default/js/*` to `resources/my-shiny-theme/js/*`

```json title="jsconfig.json"
...
"compilerOptions": {
  "allowJs": true,
  "jsx": "preserve",
  "baseUrl": ".",
  "paths": {
	"@/*": [
        // highlight-next-line
	  "resources/my-shiny-theme/js/*"
	]
  }
}
...
```
This will help your code editor to understand the path of your theme files and help you with intellisense for auto imports.

#### b. Start Dev Server
Run the following command to start the frontend server for development: 

```bash
npm run dev
```

This will start the dev server and watch for changes to the frontend assets.
Open your web browser and go to `http://minetrax.test` and you should see the MineTrax homepage.

Start developing your custom theme by editing the frontend code in the `resources/js/my-shiny-theme/` directory.

:::note basic example
As an example, lets try to change primary color of website by editing `tailwind.config.js` file.

Find for `colors` object and change the `light-blue` color value from `colors.sky` to `colors.lime` or something of ur liking and see the changes in the browser.

```js title="tailwind.config.js"
...
colors: {
// highlight-next-line
    'light-blue': colors.lime,
    'cool-gray': colors.gray,
    'orange': colors.orange,
    'lime': colors.lime,
...
```
:::

### 3. Build for Production

When you are done with the development, run the following command to build the assets for production:

```bash
npm run prod
```

This will build & optimize the assets for production. You can find your new theme build in the `public/build/my-shiny-theme/` directory.

### 4. Pack your Theme for Sharing

There are two directories you need to pack for sharing your theme with others:

1. `resources/js/my-shiny-theme/` - This is the directory where you have developed your theme, and it also contains views and other assets.
2. `public/build/my-shiny-theme/` - This is the directory where your build files for production are located.

Its recommended to keep the structure of your theme same as the end user will have to copy the files to the same directory.

Eg: If your theme is named `my-shiny-theme` then you can pack the theme directory like this:
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
│   ├── theme-assets/               # (optional) If additional assets required by the theme.
│   │   ├── my-shiny-theme/         
│   │   │   ├── images/
```

You can create a zip file of the `my-theme-v4` and share it with others. Make sure you are only including the necessary files from `resources` and `public` directories, and not the entire MineTrax project.

#### How end user can install your theme?

Your theme users will have to:
1. Unzip your theme archive.
2. Copy the `resources/my-shiny-theme` directory to the `resources` directory of their MineTrax project. 
3. Copy the `public/build/my-shiny-theme` directory to the `public/build` directory of their MineTrax project.
4. Copy any additional assets if theme requires. Eg: `public/theme-assets/my-shiny-theme` directory to the `public/theme-assets` directory of their MineTrax project.
5. Update the `.env` file to use your theme.
    ```php title=".env"
    APP_THEME=my-shiny-theme
    ```
6. Run `sh update.sh` so that the changes are reflected in the application.

Check [Custom Theme](../web/custom-themes) for more details.


**Join [Discord](https://discord.gg/Hzfj27k) server to share your theme with others or for any queries.**

### 5. Become `Theme Developer`

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

When MineTrax is updated to include new feature (which make changes in frontend), you will have to update your theme theme to support those changes. 

Whenever new update is released, a changelog will be provided with the changes made in the frontend so that you can update your theme accordingly.

You will take latest pull of MineTrax and update your theme by comparing the changes in the default theme with your theme. Eg: If a new feature is added in the default theme, you will have to add that feature to your theme as well.

We recommend you to version your theme to same version as MineTrax. (Eg: If MineTrax is at v4.3.0, your theme should be at v4.3.0).

Going forward, MineTrax will try not introduce any breaking changes in minor versions (Eg: v4.4.0 to v4.5.0) so your theme not break for minor version updates.

:::info DX Improvement
This process will continuously be improved to make it easier for theme developers to keep their themes updated with MineTrax.
:::

## FAQ

### 1. Is there any theme development service available?

Yes, Join [Discord](https://discord.gg/Hzfj27k) server and create a request for it.

### 2. Can I use a different CSS framework instead of Tailwind?

Yes, you can use any CSS framework or write plain old css yourself. 

### 3. Can I use a different JavaScript framework instead of Vue.js?

Though its technically possible, we recommend you to use Vue.js as it is the default framework used in MineTrax.

### 4. Do I need my custom theme to be customizable like the default theme? (Eg: having multiple Footer styles.)

No, you can structure your theme however you like. You can make it customizable or not, it's up to you as per your requirements.

