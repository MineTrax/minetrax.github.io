---
sidebar_position: 3
title: Plugins Support
id: plugins-support
---

Minetrax support hooking into various plugins to provide extra functionality.

## PlaceholderAPI
Minetrax supports PlaceholderAPI. Here is the list of placeholders supported by Minetrax:
```
%minetrax_player_id%
%minetrax_player_session_uuid%
%minetrax_player_is_verified%
%minetrax_player_country_id%
%minetrax_player_country_name%
%minetrax_player_country_iso_code%
%minetrax_player_rank_id%
%minetrax_player_rank_shortname%
%minetrax_player_rank_name%
%minetrax_player_rating%
%minetrax_player_total_score%
%minetrax_player_position%
%minetrax_player_first_seen_at%
%minetrax_player_last_seen_at%
%minetrax_player_profile_link%
```

## ViaVersion

Minetrax uses ViaVersion to track player's client version. If you have ViaVersion installed in your server, Minetrax will automatically track player's client version and show it in web.

## SkinsRestorer

Minetrax uses SkinsRestorer to provide skin changing functionality to players. If you have SkinsRestorer installed in your server, Minetrax will:
1. Use it to *fetch* player's skin. Using this correct avatar for skin will be shown in web even for cracked players.
2. Use it to *change* player's skin. If you have enabled skin changing feature in Minetrax, players will be able to change their skin from web.
