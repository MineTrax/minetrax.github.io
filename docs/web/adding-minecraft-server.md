---
sidebar_position: 1
title: Adding Minecraft Server
id: adding-minecraft-server
---

# Adding Minecraft Server to Web

:::info Notice
In this tutorial we are going to add a minecraft server (spigot/bukkit etc).

*This is not tutorial for adding Bungee/Proxy server as adding it is straight forward and don't require plugin connection.*
:::

To track a server you need to add it from Admin section.

If you want to track statistics of your server or want to use the in-game chat feature, you need to add your server to web first.

**We have to add all servers we want to track. (Just adding a proxy will not work)**

To add a server to minetrax we have to follow these steps:

1. First we add the server details in web.
2. Then we install the plugin on our minecraft server and configure it.

## Adding minecraft server on Web

#### 1. Go to `Servers` page from Admin sidebar and click on `Add Server` button.

#### 2. Fill in your server details

Minetrax will need various details to track your server.
Enter a method of connecting (SFTP/FTP etc) and enter your server credentials.
:::info
All credentials will be encrypted before saving to database.
:::

Click on `Test Connection` button after filling in credentials. Minetrax will try to connect to your server and check if it is able to connect or not.

If successful it will give you more details to fill in like:

1. **Server Name** -> Server name will be shown to public. Eg: `My Awesome Server`
2. **Hostname** -> You can add anything here which can be shown to public. Eg: `play.myserver.com`
3. **IP Address** -> This is the IP address of your server.
4. **Join Port** -> This is the port on which your server is running. Eg: `25565`
5. **Query Port** -> This is query port of your server. Can be found in `server.properties` file. Eg: `25565`
6. **Webquery Port** -> This is the port on which minetrax plugin will be running. This port should be available and not used by any other service. Choose any port which you know is available and you can open it. Eg: `25569` .
7. _and other details..._

:::info What is Webquery Port?
Webquery port is port which MineTrax plugin will use to communite with server. This port should be available and not used by any other service. Eg: `25569`.

WebQuery is used for these features:

1. In-game chat.
2. Rank sync.

_It recommended to keep this port greater than 1024 as non root user cannot open port less than 1024._

Note: If you are using a Third Party Server Provider, you might need to ask them to allow opening of one extra port for webquery. Most of the time hosting provider already give you few extra port which you can open. You can use one of them as webquery.
:::

#### 3. Save it
Once you have filled all details, click on save, and it should add your server to web.

Next, You need to note down few things which you gonna use while adding the Plugin.
1. `server-id` -> This is the id of your server. You can find it in the server listing page. First column `Id` which your server id. (Eg: `1`).
2. `api-key` and `api-secret` -> These are secret keys which is used to encrypt data while communicating with plugin. You can find these in `Admin > Settings > Plugin Setting`.
3. `api-host` -> This is the URL where web is hosted. Eg: `https://minetrax.xinecraft.com`
4. `webquery-port` -> This is the webquery port which you have set while creating server in web.

## Adding MineTrax Plugin to Server
Follow steps in this tutorial to add MineTrax plugin to your server.

[How to Add Plugin to Minecraft Server](../installation/setup-plugin.md)

After you have configured plugin using above tutorial,
Verify by going to server listing page in admin section and make sure it show `online` there.

Congrats! You have successfully added your server to MineTrax.