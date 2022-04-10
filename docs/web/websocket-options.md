---
sidebar_position: 2
title: WebSocket Options
id: websocket-options
---

In the Getting Started section we setup [Pusher](https://pusher.com) as our websocket server.

Pusher free tier provides 200k push messages per day and 100 concurrent connections. This might not be enough when your audience is large. Ofcoz you can opt for paid plan of Pusher to remove these limitations but that might get costly.

Here we are going to discuss about two self-hosted alternatives which won't have any limitations and support pusher protocol.
1. [Laravel Websockets](https://beyondco.de/docs/laravel-websockets/)
2. [Socketi](https://docs.soketi.app/)

:::note
You need to install only of them in your server.
:::

## Laravel Websockets
:::info
Visit Laravel Websocket docs for detailed explanation: https://beyondco.de/docs/laravel-websockets/
:::
Laravel Websockets server is already bundled with minetrax. To use it instead of pusher all you need to do is run the server and change your broadcasting configurations.

### Start the websocket server
```bash
cd /var/www/minetrax
php artisan websockets:serve
```

:::tip
By default websocket server start on port 6001. You can change that by specifying port.
```
php artisan websockets:serve --port=3030
```
:::

#### Running in SuperVisor
The `websockets:serve` should always be running to accept connection. This is why it is recommended to use supervisor to keep it running and automatically restart on crashes.

*Break the websocket server daemon by pressing `Ctrl+C` if its running, and follow the steps below to use it with supervisor.*

Create a new supervisor conf file in `/etc/supervisor/conf.d` folder called `minetrax-websocket.conf` and paste below content in there.

```bash title=/etc/supervisor/conf.d/minetrax-websocket.conf
[program:minetrax-websockets]
command=/usr/bin/php /var/www/minetrax/artisan websockets:serve
numprocs=1
autostart=true
autorestart=true
user=www-data
```

Update the supervisor and start the daemon
```bash
supervisorctl update
supervisorctl start minetrax-websockets
```

### Change broadcasting configuration
You need to add `host` and `port` config key in the `config/broadcasting.php` and add it to the `pusher` section. The default port of the Laravel WebSocket server is 6001
```php title='config/broadcasting.php'
'pusher' => [
    'driver' => 'pusher',
    'key' => env('PUSHER_APP_KEY'),
    'secret' => env('PUSHER_APP_SECRET'),
    'app_id' => env('PUSHER_APP_ID'),
    'options' => [
        'cluster' => env('PUSHER_APP_CLUSTER'),
        'encrypted' => true,
        'host' => '127.0.0.1',
        'port' => 6001,
        'scheme' => 'http'
    ],
],

```

### Change frontend asset settings
Minetrax uses npm package called `Echo` for listening to broadcasts.
To make Echo work with Laravel WebSockets, you need to make slight adjustments in `resources/js/bootstrap.js` file.

In Echo section of the file add `wsHost`, `wsPort`, `disableStats` and `forceTLS` as given below.
```js
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'your-pusher-key',
    // highlight-start
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true
    // highlight-end
});
```

### Rebuild assets & restart services
```bash
cd /var/www/minetrax

npm run prod

php artisan queue:restart
supervisorctl restart minetrax-websockets
```

:::tip
For SSL support please read: https://beyondco.de/docs/laravel-websockets/basic-usage/ssl
:::

## Socketi
:::info
Visit soketi docs for detailed explanation: https://docs.soketi.app/
:::

:::caution Docs In Progress
If you want to use Socketi, for now you can follow their official docs [here](https://docs.soketi.app/getting-started/installation/cli-installation)
:::