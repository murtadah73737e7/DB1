const Discord = require('discord.js')
const client = new Discord.Client();
const { GiveawayClient } = require('reconlx');

const newLocal = "🎉";
const giveaway = new GiveawayClient(client, {
  mongoURI: "mongodb+srv://five:88uuii88@cluster0.jfrou.mongodb.net/test",
  emoji: newLocal,
  defaultColor: "#fff",
});

module.exports = giveaway;