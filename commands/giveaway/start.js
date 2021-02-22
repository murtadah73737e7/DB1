const giveawayClient = require('../../Client')
const {Client,Message,MessageEmbed} = require("discord.js")
const ms = require("ms")

module.exports = {
    name: 'g',
    category: 'MEMBER',
    description: 'get imag profil memmbers',
    usage: `avatar <user>`,
    run: async (client, message, args) => {


      if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("you dont have Permission")
    const channel = message.mentions.channels.first();
    if (!channel) return message.reply("channel")
    let time = args[1]; if (!time) message.reply("time") 
    time = ms(time);


    giveawayClient.start({
      channel,
      time,
      hostedBy: memmbers.author,
      description: "A random giveaway",
      winners: parseInt(args[2]),
      prize: args.slice(3).join(" "),
    })

    
    }
}