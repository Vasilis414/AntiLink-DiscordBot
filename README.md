# AntiLink-DiscordBot

Table of contents
=================

<!--ts-->
  * [Installing NodeJS](#modejs)
  * [Downloading code to your computer](#codetocomputer)
  * [Creating new discord bot](#mewdiscordbot)
    * [Inviting Discord Bot](#invitediscordbot)
  * [Setting Token](#settoken)
  * [Running Bot](#runbot)
  * [Testing](#testing)
<!--te-->

<a name="nodejs"></a>
Downloading NodeJS
=================
### Step 1: Visit NodeJS website: https://nodejs.org/en
### Step 2: Download LTS Version: 
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/299c1354-1c3e-43d3-bef3-a3d8b30183fe)
### Step 3: Run the installer and complete the installation
### Step 4: Open cmd and run the command 
```
  node -v
```
### If it says a version like this, you have successfully installed NodeJS 
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/cec3ab83-91d7-4ceb-a9d4-8cca8a5b50c1)




<a name="codetocomputer"></a>
Downloading Code
=================
### Step 1: Download the zip file
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/57165367-ec14-4a63-81bb-bfd7ad775e3e)
### Copy the zip file to desktop
### Right click to the file and click extract here (you must have winrar installed)
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/4a04f161-4212-41b7-ba1f-69782a15211a)


<a name="mewdiscordbot"></a>
Creating New Discord Bot
=================
### Step 1: Go to https://discord.com/developers/applications and login
### Step 2: Click New Application enter a name agree to discord's tos and then click create
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/38cd36c5-3a14-4d66-bd79-6a893f7bd4ec)
### Step 3: Go to the bot tab and click add bot
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/d6e26347-9eea-44fd-b5c5-ce8f90ef4591)
### Step 4: Click reset token and save it somewhere we will use it later

<a name="invitediscordbot"></a>
Inviting Discord Bot to server
=================
### Step 1: Go to OAuth2 and then url generator
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/586f8c3e-02b5-44ce-9e52-567867e90c6a)
### Step 2: Tick Bot and after Administrator, then copy the url
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/3628783a-052c-4191-80e7-663fd98634a8)
### Step 3: Paste it to a new tab and select a server

<a name="settoken"></a>
Paste the token to your bot's code
=================
### Step 1: Go to your bot's folder and open config.json
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/f3397b9d-66c6-47b9-9b43-500afb007e82)
### Step 2: Replace token-here with your token make sure to keep the double quotes at the start and the end of your token
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/ea5d0f08-e4b2-47e9-8a30-be288a573d23)
### Step 3: Save the file and close it

<a name="runbot"></a>
Running The Bot
=================
### Step 1: Open cmd and cd to the bot's directory
```
  cd C:\Users\{user}\Desktop\AntiLink-DiscordBot-main
```
### Step 2: Install Packages by running this command
```
  npm init -y && npm install discord.js
```
### Step 3: Run the bot with the command
```
  node .
```

<a name="runbot"></a>
Running The Bot
=================
### If a user without administrator permissions sends a link the bot will automatically delete their message and send with this message
![image](https://github.com/Vasilis414/AntiLink-DiscordBot/assets/83064774/59fe5d62-a447-4b42-a1e0-2fc66b5ed4d2)
