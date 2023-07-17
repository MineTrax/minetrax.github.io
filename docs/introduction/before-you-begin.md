---
sidebar_position: 3
title: Before you Begin
id: before-you-begin
---

MineTrax has two parts:
 - Web
 - Plugin

You can just install Web if you don't need extra functionalities which Plugin provide.
Though it is highly recommended to install both web and plugin to get the full experience.

## Web
https://github.com/minetrax/minetrax

Developed using Laravel, Web is the main part of suite, i.e, UI and backend layer. It will be hard to host the web in a traditional web hosting, It is recommended to host the web in a virtual(VPS) or dedicated server as per your need. You can always join us on [Discord](https://discord.gg/Hzfj27k) for help or queries.

Web can be installed in one of two ways.
1. [AutoInstaller](../installation/setup-web-autoinstaller.mdx)
2. [Manually](../installation/setup-web-manually.mdx)

### AutoInstaller
AutoInstaller is a script which help you automatically install MineTrax with just one command.
It is a quick way to install MineTrax if you are installing on a fresh VPS/Server.

### Manually
If you installing MineTrax on a existing VPS/Server or you want to follow step and maybe customize few things on the way you might prefer installing it manually.


Below is a table which will help you decide which method to choose.

| AutoInstaller | Manually |
| -------------- | -------- |
|  Quick way to Install   |    Slower than AutoInstaller    |
|  Very Easy   |   Moderate, Basic Linux knowledge required    |
|  AutoInstall script require a fresh VPS/Server   |    You can follow manual steps to install in existing VPS/Server     |
|  Requires Ubuntu (LTS)   |   You can use different distributions    |
|  Will Install MySQL & Nginx   |  Can choose between MariaDB/MySQL & Apache/Nginx   |

*Both AutoInstaller and Manual Installation do the same thing, AutoInstaller just makes it easier and faster.*

**It is recommended to use AutoInstaller if you are installing on a fresh VPS/Server with Ubuntu (LTS).**


## Plugin
https://github.com/minetrax/plugin

This is the spigot plugin which you need to install on your Minecraft server.
It is responsible for:
 - Calculating and sending Player & Server Intel data to Web.
 - Sending chat and servers log to web if enabled.
 - Enabling users for web to chat with ingame players.
 - and various other things like whois command /ww etc.

## Flow Diagram
Here is a flow diagram to understand how MineTrax works.
![Hero Settings](./../../static/img/diagram_light_bg.png)