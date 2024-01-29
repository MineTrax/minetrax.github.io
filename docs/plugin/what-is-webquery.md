---
sidebar_position: 4
title: What is WebQuery?
id: what-is-webquery
---

WebQuery is a feature of Minetrax plugin which allows web to communicate with your server.

For minetrax web to communicate with your server, you need to open a port in your server and configure it in Minetrax plugin. This port should be available and not used by any other service. Eg: `25569`. 
Communication happening through WebQuery is encrypted and protected by your API Key and Secret.

Currently WebQuery is used for these features:

1. In-game chat. (Send message from web to game).
2. Admin commands. (Send commands from web to game).
3. Online players list. (Show online players in web).

:::tip
Only web server need to connect to this port, so if you want you can block this port from outside world and only allow your web server to connect to it.
:::

### Web to Server (Minecraft) Communication
Please note WebQuery is used when Web wants to communicate with Minecraft server.
It is not used when Minecraft server wants to communicate with Web, for that minetrax plugin uses Http API of Web.


### Server (Minecraft) to Web Communication
HTTP API is used when Minecraft server wants to communicate with Web.
Some of the features which rely on it are:
1. Sending player intel to web.
2. Sending server intel to web.
3. Sending In-game chat to web.
4. Sending Console logs to web.