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

if(command === "tempmute") {
 
    const ms = require('ms');
 
let member = message.mentions.members.first() || message.guild.members.get(args[0]);

if(!args[0])
return message.channel.send("test2")
if(!member)
return message.channel.send("test1")

if(member.roles.some(r=>[""].includes(r.name)) )
      return message.channel.send()

let muterole = message.guild.roles.find(r => r.name === "fils de pute")
if(!muterole) {
  try{
      muterole = await message.guild.createRole({
          name: "fils de pute",
          color: "#",
          permissions: []
      })
      message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SEND_TTS_MESSAGES: false,
              ATTACH_FILES: false,
              SPEAK: false
          })
      })
  } catch(e) {
      console.log(e.stack);
  }
}

let mutetime = args[1];
if(!mutetime) return message.channel.send()
 
let reason = args.slice(2).join(' ');
if(!reason) reason = "";

member.addRole(muterole.id).then(() => {
                  message.delete().catch(O_o=>{});
  member.send("test")
  message.channel.send("test")
})

setTimeout(function(){
  member.removeRole(muterole.id);
  message.channel.send("test")
}, ms(mutetime));
}
