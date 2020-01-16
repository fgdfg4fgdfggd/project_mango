const Discord = require ("discord.js"); // eslint-disable-line no-unused-vars
const Command = require("../base/Command.js");

class Help extends Command {
  constructor (client) {
    super(client, {
      name: "help",
      description: "Learn how to use Phantoms's commands.",
      category: "General",
      usage: "[category/alias]",
      enabled: true,
      guildOnly: false,
      aliases: ["halp"],
      permLevel: "User",
      cooldown: 5,
      args: false
    });
  }

  async run (message, args, level, reply) { // eslint-disable-line no-unused-vars
      if (!args[0]) {
        const emb = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setColor("#FF00FF")
          .addField("Moderation - `" + message.guild.settings.prefix + "help moderation`", `Commands helping you moderate your server.`)
          .addField("General - `" + message.guild.settings.prefix + "help general`", `Commands any bot have.`)
          .addField("Settings - `" + message.guild.settings.prefix + "help settings`", `Commands help you set up your server. For other features [check dashboad](http://${this.client.config.dashboard.domain}/).`)
          .addField("Tools - `" + message.guild.settings.prefix + "help tools`", `Usefull tools that you will most liekly use at some point.`)
          .addField("Ban List - `" + message.guild.settings.prefix + "help banlist`", `Commands regarding ban list.`)
          .addField("Tags - `" + message.guild.settings.prefix + "help tags`", `Server custom commands.\n\nRCDForum: [https://RCDForum.com/lutubot](https://RCDForum.com/lutubot)`);
        reply(emb);
     } else if (args[0].toLowerCase() === "moderation") {
       var cmds = this.client.commands.filter(c => c.help.category === "Moderation" && c.conf.enabled === true);
       cmds = cmds.map(cmd => `**${cmd.help.name.toProperCase()} - \`${message.guild.settings.prefix}${cmd.help.name}\`**\n${cmd.help.description}`)

       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#FF00FF")
         .setDescription(`${cmds.join("\n")}\n\nRCDForum: [https://rcdforum.com/)`);
        reply(emb);
     } else if (args[0].toLowerCase() === "general") {
       var cmds = this.client.commands.filter(c => c.help.category === "General" && c.conf.enabled === true);
       cmds = cmds.map(cmd => `**${cmd.help.name.toProperCase()} - \`${message.guild.settings.prefix}${cmd.help.name}\`**\n${cmd.help.description}`)

       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#FF00FF")
         .setDescription(`${cmds.join("\n")}\n\nRCDForum: [https://rcdforum.com/)`);
        reply(emb);
     } else if (args[0].toLowerCase() === "settings") {
       var cmds = this.client.commands.filter(c => c.help.category === "Settings" && c.conf.enabled === true);
       cmds = cmds.map(cmd => `**${cmd.help.name.toProperCase()} - \`${message.guild.settings.prefix}${cmd.help.name}\`**\n${cmd.help.description}`)

       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#FF00FF")
         .setDescription(`${cmds.join("\n")}\n\nRCDForum: [https://rcdforum.com/)`);
        reply(emb);
     } else if (args[0].toLowerCase() === "tools") {
       var cmds = this.client.commands.filter(c => c.help.category === "Tools" && c.conf.enabled === true);
       cmds = cmds.map(cmd => `**${cmd.help.name.toProperCase()} - \`${message.guild.settings.prefix}${cmd.help.name}\`**\n${cmd.help.description}`)

       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#FF00FF")
         .setDescription(`${cmds.join("\n")}\n\nRCDForum: [https://rcdforum.com/)`);
        reply(emb);
     } else if (args[0].toLowerCase() === "banlist") {
       var cmds = this.client.commands.filter(c => c.help.category === "Ban List" && c.conf.enabled === true);
       cmds = cmds.map(cmd => `**${cmd.help.name.toProperCase()} - \`${message.guild.settings.prefix}${cmd.help.name}\`**\n${cmd.help.description}`)

       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#FF00FF")
         .setDescription(`${cmds.join("\n")}\n\nRCDForum: [https://rcdforum.com/)`);
        reply(emb);
     } else if (args[0].toLowerCase() === "tags") {
       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#FF00FF")
         .setDescription(`${message.guild.settings.tags.map(t => `${t.name}`).join(", ") || "Use `" + message.guild.settings.prefix +"tags add` to add custom commands."}\n\nRCDForum: [https://rcdforum.com/)`);
       reply(emb);
     } else {
       const command = this.client.commands.get(args[0].toLowerCase());
       if (!command) return reply(`Command/Category/Alias not found.`);
       var enab = command.conf.enabled ? "Yes" : "No";
       var cperm = command.conf.permLevel;
       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#FF00FF")
         .setDescription(`${command.help.name.toProperCase()} - Info\n**Name**: ${command.help.name}\n**Description**: ${command.help.description}\n**Category**: ${command.help.category}\n**Usage**: \`${message.guild.settings.prefix}${command.help.name} ${command.help.usage}\`\n**Cooldown**: ${command.conf.cooldown} Seconds\n**Minimum Rank**: ${command.conf.rank}\n**Enabled**: ${enab}\n**Permission Level**: ${cperm}\n\nRCDForum: [https://rcdforum.com/)`);
       reply(emb);
     }

  }
}

module.exports = Help;
