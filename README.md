# Discord.js Discord bot template
Basic bot template with command handler and event handler.

**This README is gonna be rewritten later**

Change Token and prefix in ``config.json``

Make commands in ``commands`` folder.

There is ``ping`` command in ``commands`` folder
the default prefix of the bot is ``!`` you can change this in the ``config.json``
### Prerequisites

What things you need to install the software and how to install them:

```
Node.js
```
### Installing:

A step by step series of how to get the bot running

##### Install Node.js:

1. Goto downloads
2. You can choose the lts or the current version of node.js depending on what you want
then download the installer according to your operating system

[Node.js](https://nodejs.org/en/) 

##### Installing discord.js and making the bot folder


After you have node.js:
1. Create a folder on your computer.
2. On windows open cmd and copy the folder location from top of the file browser.
3. On cmd type cd "then paste the location" and enter
4. Do in the cmd `npm i discord.js` to install discord.js 
Before you do the install command make sure the cmd window is in the right folder
what is the api used to connect to Discord.


##### Getting this bot and starting it:

1. Download this project as a zip file then move the zip file to the folder you created
2. Unzip it there then put token in the config.json to get a token goto Discord Developer Site link below
3. After you have token in config.json and have installed discord.js you can start bot by typing `node app.js`

[Discord Developer Site](https://discordapp.com/developers/applications/)

Other things you can do for bot develoment
```
You can install nodemon to restart the bot everytime the bot file is changed
to install nodemon globally type `npm i -g nodemon`
```

## Authors

* **CappeDiem** - *Initial work* - [CappeDiem](https://github.com/CappeDiem)

## Built With

* [Node.js](https://nodejs.org/en/) - the base that the bot runs on
* [discord.js](https://discord.js.org/#/) - node.js link to the discord bot api
