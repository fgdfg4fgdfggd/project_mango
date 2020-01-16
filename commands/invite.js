const Discord = require ("discord.js"); // eslint-disable-line no-unused-vars
const Command = require("../base/Command.js");

class Invite extends Command {
  constructor (client) {
    super(client, {
      name: "invite",
      description: "Get Phantom invitation link.",
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
    const inviteEmbed = new Discord.MessageEmbed()
      .setTitle("Invite Me!")
      .setDescription(`Phantom - All in one moderation bot.
- Phantom's RCDForum Link:  https://rcdforum.com/
 RCDForum site for RCD.

- Support Server Invite Link: https://discord.gg/GPMH6YD
 This link redirects you to the Phantom's Support Server where you can ask for assistance, report bugs or even give us suggestions on what we should add and/or improve.
`)
      .setColor("#36393e")
      .setTimestamp();
    message.channel.send(inviteEmbed);
  }
}

module.exports = Invite;
