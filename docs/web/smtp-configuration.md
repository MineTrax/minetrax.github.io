---
sidebar_position: 4
title: SMTP Configuration
id: smtp-configuration
---

By default MineTrax will try to send transactional emails via PHP mail, which might lead to various problems like ISP blocking, large droprate, email landing in spam., etc.

:::note
Transactional emails are the emails such as password resets, welcome email, opted in notification email, etc.
:::

It is recommended to use a dedicated SMTP provider to do this job.
Firstly you need to register at any SMTP providers and get your SMTP login details.

Here are list of some free SMTP Providers:
1. [SendGrid](https://sendgrid.com/) - 100 email a day free
2. [SendInBlue](https://www.sendinblue.com/) - 300 email a day free
3. [ElasticEmail](https://elasticemail.com/) - 100 email a day free
4. [Pepipost](https://www.pepipost.com/) - 100 email a day free
5. [Gmail SMTP Server](https://kinsta.com/blog/gmail-smtp-server/) - 500 email per hour
6. [Amazon SES](https://aws.amazon.com/ses/) - 62000 a month if sent from Amazon hosted server
7. and various others you can find by googling "Free SMTP Providers"

After you have register at any SMTP provider, you need to get your SMTP login details and then change the smtp credentials in the `.env` file.
```js
MAIL_MAILER=smtp
MAIL_HOST= your smtp provider host
MAIL_PORT=your smtp provider port
MAIL_USERNAME= your smtp username
MAIL_PASSWORD= your smtp password
MAIL_ENCRYPTION= encryption mode (tls, ssl, null)
MAIL_FROM_ADDRESS=no-reply@your_domain.com
```

Example for Gmail:
```js
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=youremail@gmail.com
MAIL_PASSWORD=password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=no-reply@yourdomain.com
```

:::caution
Emails are send in background via Queues.
Queue are long running task and they don't pick up changes until restarted.

__You must restart all queue workers after this change.__
```
cd /var/www/minetrax
php artisan queue:restart
```
:::