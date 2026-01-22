const { prefix, token } = require("./config.json");
const fs = require("fs");
const { Client, Partials, Collection } = require('discord.js');
const {GatewayIntentBits} = require("discord-api-types/v9");
const bot = new Client({
    intents: [

      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
    ],
    partials: [
      Partials.Channel,
      Partials.Message,
      Partials.User
    ]
});

// Create a collection to store commands inside the bot object
bot.commands = new Collection();

// Load Command files from commands folder
const commandFiles = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'))
for (const file of commandFiles) {
    const props = require(`./commands/${file}`)
    console.log(`${file} loaded`)
    bot.commands.set(props.name, props)
}
// Get folders inside commands folder
const commandSubFolders = fs.readdirSync('./commands/').filter(f => !f.endsWith('.js'))
// Load Command files from subfolders inside commands folder
commandSubFolders.forEach(folder => {
    const commandFiles = fs.readdirSync(`./commands/${folder}/`).filter(f => f.endsWith('.js'))
    for (const file of commandFiles) {
        const props = require(`./commands/${folder}/${file}`)
        console.log(`${file} loaded from ${folder}`)
        bot.commands.set(props.name, props)
    }
});
// Load Event files from events folder
const eventFiles = fs.readdirSync('./events/').filter(f => f.endsWith('.js'))
for (const file of eventFiles) {
    const event = require(`./events/${file}`)
    if(event.once) {
        bot.once(event.name, (...args) => event.execute(...args, bot))
    } else {
        bot.on(event.name, (...args) => event.execute(...args, bot))
    }
}

// Token needed in config.json
bot.login(token);
