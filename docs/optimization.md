---
sidebar_position: 151
title: Optimization
id: optimization
---

MineTrax is already optimized for performance and can handle a large number of players. However, there are some additional optimizations that can be done to improve the performance further if you have very large player base or if you are facing performance issues.

:::info Important
1. Default behvaior is good for most servers.
2. Only apply these optimizations if you are facing performance issues. 
3. You don't need to apply all optimizations. Apply only the ones you need.
4. Contact us at [Discord](https://discord.gg/Hzfj27k) if you need help.
:::

## 1. Disable Console Logging

**Default Behavior: Disabled**

Console logging feature is one of the most resource-intensive features in MineTrax. If you have a large number of players, it is recommended to disable console logging from plugin config.yml file.

1. Open `config.yml` file located at `plugins/MineTrax/config.yml`.
2. Set `enable-consolelog` to `false`.

```yaml title="config.yml"
enable-consolelog: false
```

## 2. Disable Player Movement Tracking

**Default Behavior: Enabled**

MineTrax tracks player movement to show the distance traveled by the player. If distance covered stats are not important for you, you can disable player movement tracking to save resources.

1. Open `config.yml` file located at `plugins/MineTrax/config.yml`.
2. Set `disable-player-movement-tracking` to `true`.

```yaml title="config.yml"
disable-player-movement-tracking: true
```

## 3. Disable ChatLog Feature

**Default Behavior: Enabled**

ChatLog feature logs all the chat messages sent by players. If you don't need chat logs, you can disable this feature to save resources.

1. Open `config.yml` file located at `plugins/MineTrax/config.yml`.
2. Set `enable-chatlog` to `false`.

```yaml title="config.yml"
enable-chatlog: false
```

## 4. Disable Player Inventory Tracking

**Default Behavior: Disabled**

MineTrax can track player inventory to show the items player has in their inventory. This feature doesn't consume much resources but database size can grow significantly if you have a large number of players. If you don't need this feature, you can disable it.

1. Open `config.yml` file located at `plugins/MineTrax/config.yml`.
2. Set `send-inventory-data-to-player-intel` to `false`.

```yaml title="config.yml"
send-inventory-data-to-player-intel: false
```

## 5. Other Optimizations

1. Make sure latency between your server and MineTrax server is low. Try to host MineTrax website in the same region as your Minecraft server.
