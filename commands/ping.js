module.exports = {
    config: {
        name: 'ping',
        description: 'Get ping of the bot',
        usage: `!ping`,
    },
    async run (bot,message,args) {
        message.channel.send("My ping is \`" + bot.ws.ping + " ms\`");
    }
}
