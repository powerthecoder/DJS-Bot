module.exports = {
    name: '',
    descriptiuon: '',
    execute(msg, args) {
        msg.channel.send({embed: {
            title: "Help Menu",
            description: "Prefix `!`",
            fields: [{
                name:"`!about`",
                value:"Bot's developer info"
            },
            {
                name:"`!help`",
                description:"This Message"
            },
            {
                name:"`!markisgod`",
                description:"Mark Is God"
            },
            {
                name:"`!ping`",
                description:"Pong"
            }
            ]
        }})
    },
};