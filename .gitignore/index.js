const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function () {
    bot.user.setGame("🕹️ idaria.net");
    console.log("[LOG] iBot est désormais fonctionnel et connecté.")
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":no_entry_sign: **ERREUR** • Vous n'avez pas la permission pour exécuter cette commande.")
        let count = parseInt(args[1])
        if (!count) return message.channel.send(":no_entry_sign: **ERREUR** • Veuillez indiquer un nombre de messages à supprimer.")
        if (isNaN(count)) return message.channel.send(":no_entry_sign: **ERREUR** • Veuillez indiquer un nombre correct.")
        if (count < 1 || count > 100) return message.channel.send(":no_entry_sign: **ERREUR** • Veuillez indiquer un chiffre entre seulement 1 et 100.")
        message.channel.bulkDelete(count + 1, true)
        message.channel.send(":no_entry_sign: **ERREUR** • test mdr")
    }



bot.login(process.env.TOKEN);

});
