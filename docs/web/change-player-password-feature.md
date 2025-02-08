---
sidebar_position: 112
title: Change Player Password
id: change-player-password
---

Using this feature, a user can change password of their linked Minecraft account from the MineTrax website. It is useful for servers which use some kind of authentication plugin like AuthMe, Nlogin, etc.

![Screenshot](https://i.imgur.com/Kdupt08.png)

:::note
This feature requires your minecraft server to have webquery enabled where the password change command will be executed.
:::

## Enable Player Password Change Feature

1. Go Admin Panel -> Settings -> Plugin Settings.
2. Check the `Enable Player Password Reset` checkbox.
3. Choose what command should be executed when user try to change password of his linked Minecraft account. You can use the following placeholders in the command:
   - `{PLAYER_USERNAME}` - Player's Minecraft username.
   - `{PLAYER_UUID}` - Player's Minecraft UUID.
   - `{PASSWORD}` - New password entered by the user.
4. Select which server where the command should be executed. Generally, it is the Proxy server.

![Sample](https://i.imgur.com/eCtYNAv.png)

## Permissions

- `reset any_player_password` - This is staff(admin) permission. This allows staffs to reset password of any player.

- `cannot player_password_reset` - Sometime you want to restrict this feature to some specific roles (eg: staffs). You can give this permission to the roles which you want to restrict from using this feature.
