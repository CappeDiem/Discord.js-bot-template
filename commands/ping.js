module.exports = {
    config: {
        name: 'ping',
        description: 'Get ping of the bot',
        usage: `!ping`,
    },
    async run (bot,message,args) {
        // Get the ping of the bot and send a message to the channel the command was run in
        message.channel.send("My ping is \`" + bot.ws.ping + " ms\`");
    }
}
