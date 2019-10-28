const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function () {
    bot.user.setGame("🕹️ idaria.net");
    console.log("[LOG] iBot est désormais fonctionnel et connecté.")
});

bot.login("NjM4NDE1MzAzMzI3NjEyOTQ4.XbcZEQ.tDIfHbDfSFKDHZ0QWwmGvwCTo4s");
