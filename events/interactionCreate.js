const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction, bot) {
    // Check if interaction is command
    if (!interaction.isChatInputCommand()) return;

    // Get the command from the available cmds in the bot, if there isn't one, just return because discord will throw an error itself
    const command = bot.commands.get(interaction.commandName);
    if (!command) return;

    // Make args variable from interaction options for compatibility with message command code
    const args = interaction.options._hoistedOptions;

    // Set args to value of options
    args.forEach(arg => args[args.indexOf(arg)] = arg.value);

    try {
      await interaction.deferReply({ ephemeral: command.ephemeral });
      interaction.reply = interaction.editReply;
      command.execute(interaction, args, bot);
    }
    catch (err) {
      const interactionFailed = new EmbedBuilder()
        .setColor('Random')
        .setTitle('INTERACTION FAILED')
        .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.avatarURL() })
        .addFields([
          { name: '**Type:**', value: 'Slash' }, { name: '**Interaction:**', value: command.name },
        ]);
      if (interaction.guild) {
        interactionFailed.addFields([
          { name: '**Guild:**', value: interaction.guild.name },
          { name: '**Channel:**', value: interaction.channel.name },
          { name: '**Error:**', value: `\`\`\`\n${err}\n\`\`\`` },
        ]);
      }
      interaction.user.send({ embeds: [interactionFailed] }).catch(err => console.log(err));
      console.log(err.stack);
    }
  },
}