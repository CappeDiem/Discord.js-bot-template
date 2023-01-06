module.exports = {
  name: 'ping',
  description: 'Get ping of the bot',
  ephemeral: true,
  async execute(interaction, args, bot) {
    interaction.reply("My ping is \`" + bot.ws.ping + " ms\`");
  }
}
