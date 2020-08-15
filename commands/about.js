module.exports = {
    name: 'about',
    descriptiuon: 'About Bot Author',
    execute(msg, args) {
        msg.channel.send({embed: {
            title: "About",
            description: "**Developer:** Leo Power \n**Discord:** <@255876083918831616>\n[Developer Website](https://powerthecoder.xyz/)\n[GitHub Link](https://github.com/powerthecoder)"
        }})
    },
};