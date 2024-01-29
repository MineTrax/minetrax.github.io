---
sidebar_position: 5
title: Setup Plugin on MC Server
id: setup-plugin
---

:::caution Add your minecraft server first!
You need to add your minecraft server to web before continuing to add Minetrax plugin.

[Click here](../installation/adding-minecraft-server.md) to know how to add your server.
:::

## Download
Firstly, download the latest __[MineTrax.jar](https://github.com/MineTrax/plugin/releases)__ file from releases section of github and put it inside of `plugins` folder of your Minecraft server. 

:::note
1. MineTrax plugin should not be added to Proxy servers (Bungee, Velocity etc). It is only for Spigot, Paper, Bukkit etc servers.
2. Vault plugin is required for Minetrax to work. If you don't have it, download it from [here](https://github.com/MilkBowl/Vault/releases/latest).
3. It is recomended to have ViaVersion in your servers if you want to track player's client version in Web.
:::


Start your server and it should create a `Minetrax/config.yml` file in your plugins folder, which should look something like:

```yml title=plugins/Minetrax/config.yml
enabled: true
api-host:
api-key:
api-secret:
server-id:
webquery-host: 0.0.0.0
webquery-port: 25569
...
```

:::info WebQuery port must be available
Plugin will try to open new connection to your defined **webquery-port** so that web can connect to it. It is important that nothing else is running on that port and your hosting provider or firewall allow opening the port you specified.

Also make sure you choose a port which is always greater than 1024 (>1024) as non root user cannot open port less than it.

Good Practice: If your join port is 25565, then choose something like 25569 or 25568 etc.
:::

## Setup
In next step you need to know few things:
 1. server-id
 2. api-host
 3. api-key
 4. api-secret

### server-id
This is unique identifier of your server.
After you have [added your server](../installation/adding-minecraft-server.md), you can view your server id from listing page.

### api-host
API host is your url at which minetrax will be running. eg: `https://yourdomain.com`

### api-key & api-secret
API key and secret are keys used to protect communication between minetrax plugin and the web. You can find in __Plugins Setting__ section of web admin sidebar.
:::warning
Make sure to keep your api key and secret private and not share those with anyone. It's are not public information.
:::

Enter all the details in `config.yml` file and restart your server.
