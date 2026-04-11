---
sidebar_position: 10
title: Localization
id: localization
---

:::success Help Wanted! Contribute to Localization
If you know a language and want to contribute to localization. Please join our [**Discord group**](https://discord.gg/Hzfj27k) and  ping `Xinecraft#2139`. It will be very helpful for the project as current translated text are mostly from AI Translator.
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
|Chinese (Traditional)|zh-hk|
|Chinese (Simplified)|zh-cn|
|Japanese|ja|
|Hungarian|hu|


## How to change default language?
Open your `.env` file in any text editor and change `APP_LOCALE` environment variable to a valid language code for whatever language you want. Eg: en, fr, hi, ru etc.
```json title=".env"
// For german it should be
APP_LOCALE=de
```

Next, clear the cache by running `update.sh` script so your changes will reflect instantly.
```bash
cd /var/www/minetrax
sudo sh update.sh
```

Done! Now open your website default language will be changed to the language you set.

## How to make changes to language files?
The default included translations was done using automatic translation script might not be correct, so it is recommended that you review the translation files for your language and make changes as per requirements.

Translations files are stored in folder `lang` in the root directory.
To change text for your language you will have to edit all files in folder of your language code & \{lang\}.json.
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
```json title="lang/de.json"
{
	"Thanks": "Vielen Dank",
	"Hey :name": "Hallo :name",
}
```

2. PHP File:
```php title="lang/de/auth.php"
<?php 
return [
  'failed' => 'Diese Anmeldeinformationen stimmen nicht mit unseren Aufzeichnungen überein.',
  'password' => 'Das angegebene Passwort ist falsch.',
  'throttle' => 'Zu viele Anmeldeversuche. Bitte versuchen Sie es in :seconds Sekunden erneut.',
];
``` 
Left side of the expression in both JSON and PHP files are `Key` and should not be changed. Only the right side which is `Value` must be changed.

Feel free to translate the right part as per requirements.

After completing your changes clear the caches so your changes will reflect instantly.
```
cd /var/www/minetrax
php artisan cache:clear
```

:::info
Note that in some cases there is a colon (:) before some string, Eg: `:name`. Those are special placeholder which will be dynamically replaced to variables so those special placeholders should not be translated.
:::

## Language Switcher Feature
MineTrax comes with a language switcher which allows users to change the language of the website. It is enabled by default and allows users to change to any supported language.

To disable the language switcher, open your `.env` file and change `AVAILABLE_LOCALES` to `null`.
```bash title=".env"
AVAILABLE_LOCALES=null
```

If you want to enable only specific languages, you can set the `AVAILABLE_LOCALES` to a comma separated list of language codes.
```bash title=".env"
AVAILABLE_LOCALES=en,de,fr,ru
```

## How to add a new language?
It is very simple to add new language if your desired language is not included in the list.

To add support for new language you have two methods:

### Method 1 (Automatic)
This method uses MineTrax AI translation support to generate translation for your language automatically.
#### 1. Go to MineTrax installation folder
```bash
cd /var/www/minetrax
```

#### 2. Make sure AI feature is enabled and API key is configured
For this to work, enable AI in your `.env` file and set up the API key for the provider you want to use.
```bash title=".env"
AI_ENABLED=true
OPENAI_API_KEY=your_api_key_here
```

#### 3. Copy the PHP translation folder and create an empty JSON file
Copy `lang/en` folder to `lang/YOUR_LANGUAGE_CODE` Eg: `lang/hr`.

Create a new empty file named `lang/YOUR_LANGUAGE_CODE.json`.
```bash
cp -r lang/en lang/hr
touch lang/hr.json
```

#### 4. Run the translation generator
Run the command in console.
```bash
php artisan translations:manage translate
```

It will automatically detect the empty `lang/YOUR_LANGUAGE_CODE.json` file and generate the translations for it using AI.

#### 5. Review the language files
AI generated text will reduce your work but you should still review it for incorrect or awkward translations.

Now open `lang/YOUR_LANGUAGE_CODE` and `lang/YOUR_LANGUAGE_CODE.json` and review/edit them as required.

#### 6. Finally change locale of Web to newly added language
Change the locale of your site to the new language by changing `APP_LOCALE` env variable as [described here](#how-to-change-default-language).

If you do not want to use AI, you can use the manual method instead.

### Method 2 (Manual)
1. Go to minetrax folder Eg: `cd /var/www/minetrax`
1. copy `lang/en` folder to `lang/YOUR_LANGUAGE_CODE` Eg: `lang/hr`.
1. copy `lang/en.json` file to `lang/YOUR_LANGUAGE_CODE.json` Eg: `lang/hr.json`.
1. Now start editing the values in the newly created PHP files and JSON file as [described above](#how-to-make-changes-to-language-files).
1. Change the locale of your site to the new language by changing `APP_LOCALE` env variable as [described here](#how-to-change-default-language).
