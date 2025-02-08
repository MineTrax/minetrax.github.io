---
sidebar_position: 10
title: Setup MineTrax for Dev
id: setup-minetrax-locally-for-dev
---

# Setup MineTrax Locally for Development

This guide will walk you through setting up MineTrax locally on your PC for development and testing purposes.


## Prerequisites

1. You should know programming & have a basic understanding of PHP, Laravel, and Vue.js.
2. For this guide, we will assume you are using Windows. If you are using macOS or Linux, the steps will be similar but you will need to use different software for the web server stack.


## Download and Install Required Software

For development, we will need the following software:

1. A Code Editor. We recommend [Visual Studio Code](https://code.visualstudio.com/download).
1. A Web Server. Apache or Nginx
1. Git
1. Node.js
1. PHP 8.3+
1. Composer
1. MySQL 8+
1. Redis Server

In this guide, we will install VSCode as our code editor, and a complete web server stack using Laragon which includes Apache, MySQL, PHP, Redis, and all the required dependencies for Laravel (MineTrax).

### Install Visual Studio Code

Download and install Visual Studio Code from [here](https://code.visualstudio.com/download).

### Install Laragon

Download and install Laragon (Full) from [here](https://laragon.org/download/). Laragon is a complete web server stack for Windows that include everything needed to run MineTrax locally.

Next we will need to configure Laragon a bit.

#### 1. Add Laragon to System Path

We need to add Laragon to the system path so that we can use various commands from the terminal for development. (e.g. `composer`, `php`, `npm`, `git`, etc.)

1. Right-click on the Laragon icon in the system tray and select `Tools` > `Path` > `Add Laragon to Path`.

    ![Add Laragon to Path](https://i.imgur.com/x1euaEU.png)

2. After that restart your Terminal or Command Prompt, and try using `composer`, `php`, `npm`, `git`, etc. commands to make sure they are working.

#### 2. Enable ext-sockets & ext-ftp in PHP

By default, the `ext-sockets` & `ext-ftp` extension is not enabled in Laragon.

1. Right-click on the Laragon icon in the system tray and select `PHP` > `extensions`. Then enable `sockets` and `ftp` extensions by clicking on them.

    ![PHP INI](https://i.imgur.com/KgWo8NW.png)

#### 3. Enable Redis Server in Laragon

1. Right-click on the Laragon icon in the system tray and select `Preferences`.
2. In the Preferences window, go to the `Services & Ports` tab and enable the `Redis` service.

    ![Enable Redis](https://i.imgur.com/MsWlHp0.png)
3. After that, close Laragon & restart it, and `Start All` services.

:::info
If you prefer to use another web server stack, you can use XAMPP, WAMP, or any other stack of your liking that includes Apache/Nginx, MySQL, PHP, and Redis.
:::


## Clone the MineTrax Repository

Open the directory where Laragon is installed, and go to its webroot (e.g. `C:\laragon\www`), open terminal there and clone the MineTrax repository using the following command:

```bash
git clone https://github.com/MineTrax/minetrax.git minetrax
```
Next go to the `minetrax` directory and install the required dependencies using the following commands:

```bash
cd minetrax
composer install
npm install
```

## Create a Database & Tables

Open the MySQL console  and create a new database for MineTrax using the following command:

```sql
CREATE DATABASE minetrax;
```

You can use Laragon to create database by clicking on the Laragon icon in the system tray and selecting `MySQL` > `Create database` and then enter the database name as `minetrax`.

Next, open the newly created MineTrax project in your code editor (e.g. VSCode) and copy the `.env.example` file to a new file named `.env`. Then open the `.env` file and find and update the following variables:

```env
APP_URL=http://minetrax.test
APP_DEBUG=true
TELESCOPE_ENABLED=true

DB_PASSWORD=null

REDIS_CLIENT=predis
```

Next, run the below command to generate application key, migrate & seed the database:

```bash
php artisan key:generate

php artisan migrate --seed
```

## Restart the Development Server

Restart all the services in Laragon by clicking on the Laragon icon in the system tray and selecting `Stop All` and then `Start All`.
It may prompt you to create a virtual host for the project, click on `Yes` to everything.

After that, open your web browser and go to `http://minetrax.test` and you should see the MineTrax homepage.


## FAQ

### What MineTrax uses for Backend & Frontend?

1. MineTrax uses Laravel (PHP) for the backend. 
1. In the frontend, it uses Vue.js with Inertia.js and Tailwind CSS.
1. For database, it uses MySQL.

### How to build the frontend assets?

If you make any changes to the frontend assets (e.g. JavaScript, CSS, etc.), it won't be reflected on the website until you build the assets.

Run the following command while developing to watch the assets for changes and build them automatically:

```bash
npm run dev
```

Run the following command to build the assets for production:

```bash
npm run prod
```

### What is Queue & what is it used for?

Queue is a feature in Laravel that allows you to defer the processing of a time-consuming task, such as sending an email, to a later time. It is used to speed up the web requests by deferring the time-consuming tasks to be processed in the background.

MineTrax uses queue for sending emails, creating notifications, and other time-consuming tasks like calculating server & player intel data.

Run the following command to start the queue worker in terminal:

```bash
php artisan queue:work --queue=longtask,default redis-longtask --timeout=0 --sleep=3 --tries=3
```
