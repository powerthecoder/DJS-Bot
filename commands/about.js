module.exports = {
    name: 'about',
    descriptiuon: 'About Bot Author',
    execute(msg, args) {
        const embed = MessageEmbed()
            .setTitle("About")
            .setDescription("**Developer:** Leo Power \n**Discord:** <@255876083918831616>\n**Website:** https://powerthecoder.xyz/ \n**GitHub:** https://github.com/powerthecoder")
        msg.channel.send(embed)
    },
};