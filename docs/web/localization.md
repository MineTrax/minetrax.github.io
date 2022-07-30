---
sidebar_position: 3
title: Localization
id: localization
---

:::success Help Wanted! Contribute to Localization
If you know a language and want to contribute to localization. Please join our [**Discord group**](https://discord.gg/Hzfj27k) and  ping `Xinecraft#2139`. It will be very helpful for the project as current translated text are mostly from Google Translate.
:::

Localization feature allows you to translate the web in any language you want. You can choose from predefined language or add new one.

Below are list of languages which are already added by default.

|Name|Code|
|---|---|
|English|en|
|Spanish|es|
|Russian|ru|
|Slovak|sk|
|German|de|
|Polish|pl|
|Ukrainian|uk|
|Hindi|hi|
|Italian|it|


## How to change language?
First clear the cache. Localization are cached for performance improvements.
```js
php artisan cache:clear
```

Then, change `APP_LOCALE` environment variable in your .env file to a valid language code for whatever language you want. Eg: en, fr, hi, ru etc.
```js
// For german it should be
APP_LOCALE=de
```

Next, restart the queue listeners,
```
cd /var/www/minetrax
php artisan queue:restart
```

Done! Now open your website and it should be translated.

## How to make changes to language files?
The default included translations was done using automatic translation script might not be correct, so it is recommended that you review the translation files for your language and make changes as per requirements.

Translations files are stored in folder `lang` in the root directory.
To change text for your language you will have to edit all files in folder of your language code & {lang}.json.
Eg, to edit for german you edit:
```js
/lang
    /de
        auth.php
        pagination.php
        passwords.php
        validation.php
		//... all other file exists in this directory
	de.json
```


Translation files will look something like this.
1. JSON file:
```json title=lang/de.json
{
	"Thanks": "Vielen Dank",
	"Hey :name": "Hallo :name",
}
```

2. PHP File:
```php title=lang/de/auth.php
<?php 
return [
  'failed' => 'Diese Anmeldeinformationen stimmen nicht mit unseren Aufzeichnungen überein.',
  'password' => 'Das angegebene Passwort ist falsch.',
  'throttle' => 'Zu viele Anmeldeversuche. Bitte versuchen Sie es in :seconds Sekunden erneut.',
];
``` 
Left side of the expression in both JSON and PHP files are `Key` and should not be changed. Only the right side which is `Value` must be changed.

Feel free to translate the right part as per requirements.

:::info
Note that in some cases there is a colon (:) before some string, Eg: `:name`. Those are special placeholder which will be dynamically replaced to variables so those special placeholders should not be translated.
:::

## How to add a new language?
It is very simple to add new language if your desired language is not included in the list.

To add support for new language you have two methods:

### Method 1 (Manual)
1. Go to minetrax folder Eg: `cd /var/www/minetrax`
1. copy `lang/en` folder to `lang/YOUR_LANGUAGE_CODE` Eg: `lang/hr`.
1. copy `lang/en.json` file to `lang/YOUR_LANGUAGE_CODE.json` Eg: `lang/en.json`.
1. Now start adding translations in the newly created files as [described above](#how-to-make-changes-to-language-files).
1. Change the locale of your site to the new language by changing `APP_LOCALE` env variable as [described here](#how-to-change-language).

Using the above method might get cumbersome as you will have to add translations for every text manually. Follow the second method instead if you prefer automatic translation from google translate.


### Method 2 (Automatic)
This method uses google translate to add translation for all text automatically.
#### 1. Go to MineTrax installation folder
```bash
cd /var/www/minetrax
```

#### 2. Run the language creator script for PHP
Run the command in console.
```bash
php artisan translate:files
```

It will ask few questions, answer it as shown below:
```text
 What is base locale? [en]:
 > en

 What are the target locales? Comma seperate each lang key [es,fr,ru,sk,de,pl,uk,hi]:
 // highlight-next-line
 > YOUR_DESIRED_LANGUAGE <- Replace with your desired language code

 Force overwrite existing translations? [No]:
  [0] No
  [1] Yes
 > 0

 Verbose each translation? [Yes]:
  [0] No
  [1] Yes
 > 1

 Use text exploration and json translation or php files? [php]:
  [0] json
  [1] php
 > php

 Are there specific target files to translate only? ex: file1,file2 []:
 >

 Are there specific files to exclude? [auth,pagination,validation,passwords]:
 > no

 0/1 [>---------------------------]   0%
 en -> xx translating...
```

Let it run and it should create a new folder named as your language code inside `lang` folder, with all php translation files.

#### 3. Run the language creator script for JSON
Run the command in console.
```bash
php artisan translate:files
```

It will ask few questions, answer it as shown below:
```text
 What is base locale? [en]:
 > en

 What are the target locales? Comma seperate each lang key [es,fr,ru,sk,de,pl,uk,hi]:
 // highlight-next-line
 > YOUR_DESIRED_LANGUAGE <- Replace with your desired language code

 Force overwrite existing translations? [No]:
  [0] No
  [1] Yes
 > 0

 Verbose each translation? [Yes]:
  [0] No
  [1] Yes
 > 1

 Use text exploration and json translation or php files? [php]:
  [0] json
  [1] php
 > json

 0/1 [>---------------------------]   0%
en -> xx translating...
```

It will take a while, let it complete and it should create a new json file `lang/YOUR_LANGUAGE_CODE.json`.

#### 3. Review the language files
Text translated by Google will reduced your work but you still should check for wrong translations and fix them.
Eg: Google translate will translate to word `Steam` in translation text but it shouldn't be in some cases.

Now open the newly created folder & files in `lang` directory for your language and review/edit them as required.

#### 4. Finally change locale of Web to newly added language
Change the locale of your site to the new language by changing `APP_LOCALE` env variable as [described here](#how-to-change-language).
