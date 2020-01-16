const Discord = require ("discord.js"); // eslint-disable-line no-unused-vars
const Command = require("../base/Command.js");

class Info extends Command {
  constructor (client) {
    super(client, {
      name: "info",
      description: "See informations regarding bot itself.",
      category: "General",
      usage: "",
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: "User",
      cooldown: 5,
      args: false
    });
  }

  async run (message, args, level, reply) { // eslint-disable-line no-unused-vars
    const infoEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setTitle("Information About Phantom")
      .setDescription(`I'm Phantom, a exclusive bot for ROBLOX Community Developers!
- **Get in touch**:
Mention bot or type \`${message.guild ? message.guild.settings.prefix : "?"}help\` to get a list of commands.
Type \`${message.guild ? message.guild.settings.prefix : "?"}invite\` to join support server or invite bot.
- **Features**:
• Lockdown Features
• Performant Automoderator
• Web Dashboard
• Join Role
• Prevent Mallicious Users
• Different Tools
• Easy To Configure
- **Technologies Used**:
[Discord.Js - Discord Client v12.0.0-master](https://discord.js.org/#/docs/main/master/general/welcome)
[MongoDB - Database (Mongoose v5.4.19)](https://mongodb.com/)
[Express - Dashboard v4.16.4](https://expressjs.com/)
[Sightengine - Image Evaluator v1.3.1](https://sightengine.com/)
- **Phantom Development Team**:
Dis_chat#1378 - Founder/Developer
Robert Miller#1780 - Developer/Hosting/Admin
Stephen Michel#0440 - Developer/Admin/Security Analyst
Bot made by Dis_chat#1378.
RCDForum: https://rcdforum.com`);
    reply(infoEmbed);
  }
}

module.exports = Info;
