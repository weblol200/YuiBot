const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const config = require('./config.json');
const api = require('./api/api.js');

client.on('ready', () => {
    api.ready(client);
});

client.on('message', async (message) => {
    //код
});

client.login(config.token);