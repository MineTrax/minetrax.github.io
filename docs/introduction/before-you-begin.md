---
sidebar_position: 3
title: Before you Begin
id: before-you-begin
---

MineTrax has two parts:
 - Web
 - Plugin

You need to install both web and plugin part to get the suite working.

## Web
Developed using Laravel, Web is the main part of suite, i.e, UI and backend layer. It will be hard to host the web in a traditional web hosting, It is recommended to host the web in a virtual(VPS) or dedicated server as per your need.

## Plugin
This is the spigot plugin which you need to install on your Minecraft server.
It is responsible for:
 - Calculating and sending Player & Server Intel data to Web.
 - Sending chat and servers log to web if enabled.
 - Enabling users for web to chat with ingame players.
 - and various other things like whois command /ww etc.


:::caution MineTrax is Under Active Development
Please note that project is under active development and is not marked as release candidate yet, so can introduce breaking changes in any commit.
:::