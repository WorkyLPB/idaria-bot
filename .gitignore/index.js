const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();

var prefix = ("/")

bot.on('ready', function () {
    bot.user.setGame("🕹️ idaria.net");
    console.log("[LOG] iBot est désormais fonctionnel et connecté.")
});
bot.login(process.env.TOKEN);
