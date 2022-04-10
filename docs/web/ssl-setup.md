---
sidebar_position: 3
title: WebServer SSL Setup
id: ssl-setup
---

Currently your website should be running on `http://YOUR_DOMAIN` which is not secure. 
In this section we will enable HTTPS on the web with help of [LetsEncrypt](https://letsencrypt.org) so you can access your site like `https://YOUR_DOMAIN`.

:::tip
If you are using CloudFlare as your DNS Provider. You can use it's free SSL feature by enabling it from their dashboard and ignore this section.
Read more about it [here](https://www.cloudflare.com/ssl/).
:::

### Certbot (Nginx)
Install Certbot and it's Nginx plugin with apt.
```bash
sudo apt install -y certbot python3-certbot-nginx
```

Find what domain you have setup in your nginx config file for minetrax `minetrax.conf`. In our case it was `your_domain.com` and `www.your_domain.com`.

Run the certbot to issue certificates for these domains. Make sure to replace `your_domain.com` with your own domain.
```
sudo certbot --nginx -d your_domain.com -d www.your_domain.com
```

Finally it will ask you if you want to route all your traffic to https. Select yes in that case.

### Certbot (Apache2)
Install Certbot and it's Nginx plugin with apt.
```bash
sudo apt install -y certbot python3-certbot-apache
```

Find what domain you have setup in your apache2 config file for minetrax `minetrax.conf`. In our case it was `your_domain.com` and `www.your_domain.com`.

Run the certbot to issue certificates for these domains. Make sure to replace `your_domain.com` with your own domain.
```
sudo certbot --apache -d your_domain.com -d www.your_domain.com
```

Finally it will ask you if you want to route all your traffic to https. Select yes in that case.

### Setup Auto Renew
LetsEncrypt certificates are valid only for 3 months. If you don't want to manually run these commands every 3 month then make sure to turn on auto renew for certbot
```bash
certbot renew
```