module.exports = {
  name: 'ping',
  description: 'Get ping of the bot',
  ephemeral: true,
  async execute(interaction, args, bot) {
    // Get the ping of the bot and send a it as a reply to the user
    interaction.reply("My ping is \`" + bot.ws.ping + " ms\`");
  }
}
