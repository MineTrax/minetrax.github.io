---
sidebar_position: 10
title: .env Config File
id: dot-env-file
---

MineTrax uses [Laravel](https://laravel.com/) framework. It uses `.env` file to store environment variables. You can find the `.env` file in the root directory of the project (generally `/var/www/minetrax/.env`). You can use this file to configure your MineTrax installation.

Most of the time you won't need to change anything in this file after initial setup. But this file contains few config you might wanna tweak. 
Read below to know about all variable and their usage:


```bash title=".env"
APP_NAME=MineTrax # Name of your website. If your site name contains space, use quotes. e.g. APP_NAME="My Site"
APP_ENV=production # This is environment of deployment. Always set this to production when you are ready to go live. e.g. APP_ENV=production
APP_KEY=base64:Xk6mFYx... # This is key used to encrypt critical data and sessions. Never change it after initial setup.
APP_DEBUG=false # This is used to enable debug mode. 
APP_URL=https://yourdomain.com # This is the URL of your website. e.g. APP_URL=https://minetrax.live
DEBUGBAR_ENABLED=false # This is used to enable debug bar. It is recommended to keep it disabled in production.
TELESCOPE_ENABLED=false # This is used to enable telescope which is used to debug issues. It is recommended to keep it disabled in production.

LOG_CHANNEL=stack # This is used to set the log channel. It is recommended to keep it as it is.
LOG_DEPRECATIONS_CHANNEL=null # This is used to set the log channel for deprecations. It is recommended to keep it as it is.
LOG_LEVEL=debug # This is used to set the log level. Eg if you want to log only critical errors and ignore warning you can set it to `critical`. It is recommended to keep it as it is.
LOG_DISCORD_WEBHOOK_URL=  # If you want your web logs to be sent to discord, you can set the webhook url here.

DB_CONNECTION=mysql # This is used to set the database connection. It is recommended to keep it as it is.
DB_HOST=127.0.0.1 # This is used to set the database host. 
DB_PORT=3306 # This is used to set the database port.
DB_DATABASE=minetrax # This is used to set the database name.
DB_USERNAME=root # This is used to set the database username.
DB_PASSWORD=password # This is used to set the database password.

FILESYSTEM_DISK=local # This is used to set the filesystem disk for various kind of storage. By default it is set to local. You can change it to s3 if you want to use s3 for file storage.
MEDIA_DISK=media # This is used to set disk for media storage like post images. You can change it to `s3` if you want to use s3 for media storage.
PROFILE_PHOTO_DISK=public # This is storage disk for profile photos. You can change it to `s3` if you want to use s3 for profile photos.

BROADCAST_DRIVER=log # Broadcasting is way for 2 way communications between user-server. It is used for shouts, chat etc. If you want to use Pusher for broadcasting change it to `pusher`.
CACHE_DRIVER=redis # This is used to set the cache driver. It is recommended to keep it as it is.
QUEUE_CONNECTION=redis # It is recommended to keep it as it is.
SESSION_DRIVER=database # This is used to set the session driver. It is recommended to keep it as it is.
SESSION_LIFETIME=120 # This is used to set the session lifetime in minutes. It is recommended to keep it as it is.

MEMCACHED_HOST=127.0.0.1 # MineTrax don't use it.

REDIS_CLIENT=phpredis # This is used to set the redis client. It is recommended to keep it as it is.
REDIS_HOST=127.0.0.1 # This is used to set the redis host. 
REDIS_PASSWORD=null # This is used to set the redis password.
REDIS_PORT=6379 # This is used to set the redis port.

MAIL_MAILER=sendmail # This is used to set the mailer. It can be set to `smtp` if you want to use smtp server for sending emails. Mails can be disabled by setting it to `log`.
MAIL_HOST=localhost # This is used to set the mail host. Change it to your mail host if you are using smtp.
MAIL_PORT=25 # This is used to set the mail port. Change it to your mail port if you are using smtp.
MAIL_USERNAME=null # This is used to set the mail username. Change it to your mail username if you are using smtp.
MAIL_PASSWORD=null # This is used to set the mail password. Change it to your mail password if you are using smtp.
MAIL_ENCRYPTION=null # This is used to set the mail encryption. It can be set to `tls` if you are using smtp.
MAIL_FROM_ADDRESS=no-reply@minetrax.github.io # This is used to set the mail from address. Change it to your mail from address if you are using smtp.
MAIL_FROM_NAME="${APP_NAME}" # This is used to set the mail from name. It uses your site name by default.

AWS_ACCESS_KEY_ID= # This is used to set the aws access key id. It is required if you are using s3 for file storage.
AWS_SECRET_ACCESS_KEY= # This is used to set the aws secret access key. It is required if you are using s3 for file storage.
AWS_DEFAULT_REGION=us-east-1 # This is used to set the aws default region. It is required if you are using s3 for file storage.
AWS_BUCKET= # This is used to set the aws bucket. It is required if you are using s3 for file storage.
AWS_USE_PATH_STYLE_ENDPOINT=false # It is recommended to keep it as it is.

PUSHER_APP_ID= # This is used to set the pusher app id. It is required if you are using pusher for broadcasting.
PUSHER_APP_KEY= # This is used to set the pusher app key. It is required if you are using pusher for broadcasting.
PUSHER_APP_SECRET= # This is used to set the pusher app secret. It is required if you are using pusher for broadcasting.
PUSHER_APP_CLUSTER=mt1 # This is used to set the pusher app cluster. It is required if you are using pusher for broadcasting.
PUSHER_HOST= # It is recommended to keep it as it is.
PUSHER_PORT=443 # It is recommended to keep it as it is.
PUSHER_SCHEME=https # It is recommended to keep it as it is.

VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}" # It is recommended to keep it as it is.
VITE_PUSHER_HOST="${PUSHER_HOST}" # It is recommended to keep it as it is.
VITE_PUSHER_PORT="${PUSHER_PORT}" # It is recommended to keep it as it is.
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}" # It is recommended to keep it as it is.
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}" # It is recommended to keep it as it is.

GEOLOCATION_DRIVER=maxmind_database # Geolocation driver is used to detect user's location from their ip address. It is recommended to keep it as it is.
MAXMIND_USER_ID=
MAXMIND_LICENSE_KEY=

GITHUB_OAUTH_ENABLED=false # Set this true if you want to enable Login with GitHub.
GITHUB_CLIENT_ID= # This is used to set the github client id. It is required if you are using github for oauth.
GITHUB_CLIENT_SECRET= # This is used to set the github client secret. It is required if you are using github for oauth.
GITHUB_AUTH_REDIRECT=http://minetrax.live/auth/callback/github # Just change the domain part of this url to your domain. You will need this url while creating github oauth app.

GOOGLE_OAUTH_ENABLED=false # Set this true if you want to enable Login with Google.
GOOGLE_CLIENT_ID= # This is used to set the google client id. It is required if you are using google for oauth.
GOOGLE_CLIENT_SECRET= # This is used to set the google client secret. It is required if you are using google for oauth.
GOOGLE_AUTH_REDIRECT=http://minetrax.live/auth/callback/google # Just change the domain part of this url to your domain. You will need this url while creating google oauth app.

FACEBOOK_OAUTH_ENABLED=false # Set this true if you want to enable Login with Facebook.
FACEBOOK_CLIENT_ID= # This is used to set the facebook client id. It is required if you are using facebook for oauth.
FACEBOOK_CLIENT_SECRET= # This is used to set the facebook client secret. It is required if you are using facebook for oauth.
FACEBOOK_AUTH_REDIRECT=http://minetrax.live/auth/facebook/callback # Just change the domain part of this url to your domain. You will need this url while creating facebook oauth app.

TWITTER_OAUTH_ENABLED=false # Set this true if you want to enable Login with Twitter.
TWITTER_CLIENT_ID= # This is used to set the twitter client id. It is required if you are using twitter for oauth.
TWITTER_CLIENT_SECRET= # This is used to set the twitter client secret. It is required if you are using twitter for oauth.
TWITTER_AUTH_REDIRECT=http://minetrax.live/auth/twitter/callback # Just change the domain part of this url to your domain. You will need this url while creating twitter oauth app.

DISCORD_OAUTH_ENABLED=false # Set this true if you want to enable Login with Discord.
DISCORD_CLIENT_ID= # This is used to set the discord client id. It is required if you are using discord for oauth.
DISCORD_CLIENT_SECRET= # This is used to set the discord client secret. It is required if you are using discord for oauth.
DISCORD_REDIRECT_URI=http://minetrax.live/auth/discord/callback # Just change the domain part of this url to your domain. You will need this url while creating discord oauth app.

SETTINGS_CACHE_ENABLED=false # It is recommended to keep it as it is.
RANDOM_USER_AVATARS=true # User who haven't uploaded any profile image get a unique randomly generated profile image by default. Set this false if you want to disable this feature.

APP_LOCALE=en # This is used to set the app locale. Change it to your locale if you want to change the app locale. Eg: `de`
DISABLE_USER_REGISTRATION=false # Set this true if you want to disable user registration.
VERIFY_USER_EMAIL=false # Set this true if you want to verify user email before allowing them to do major actions on web.

SHOW_POWERED_BY=true # Set this false if you don't want to show powered by text in footer.
SHOW_HOME_BUTTON=false # Set this true if you want to show home button in default navbar. It is recommended to keep it as it is.
COOKIE_CONSENT_ENABLED=false # Set this true if you want to show cookie consent banner in footer which is required by EU law.

USE_LEGACY_FTP_DRIVER=false # Sometimes FTP connection to your server fails which you are adding your server due to your hosting provider using old version of FTP server. In such cases you can set it to `true` and try adding your server again. It is recommended to keep it as it is unless you are sure that your hosting provider is using old version of FTP server.

MARK_USER_VERIFYED_ON_ACCOUNT_LINK=true # When a user links their minecraft account to their web account, their web account is marked as verified. Set this to false if you want to disable this functionality.
USE_USERNAME_FOR_SKINS=false # Set this true if you want to use username for fetching skins instead of uuid. It is useful if you are using cracked server or running server in offline mode.
FETCH_AVATAR_FROM_URL_USING_CURL=false # It is recommended to keep it as it is.

PLAYER_FETCHER_CRON_INTERVAL=hourly # MineTrax automatically scans your servers for new players every hour by default. You can change it to one of these: `everyThirtyMinutes`, `everyFifteenMinutes`, `everyFiveMinutes` if you want to do rescan more frequently. It is recommended to keep it as it is.

ALLOW_ANY_PROVIDER_SOCIAL_AUTH=false # By default, When a user signup using a Social Auth like Google their account get created and attached to that social account. Now if the same user try to login using a different social account like Facebook having same email address, it will fail. Set this to true if you want to allow login to an account with email using any social auth. Eg: if you enable this, User will be able to login via Google, Facebook etc to same account given that they have same email address.
```