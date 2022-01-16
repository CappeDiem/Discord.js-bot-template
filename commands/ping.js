exports.run = async (bot, message, args) => {
    message.channel.send("My ping is \`" + bot.ws.ping + " ms\`");
}

exports.help = {
    name:"ping"
}
