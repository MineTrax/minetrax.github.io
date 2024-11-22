"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[5659],{8549:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"web/dot-env-file","title":".env Config File","description":"MineTrax uses Laravel framework. It uses .env file to store environment variables. You can find the .env file in the root directory of the project (generally /var/www/minetrax/.env). You can use this file to configure your MineTrax installation.","source":"@site/docs/web/dot-env.file.md","sourceDirName":"web","slug":"/web/dot-env-file","permalink":"/docs/web/dot-env-file","draft":false,"unlisted":false,"editUrl":"https://github.com/minetrax/minetrax.github.io/edit/main/docs/web/dot-env.file.md","tags":[],"version":"current","sidebarPosition":100,"frontMatter":{"sidebar_position":100,"title":".env Config File","id":"dot-env-file"},"sidebar":"tutorialSidebar","previous":{"title":"Backup Site","permalink":"/docs/web/backup"},"next":{"title":"Hero Particle Effects","permalink":"/docs/web/hero-particle-effects"}}');var o=i(4848),n=i(8453);const a={sidebar_position:100,title:".env Config File",id:"dot-env-file"},r=void 0,u={},d=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["MineTrax uses ",(0,o.jsx)(t.a,{href:"https://laravel.com/",children:"Laravel"})," framework. It uses ",(0,o.jsx)(t.code,{children:".env"})," file to store environment variables. You can find the ",(0,o.jsx)(t.code,{children:".env"})," file in the root directory of the project (generally ",(0,o.jsx)(t.code,{children:"/var/www/minetrax/.env"}),"). You can use this file to configure your MineTrax installation."]}),"\n",(0,o.jsx)(t.p,{children:"Most of the time you won't need to change anything in this file after initial setup. But this file contains few config you might wanna tweak.\nRead below to know about all variable and their usage:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",metastring:'title=".env"',children:'APP_NAME=MineTrax # Name of your website. If your site name contains space, use quotes. e.g. APP_NAME="My Site"\nAPP_ENV=production # This is environment of deployment. Always set this to production when you are ready to go live. e.g. APP_ENV=production\nAPP_KEY=base64:Xk6mFYx... # This is key used to encrypt critical data and sessions. Never change it after initial setup.\nAPP_DEBUG=false # This is used to enable debug mode. \nAPP_URL="https://yourdomain.com" # This is the URL of your website. e.g. APP_URL=https://minetrax.world\nAPP_THEME=default # This is used to change your website theme to any custom theme.\nAPP_TIMEZONE=UTC # This is used to set the timezone of your website. Don\'t change it unless you know what you are doing.\n\nDEBUGBAR_ENABLED=false # This is used to enable debug bar. It is recommended to keep it disabled in production.\nTELESCOPE_ENABLED=false # This is used to enable telescope which is used to debug issues. It is highly recommended to keep it disabled in production.\nPULSE_ENABLED=false # This is used to enable pulse which is used to monitor your application.\n\nLOG_CHANNEL=stack # This is used to set the log channel. It is recommended to keep it as it is.\nLOG_DEPRECATIONS_CHANNEL=null # This is used to set the log channel for deprecations. It is recommended to keep it as it is.\nLOG_LEVEL=debug # This is used to set the log level. Eg if you want to log only critical errors and ignore warning you can set it to `critical`. It is recommended to keep it as it is.\nLOG_DISCORD_WEBHOOK_URL=  # If you want your web logs to be sent to discord, you can set the webhook url here.\n\nDB_CONNECTION=mysql # This is used to set the database connection. It is recommended to keep it as it is.\nDB_HOST=127.0.0.1 # This is used to set the database host. \nDB_PORT=3306 # This is used to set the database port.\nDB_DATABASE=minetrax # This is used to set the database name.\nDB_USERNAME=root # This is used to set the database username.\nDB_PASSWORD=password # This is used to set the database password.\n\nFILESYSTEM_DISK=local # This is used to set the filesystem disk for various kind of storage. By default it is set to local. You can change it to s3 if you want to use s3 for file storage.\nMEDIA_DISK=media # This is used to set disk for media storage like post images. You can change it to `s3` if you want to use s3 for media storage.\nPROFILE_PHOTO_DISK=public # This is storage disk for profile photos. You can change it to `s3` if you want to use s3 for profile photos.\n\nBROADCAST_DRIVER=log # Broadcasting is way for 2 way communications between user-server. It is used for shouts, chat etc. If you want to use Pusher for broadcasting change it to `pusher`.\nCACHE_DRIVER=redis # This is used to set the cache driver. It is recommended to keep it as it is.\nQUEUE_CONNECTION=redis # It is recommended to keep it as it is.\nSESSION_DRIVER=database # This is used to set the session driver. It is recommended to keep it as it is.\nSESSION_LIFETIME=120 # This is used to set the session lifetime in minutes. It is recommended to keep it as it is.\n\nMEMCACHED_HOST=127.0.0.1 # MineTrax don\'t use it.\n\nREDIS_CLIENT=phpredis # This is used to set the redis client. It is recommended to keep it as it is.\nREDIS_HOST=127.0.0.1 # This is used to set the redis host. \nREDIS_PASSWORD=null # This is used to set the redis password.\nREDIS_PORT=6379 # This is used to set the redis port.\n\nMAIL_MAILER=sendmail # This is used to set the mailer. It can be set to `smtp` if you want to use smtp server for sending emails. Mails can be disabled by setting it to `log`.\nMAIL_HOST=localhost # This is used to set the mail host. Change it to your mail host if you are using smtp.\nMAIL_PORT=25 # This is used to set the mail port. Change it to your mail port if you are using smtp.\nMAIL_USERNAME=null # This is used to set the mail username. Change it to your mail username if you are using smtp.\nMAIL_PASSWORD=null # This is used to set the mail password. Change it to your mail password if you are using smtp.\nMAIL_ENCRYPTION=null # This is used to set the mail encryption. It can be set to `tls` if you are using smtp.\nMAIL_FROM_ADDRESS=no-reply@minetrax.github.io # This is used to set the mail from address. Change it to your mail from address if you are using smtp.\nMAIL_FROM_NAME="${APP_NAME}" # This is used to set the mail from name. It uses your site name by default.\n\nAWS_ACCESS_KEY_ID= # This is used to set the aws access key id. It is required if you are using s3 for file storage.\nAWS_SECRET_ACCESS_KEY= # This is used to set the aws secret access key. It is required if you are using s3 for file storage.\nAWS_DEFAULT_REGION=us-east-1 # This is used to set the aws default region. It is required if you are using s3 for file storage.\nAWS_BUCKET= # This is used to set the aws bucket. It is required if you are using s3 for file storage.\nAWS_USE_PATH_STYLE_ENDPOINT=false # It is recommended to keep it as it is.\n\nPUSHER_APP_ID= # This is used to set the pusher app id. It is required if you are using pusher for broadcasting.\nPUSHER_APP_KEY= # This is used to set the pusher app key. It is required if you are using pusher for broadcasting.\nPUSHER_APP_SECRET= # This is used to set the pusher app secret. It is required if you are using pusher for broadcasting.\nPUSHER_APP_CLUSTER=mt1 # This is used to set the pusher app cluster. It is required if you are using pusher for broadcasting.\nPUSHER_HOST= # It is recommended to keep it as it is.\nPUSHER_PORT=443 # It is recommended to keep it as it is.\nPUSHER_SCHEME=https # It is recommended to keep it as it is.\n\nVITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}" # It is recommended to keep it as it is.\nVITE_PUSHER_HOST="${PUSHER_HOST}" # It is recommended to keep it as it is.\nVITE_PUSHER_PORT="${PUSHER_PORT}" # It is recommended to keep it as it is.\nVITE_PUSHER_SCHEME="${PUSHER_SCHEME}" # It is recommended to keep it as it is.\nVITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}" # It is recommended to keep it as it is.\n\nGEOLOCATION_DRIVER=maxmind_database # Geolocation driver is used to detect user\'s location from their ip address. It is recommended to keep it as it is.\nMAXMIND_USER_ID=\nMAXMIND_LICENSE_KEY=\n\nGITHUB_OAUTH_ENABLED=false # Set this true if you want to enable Login with GitHub.\nGITHUB_CLIENT_ID= # This is used to set the github client id. It is required if you are using github for oauth.\nGITHUB_CLIENT_SECRET= # This is used to set the github client secret. It is required if you are using github for oauth.\nGITHUB_AUTH_REDIRECT=http://minetrax.world/auth/callback/github # Just change the domain part of this url to your domain. You will need this url while creating github oauth app.\n\nGOOGLE_OAUTH_ENABLED=false # Set this true if you want to enable Login with Google.\nGOOGLE_CLIENT_ID= # This is used to set the google client id. It is required if you are using google for oauth.\nGOOGLE_CLIENT_SECRET= # This is used to set the google client secret. It is required if you are using google for oauth.\nGOOGLE_AUTH_REDIRECT=http://minetrax.world/auth/callback/google # Just change the domain part of this url to your domain. You will need this url while creating google oauth app.\n\nFACEBOOK_OAUTH_ENABLED=false # Set this true if you want to enable Login with Facebook.\nFACEBOOK_CLIENT_ID= # This is used to set the facebook client id. It is required if you are using facebook for oauth.\nFACEBOOK_CLIENT_SECRET= # This is used to set the facebook client secret. It is required if you are using facebook for oauth.\nFACEBOOK_AUTH_REDIRECT=http://minetrax.world/auth/facebook/callback # Just change the domain part of this url to your domain. You will need this url while creating facebook oauth app.\n\nTWITTER_OAUTH_ENABLED=false # Set this true if you want to enable Login with Twitter.\nTWITTER_CLIENT_ID= # This is used to set the twitter client id. It is required if you are using twitter for oauth.\nTWITTER_CLIENT_SECRET= # This is used to set the twitter client secret. It is required if you are using twitter for oauth.\nTWITTER_AUTH_REDIRECT=http://minetrax.world/auth/twitter/callback # Just change the domain part of this url to your domain. You will need this url while creating twitter oauth app.\n\nDISCORD_OAUTH_ENABLED=false # Set this true if you want to enable Login with Discord.\nDISCORD_CLIENT_ID= # This is used to set the discord client id. It is required if you are using discord for oauth.\nDISCORD_CLIENT_SECRET= # This is used to set the discord client secret. It is required if you are using discord for oauth.\nDISCORD_REDIRECT_URI=http://minetrax.world/auth/discord/callback # Just change the domain part of this url to your domain. You will need this url while creating discord oauth app.\nDISCORD_BOT_TOKEN= # Bot token for discord bot.\n\nSETTINGS_CACHE_ENABLED=false # It is recommended to keep it as it is.\nRANDOM_USER_AVATARS=true # User who haven\'t uploaded any profile image get a unique randomly generated profile image by default. Set this false if you want to disable this feature.\n\nAPP_LOCALE=en # This is used to set the app locale. Change it to your locale if you want to change the app locale. Eg: `de`\nAVAILABLE_LOCALES=en,es,ru,sk,de,pl,uk,hi,it,zh-hk,zh-cn,ja # This is used in language switcher. This is list of all locales which are made available in the switcher. Set it to empty if you want to disable language switcher.\n\nDISABLE_USER_REGISTRATION=false # Set this true if you want to disable user registration.\nVERIFY_USER_EMAIL=false # Set this true if you want to verify user email before allowing them to do major actions on web.\nDISABLE_EMAIL_PASSWORD_AUTH=false # Set this true if you want to disable email password authentication and only allow social auth.\n\nSHOW_POWERED_BY=true # Set this false if you don\'t want to show powered by text in footer.\nSHOW_HOME_BUTTON=false # Set this true if you want to show home button in default navbar. It is recommended to keep it as it is.\nCOOKIE_CONSENT_ENABLED=false # Set this true if you want to show cookie consent banner in footer which is required by EU law.\n\nUSE_LEGACY_FTP_DRIVER=false # Sometimes FTP connection to your server fails which you are adding your server due to your hosting provider using old version of FTP server. In such cases you can set it to `true` and try adding your server again. It is recommended to keep it as it is unless you are sure that your hosting provider is using old version of FTP server.\n\nMARK_USER_VERIFYED_ON_ACCOUNT_LINK=true # When a user links their minecraft account to their web account, their web account is marked as verified. Set this to false if you want to disable this functionality.\nDISABLE_PLAYER_UNLINKING=false # Set this true if you want to disable unlinking of players from their web account.\nUSE_USERNAME_FOR_SKINS=false # Set this true if you want to use username for fetching skins instead of uuid. It is useful if you are using cracked server or running server in offline mode.\nFETCH_AVATAR_FROM_URL_USING_CURL=false # It is recommended to keep it as it is.\n\nPLAYER_FETCHER_CRON_INTERVAL=hourly # MineTrax automatically scans your servers for new players every hour by default. You can change it to one of these: `everyThirtyMinutes`, `everyFifteenMinutes`, `everyFiveMinutes` if you want to do rescan more frequently. It is recommended to keep it as it is.\n\nALLOW_ANY_PROVIDER_SOCIAL_AUTH=false # By default, When a user signup using a Social Auth like Google their account get created and attached to that social account. Now if the same user try to login using a different social account like Facebook having same email address, it will fail. Set this to true if you want to allow login to an account with email using any social auth. Eg: if you enable this, User will be able to login via Google, Facebook etc to same account given that they have same email address.\n\n\nASKDB_ENABLED=false # Enable AskDB - AI Based Database Query Feature.\nOPENAI_API_KEY= # OpenAI API Key used by AskDB.\n\nBACKUP_ENABLED=true # Automatic Daily backup of database and files.\nBACKUP_APP_NAME="${APP_NAME}-backup" # It is recommended to keep it as it is.\nBACKUP_DISK=local # Disk where backup should be stored. Available Options: local, sftp, s3-private\nBACKUP_ARCHIVE_PASSWORD=null # If you want to encrypt the archieve with a password\nBACKUP_NOTIFICATION_EMAIL= # If you want to email after backup is successful or failed.\n\nPOWERED_BY_EXTRA_NAME= # Co-powered by name in footer\nPOWERED_BY_EXTRA_LINK= # Co-powered by URL link in footer\n\nPING_PROXY_SERVER_USING_IP_ADDRESS=false # If want to PING minecraft server using IP address instead of hostname.\nQUERY_PROXY_SERVER_USING_IP_ADDRESS=true # If want to QUERY minecraft server using IP address instead of hostname.\n\nMAX_USER_PROFILE_PHOTO_SIZE_KB=512  # Maximum size of user profile photo in KB.\nMAX_USER_COVER_PHOTO_SIZE_KB=1024 # Maximum size of user cover photo in KB.\nMAX_POST_FEED_MEDIA_SIZE_KB=1024 # Maximum size of post feed media in KB.\n\nRATELIMIT_API_PER_MINUTE=600 # Maximum number of API requests per minute.\n\n# If you want SFTP backup, you need to set these variables.\nSFTP_DISK_HOST= # SFTP Hostname\nSFTP_DISK_USERNAME= # SFTP Username\nSFTP_DISK_PASSWORD= # SFTP Password\nSFTP_DISK_PORT=22 # SFTP Port\n\nPLAYER_SKIN_CHANGER_ENABLED=true # Enable Player Skin Changer Feature.\nPLAYER_SKIN_CHANGER_COOLDOWN_IN_SECONDS=60 # Cooldown in seconds for changing skin.\n\nHIDE_PLAYER_NEXT_RANK=false # Hide player\'s next rank in player profile.\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var s=i(6540);const o={},n=s.createContext(o);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);