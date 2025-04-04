---
sidebar_position: 100
title: Backup Site
id: backup
---

You can backup your minetrax site to prevent data loss. This will also be helpful if you want to move your site to another server or if you want to restore your site to a previous state.

MineTrax backup feature will backup the following:

- Database (Your MySQL database)
- Files (All files in the minetrax installation directory. Eg: `/var/www/minetrax`)


:::success IMPORTANT
After changing any environment variable, make sure to run `sh update.sh` to apply the changes.
:::

## Enable Backup

To enable backup, you need to set the `BACKUP_ENABLED` environment variable to `true`. 
You can do this by editing the `.env` file.

```bash title=".env"
BACKUP_ENABLED=true

# OTHER BACKUP CONFIGURATIONS
# It is recommended to keep it as it is.
BACKUP_APP_NAME="${APP_NAME}-backup" 
# Disk where backup should be stored. Available Options: local, sftp, s3-private
BACKUP_DISK=local 
# If you want to encrypt the archieve with a password
BACKUP_ARCHIVE_PASSWORD=null 
# If you want to email after backup is successful or failed. Only works if SMTP is configured.
BACKUP_NOTIFICATION_EMAIL=youremail@gmail.com 
# Total size in MB that all combined backup should not exceed. If it exceeds, old backup will be deleted. Default to 5GB.
BACKUP_QUOTA_IN_MB=5000
```

New backup will be created daily and will be stored in the `storage/app/${APP_NAME}-backup` directory.


## Storing Backup in S3

You can store your backup in S3. To do this, you need to set the `BACKUP_DISK` environment variable to `s3-private`.

```bash title=".env"
BACKUP_DISK=s3-private
```

For this to work, you need create a S3 bucket and update the following environment variables in the `.env` file to match your S3 bucket details. 

```bash title=".env"
# Your AWS Access Key (with S3 access)
AWS_ACCESS_KEY_ID=your-aws-access-key
# Your AWS Secret Key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
# Your S3 Bucket Region
AWS_DEFAULT_REGION=your-bucket-region
# Bucket name of S3 Public Bucket
AWS_BUCKET=public-bucket-name
# Bucket name of S3 Private Bucket
AWS_PRIVATE_BUCKET=private-bucket-name
# If you want to use path style endpoint. Default to false.
AWS_USE_PATH_STYLE_ENDPOINT=false
```

:::note
You can set `AWS_BUCKET` to anything dummy since it is not used for private backup. (Public bucket is used for storing of public files in base you want to use S3 for storing of public files like profile pictures, etc.) 
:::

## Storing Backup in SFTP Server

You can store your backup in a SFTP server. To do this, you need to set the `BACKUP_DISK` environment variable to `sftp`.

```bash title=".env"
BACKUP_DISK=sftp
```

For this to work, you need to update the following environment variables in the `.env` file to match your SFTP server details. 

```bash title=".env"
# IP or Hostname of the SFTP server
SFTP_DISK_HOST=sftp.example.com
# Username to login
SFTP_DISK_USERNAME=root
# Password
SFTP_DISK_PASSWORD=password
# SFTP Server Port
SFTP_DISK_PORT=22
```
