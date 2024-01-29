---
sidebar_position: 60
title: Social Logins
id: social-logins
---

:::caution
Work in progress! Check this page later.
:::

Minetrax support various social login like:

 1. Discord
 2. Twitter
 3. Google
 4. Github
 5. Facebook

## Discord
This is a simple tutorial for setting up Discord OAuth with Minetrax

1. First go to https://discord.com/developers/applications and login/create an account.
2. We first need to create a new application, use the `New Application` button in the top right, you can name it whatever you like.
3. Now under the OAuth->General tab note down your CLIENT ID and CLIENT SECRET, you will need these later (Note: You will be required to reset the client secret to view it.)
4. You now need to add a Redirect URL, Use the `Add Redirect` button  to do this. Your URL will be your base domain with '/auth/discord/callback' added onto the end. For example https://minetrax.live/ becomes https://minetrax.live/auth/discord/callback - Note this down aswell, you will need it later.

After this open your .env file and update the related variables with the ones we noted down previously along with enabling Discord OAuth. Eg:

```js
DISCORD_OAUTH_ENABLED=true
DISCORD_CLIENT_ID=123456789123456789
DISCORD_CLIENT_SECRET=abcdefghijklmnopqrstuvwxyz
DISCORD_REDIRECT_URI=https://minetrax.live/auth/discord/callback
```

Next Restart the queue workers:

```
cd /var/www/minetrax
php artisan queue:restart
```

And your done, if all went well you should now get the option of using discord on your registration/login page!

## Twitter

## Google

## Github

## Facebook

## Login to account using any Social
By default MineTrax will only allow Login from a social app if you have created your account using that social auth first time. If you want minetrax to let you login from any social auth given your email address is same then change the given environment variable in your .env file to true.
```
ALLOW_ANY_PROVIDER_SOCIAL_AUTH=true
```
