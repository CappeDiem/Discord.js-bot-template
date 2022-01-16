exports.run = async (bot, message, args) => {
    message.channel.send("My ping is \`" + client.ws.ping + " ms\`");
}

exports.help = {
    name:"ping"
}
