module.exports = {
    name: 'ping',
    descriptiuon: 'Ping!',
    execute(message, args) {
        message.channel.send("Pong");
    },
};