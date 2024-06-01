---
sidebar_position: 5
title: Adding Server on Web
id: adding-minecraft-server
---

# Adding Minecraft Server to Web

:::info Notice
Both spigot and proxy server type can be added to MineTrax. It is recommended that you add all servers to MineTrax to get full experience.
:::

To track a server you need to add it from Admin section.

**We have to add all servers we want to track.**

To add a server to minetrax we have to follow these steps:

1. First we add the server details in web.
2. Then we install the plugin on our minecraft server and configure it.

## Adding minecraft server on Web

#### 1. Go to `Servers` page from Admin sidebar and click on `Add Server` or `Add Proxy Server` button.

#### 2. Fill in your server details

Minetrax will need various details as per your server configuration.

Eg: 
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
3. more...

_It recommended to keep this port greater than 1024 as non root user cannot open port less than 1024._

Note: If you are using a Third Party Server Provider, you might need to ask them to allow opening of one extra port for webquery. Most of the time hosting provider already give you few extra port which you can open. You can use one of them as webquery.
:::

#### 3. Save it
Once you have filled all details, click on 'Add Server', and it should add your server to web and provide you with details to configure plugin. Follow those steps and you should be good to go.


## Adding MineTrax Plugin to Server
:::warning
If you missed the steps to configure plugin after adding server to web, you can follow the steps below else you can skip below steps.
:::

Follow steps in this tutorial to add MineTrax plugin to your server.

[How to Add Plugin to Minecraft Server](../installation/setup-plugin.md)

After you have configured plugin using above tutorial,
Verify by going to server listing page in admin section and make sure it show `online` there.

Congrats! You have successfully added your server to MineTrax.