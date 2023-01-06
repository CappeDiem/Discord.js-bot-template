const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(bot) {
        //Log Bot's username and the amount of servers its in to console
        console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);

        //Set the Presence of the bot user
        bot.user.setPresence({ activities: [{ name: 'My code'}] });

      if (!bot.application?.owner) await bot.application?.fetch()

      const commands = await bot.application?.commands.fetch()

      await bot.commands.forEach(async command => {
        const sourcecmd = commands.find(c => c.name == command.name)

        const opt = sourcecmd && command.options && `${JSON.stringify(sourcecmd.options)}` == `${JSON.stringify(command.options)}`

        if ((opt || opt === undefined) && sourcecmd && command.description && sourcecmd.description == command.description) return

        if (sourcecmd && command.type) return;
        console.log(`Detected /${command.name} has some changes! Overwriting command...`)
        await bot.application?.commands.create({
          name: command.name,
          type: command.type ? ApplicationCommandType[command.type] : ApplicationCommandType.ChatInput,
          description: command.description,
          options: command.options,
          default_member_permissions: command.default_member_permissions ? command.default_member_permissions : null
        }, command.limited ? command.guildId : null)
      })
      await commands.forEach(async command => {
        if (bot.commands.find(c => c.name == command.name)) return
        await command.delete()
      })

    }
}
