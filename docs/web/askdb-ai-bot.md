---
sidebar_position: 6
title: AskDB AI Bot
id: askdb-ai-bot
---

AskDB is a powerful AI base database query system that allows you to ask questions about your server and players. You can ask questions like "How many players joined my server in the last 24 hours?" or "What is the average player rating of my server?" and AskDB will answer them for you.

![AskDB](../../static/img/tutorial/askdb1.png)

## How it works?

AskDB uses OpenAI GPT-3 to answer your questions. It uses the data from your server to answer your questions.
Since it uses OpenAI APIs, you need to have an OpenAI account and API key to use AskDB.

## How to enable AskDB?

AskDB is disabled by default. To enable it, you need to follow these steps:

### 1. Create an OpenAI account

Go to [OpenAI](https://openai.com/) and create an account (Login if you already have one).
Then go to `Manage Account` and then `API Keys` and create a new API key.

### 2. Enable AskDB

Open .env file of your MineTrax Installation and change these two variables:

```env
ASKDB_ENABLED=true
OPENAI_API_KEY=sk-...
```

Make sure to replace `sk-...` with your OpenAI API key.

### 3. Done!

Now you can go to AskDB section of your web admin sidebar and start asking questions.


## Permissions

Only staff with `use ask_db` permission can use AskDB. Please be careful while giving this permission to your staff as with this bot they can query anything from your minetrax database.

:::note
Passwords & Secret Keys, be it for the players or the servers, are stored in database in encrypted and hashed form. So you can't query them.
:::
