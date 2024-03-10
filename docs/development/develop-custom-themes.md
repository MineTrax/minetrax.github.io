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

## Getting Started

Open your MineTrax project in any code editor.

### 1. Update .env variable

Open your `.env` file and update the `APP_THEME` variable to some unique name for your new theme.

For example, if you want to name your theme `my-shiny-theme` then update the `APP_THEME` variable like this:

```php title=".env"
APP_THEME=my-shiny-theme
```

:::info Keep your theme name unique
The name should be lowercase letters, numbers, hyphens(-), and underscores(_) only. No spaces or special characters are allowed.
Try to keep the name unique to avoid conflicts with other themes.

Don't use `default` as the theme name as it is reserved for the default theme.
:::

### 2. Start Frontend Development Server

Run the following command to start the frontend server for development: 

```bash
npm run dev
```

This will start the development server and watch for changes to the frontend assets.
Open your web browser and go to `http://minetrax.test` and you should see the MineTrax homepage.

Start developing your custom theme by editing the frontend code in the `resources/js` directory.

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

This will build & optimize the assets for production. You can find your new theme in the `public/build` directory.

### 4. Share Your Theme

You can zip your theme folder located in the `public/build` directory and share it with others. They can then install it unzipping it in the same directory (e.g. `public/build`), and then update the `.env` file to use your theme.

```php title=".env"
APP_THEME=my-shiny-theme
```

:::info .env variable change
In non-development environments, whenver something is changed in `.env`, user will have to run `sh update.sh` so that the changes are reflected in the application. Instruct your theme users to do so.
:::

Check [Custom Theme](../web/custom-themes) to know how to use custom themes.

**Join [Discord](https://discord.gg/Hzfj27k) server and share your theme with others or for any queries.**


## Images & Other Assets

If your theme requires adding additional assets like images, fonts, etc. you can add them to the `public/theme-assets` directory.

Create a new directory for your theme and add your assets there. For example, if your theme is named `my-shiny-theme` you can add your assets to `public/theme-assets/my-shiny-theme` directory.

You can then reference these assets in your theme's frontend code using the `/theme-assets/my-shiny-theme` path.

While sharing your theme with others, you will have to include it in your theme package and instruct the users to copy those to the `public/theme-assets` directory.


## FAQ

### 1. Is there any theme development service available?

Yes, Join [Discord](https://discord.gg/Hzfj27k) server and create a request for it.

### 2. Can I use a different CSS framework instead of Tailwind?

Yes, you can use any CSS framework or write plain old css yourself. 

### 3. Can I use a different JavaScript framework instead of Vue.js?

No, currently MineTrax uses Vue.js with Inertia for the frontend. 

### 4. Do I need my custom theme to be customizable like the default theme? (Eg: having multiple Footer styles.)

No, you can structure your theme however you like. You can make it customizable or not, it's up to you as per your requirements.

