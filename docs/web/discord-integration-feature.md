---
sidebar_position: 5
title: Discord Integration
id: discord-integration
---

Currently MineTrax has these integration with Discord:

1. Social Authentication (OAuth) 
2. Discord Notifications (with Bot)
3. Serverlog (Webhook)

Future planned integrations:

- Role Sync with Linked Roles feature
- Interactions with Bot


## Setup Discord OAuth and Bot for Notifications

### 1. Create application in Discord for OAuth and Bot.

1. Go to [Discord Developers Portal](https://discord.com/developers/applications) and create a new application by clicking on `New Application` button at top right. You can name it anything you like.

2. Now go to `OAuth2` tab and note down `CLIENT ID` and `CLIENT SECRET` from there. You will have to `Reset Secret` once to view it.

3. You now need to add a Redirect URL, Use the `Add Redirect` button to do this. Your URL will be your base domain with `/auth/discord/callback` added onto the end. For example for base `https://minetrax.live` our callback becomes `https://minetrax.live/auth/discord/callback`. Enter the callback there and click `Save Changes`.

4. Next go to `Bot` tab, and find your `TOKEN` (You will have to `Reset Token` once to view it). Copy and note down the that bot token we will need it in next steps.

5. Now open your `.env` file in minetrax directory and update these variables as follow.
   ```php title=".env"
   DISCORD_OAUTH_ENABLED=true #Set it to `true` if `false`
   DISCORD_CLIENT_ID= #Enter your CLIENT ID here
   DISCORD_CLIENT_SECRET= #Enter your CLIENT SECRET here
   DISCORD_REDIRECT_URI="${APP_URL}/auth/discord/callback" #Leave it as it is.
   DISCORD_BOT_TOKEN= #Enter your Bot Token here
   ```

   Example:
   ```php title".env"
   DISCORD_OAUTH_ENABLED=true
   DISCORD_CLIENT_ID=865111111111111111
   DISCORD_CLIENT_SECRET=Qfsdalf_45-b222-o0E_aAMklasdjf
   DISCORD_REDIRECT_URI="${APP_URL}/auth/discord/callback"
   DISCORD_BOT_TOKEN=ODY1NzQ2OTMyMdkaslfjsdfl.Gn7gAZ.3954sdalfasdflh0945353409
   ```

6. Run update `sh update.sh` so that the changes get reflected in the application.
    ```
    cd /var/www/minetrax
    sh update.sh
    ```

### 2. Add Bot to your server

1. Open your minetrax directory in SSH and run `php artisan discord:setup` to initialize the process.
    ```
    cd /var/www/minetrax
    php artisan discord:setup
    ```

2. It will ask if the bot is already added to your server. Type `no` and enter.

3. Next it will ask you for CLIENT ID. Enter the CLIENT ID which you entered in `.env`, and then press Enter.

4. It will give you a link which you should click and follow the instructions to add the Bot to your Discord Server.

5. Once its added come back to the prompt and type `yes` and press Enter. 
 
6. It will do few checks and everything should complete and you should see a message `Your bot has been identified by Discord and can now send API requests!`.

7. Done.

:::info User need to login with Discord once 

For notification to work for a user, they will need to login with Discord at least once after you have setup the Discord OAuth and Bot.

Next time whenever your user login with Discord, it will automatically link their account with Discord and do everything require to send notifications to him in DM.
:::
