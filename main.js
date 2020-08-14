const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Bot Started");
    console.log("------------------");
});

client.on('message', msg =>{
    if (!msg.content.startsWith(config.Prefix) || msg.author.bot) return;

    const args = msg.content.slice(config.Prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(msg, args);
    }
    else if (command === 'markisgod'){
        client.command.get('mark').execute(msg, args);
    }
});

client.login(config.Token);