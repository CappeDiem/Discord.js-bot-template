exports.run = async(bot, message, args) => {
    message.channel.send(`Pong! Ping: ${bot.ws.ping} ms.`);
}

exports.help = {
    name: "ping"
}
