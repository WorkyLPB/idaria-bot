/*
──────────────────────────────────────────────────────────────────────────────────────────────────
██╗██████╗  ██████╗ ████████╗
██║██╔══██╗██╔═══██╗╚══██╔══╝
██║██████╔╝██║   ██║   ██║   
██║██╔══██╗██║   ██║   ██║   
██║██████╔╝╚██████╔╝   ██║   
╚═╝╚═════╝  ╚═════╝    ╚═╝   

──────────────────────────────────────────────────────────────────────────────────────────────────

/*──────────────────────────────────────────────────────────────────────────────────────────────────
██████╗  █████╗ ███████╗███████╗
██╔══██╗██╔══██╗██╔════╝██╔════╝
██████╔╝███████║███████╗█████╗  
██╔══██╗██╔══██║╚════██║██╔══╝  
██████╔╝██║  ██║███████║███████╗
╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
──────────────────────────────────────────────────────────────────────────────────────────────────*/

const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();

bot.login(process.env.TOKEN);

var prefix = ("/")

bot.on('ready', function () {
    bot.user.setGame("🕹️ idaria.net");
    console.log("[LOG] iBot est désormais fonctionnel et connecté.")
});

/*──────────────────────────────────────────────────────────────────────────────────────────────────
██████╗ ██████╗ ███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██████╗ ███████╗███████╗
██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔════╝
██║     ██║   ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║  ██║█████╗  ███████╗
██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║  ██║██╔══╝  ╚════██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██████╔╝███████╗███████║
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚══════╝
──────────────────────────────────────────────────────────────────────────────────────────────────*/                                                                                

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send('pas de perm fdp').catch(console.error);
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('^pas de perm fdp 2').catch(console.error);
    if(!arg[0]) return message.channel.send('met un nombre de msg à supp fdp');
    if(isNaN(arg[0])) return message.channel.send('invalide ta mère la reine des putes');

    message.channel.bulkDelete(arg[0]);

    message.channel.send('${args[0]} messages supp fdp');
};

module.exports.help = {
    name: "clear"
}

