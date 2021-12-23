module.exports = {
    name: 'ready',
    execute(member, bot) {
        //Log the newly joined member to console
        console.log('User ' + member.user.tag + ' has joined the server!');

        //Find a channel named welcome and send a Welcome message
        bot.channels.cache.find(c => c.name === "welcome").send('Welcome '+ member.user.username)
    }
}