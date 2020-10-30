//----------------------------------------------------------------------------------> By : MeTuBe Plus
//---------------------------------------> Hello World


const http = require('http');
const express = require('express');
const app = express(); // by : MeTuBe Plus
app.get("/", (request, response) => {
  response.sendStatus(200); // by : MeTuBe Plus
});
app.listen(process.env.PORT);
setInterval(() => { 
  http.get(`https://o2-.glitch.me/`);
}, 280000); // by : MeTuBe Plus


//----------------------------------------------------------------------------------> By : MeTuBe Plus


const Discord = require("discord.js");
const client = new Discord.Client(); // by : MeTuBe Plus
const bot = new Discord.Client();
const ms = require("ms");
const fs = require('fs'); // by : MeTuBe Plus
const moment = require('moment');
const request = require('request');
const cmd = require("node-cmd");
const prefix = "*"; // البرافيكس
   const GUILDID = '553322716409626648'; // اي دي السيرفر  
   const CHANNELID = '771670213262966794'; // اي دي الروم



//----------------------------------------------------------------------------------> By : MeTuBe Plus



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity("القراءن الكريم",{type: 'WATCHING'})
});

const { Client } = require('discord.js');
const ytdl  = require('ytdl-core'); // by : MeTuBe Plus
const url = 'https://www.youtube.com/watch?v=M6z0Qql4-qo'; // هنا فديو الخاص ب القرأن الكريم كامل 


client.on('ready',async () => {
    console.log('تـم تشغيل القرأن الكريم');
    
    voiceStay(GUILDID, CHANNELID); // by : MeTuBe Plus
   function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('ـاكد انك حطط ايدي السيرفر');
    if(!channelid) throw new Error('تـاكد انك حطط ايدي الروم');

    let guild = client.guilds.get(guildid);
    const voiceChannel = guild.channels.get(channelid);;
    if (!voiceChannel) {
      return 
    }
    voiceChannel.join()
      .then(connection => { // by : MeTuBe Plus
        const stream = ytdl(url, { filter: 'audioonly' }); 
        const dispatcher = connection.playStream(stream);
        dispatcher.on('end', () => { 
          voiceChannel.leave();
          cmd.run("refresh")

        });
      });
  }
});


  
//----------------------------------------------------------------------------------> By : MeTuBe Plus  

client.on('message', message => {
    if(message.content === prefix + 'guild'){ // by : MeTuBe Plus
            const millis = new Date().getTime() - message.member.user.createdAt.getTime();
    const now = new Date(); // by : MeTuBe Plus
    const createdAt = millis / 1000 / 60 / 60 / 24;
    var heg = message.guild; // by : MeTuBe Plus
// by : MeTuBe Plus
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField('GuidlOwner',message.guild.owner,true)
        .addField('Guild ID', message.guild.id,true)
        .addField('Guild MemberCount', `${message.guild.memberCount}`+` [Online : ${message.guild.members.filter(m=>m.presence.status == 'online').size}]`)
        .addField('Guild Channels',`\`🔊\` ${message.guild.channels.filter(m => m.type === 'text').size} | `+`\`#\`${message.guild.channels.filter(m => m.type === 'voice').size} `)
        .addField('Guild RolesCount',` ${message.guild.roles.size} `,true)
        .addField('Created',`\`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField('Guild Region',message.guild.region,true) // by : MeTuBe Plus
        
        // by : MeTuBe Plus
        message.channel.send(embed)
    }
})

//----------------------------------------------------------------------------------> By : MeTuBe Plus  


client.on('message', message => { // by : MeTuBe Plus
    if (message.content.startsWith(prefix + "stats")) {
               if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    message.channel.send({  // by : MeTuBe Plus
        embed: new Discord.RichEmbed()
            .setColor('BLACK') // by : MeTuBe Plus
            .addField('Ping' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('RAM Usage', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('ID' , `[ ${client.user.id} ]` , true)
            .addField('Prefix' , `[ ${prefix} ]` , true)
            
    })
}
});
      



client.login(process.env.BOT_TOKEN);

//dont forget the sub
//----------------------------------------------------------------------------------> By : MeTuBe Plus