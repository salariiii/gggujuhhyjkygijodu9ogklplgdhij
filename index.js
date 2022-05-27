const botconfig = require('./botconfig.json')
const {token} = require('./botconfig.json')
const {prefix} = require('./botconfig.json')

const Discord = require('discord.js')
const bot = new Discord.Client({disableEveryone: true})
const srza = require('discord.js');
srza.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log(`${bot.user.tag} Is Now Online`)
  const onEmbed = new Discord.MessageEmbed
  onEmbed.setColor('#BF71FF')
  onEmbed.setThumbnail('https://cdn.discordapp.com/attachments/897091043277811772/969473529600962600/092568dff23e0122dfe350380e6a8e14.png')
  onEmbed.setTitle("Bot Run Shod")
  onEmbed.setURL('https://discord.gg/w2dGPDpwrV')
  onEmbed.setDescription(`${bot.user.tag} Is Now Online`)
  onEmbed.setFooter(bot.user.username)
  bot.channels.cache.get('967831541302587432').send(onEmbed)
  function sobhan() {
    let vazyiat = ["dnd", "idle","online"] // online | dnd | idle | offline
    let godrat = Math.floor(Math.random() * vazyiat.length)
    bot.user.setPresence({
    status: vazyiat[godrat] })
  }; setInterval(sobhan, 3000)
  
  let serverid = '923552201341816873'
    let voiceid = '976718927256256552'
    if(!bot.voice.connections.get(serverid)) {
    let channel = bot.channels.cache.get(voiceid) || bot.channels.fetch(voiceid)
    if(!channel) return;
   
    const connection = channel.join()
    }

    function status() {

      let count = 0;
      const gGuild = bot.guilds.cache.get("923552201341816873")
      const voiceChannels = gGuild.channels.cache.filter(c => c.type === 'voice');
      for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  
      let go = [`${gGuild.memberCount} Members👥`, `${gGuild.name}`, `${count} Active Mics🎤`]
      let plsc = ["WATCHING", "COMPETING", "LISTENING"]
      let Power = Math.floor(Math.random() * go.length);
  
      bot.user.setActivity(go[Power], { type: plsc[Power] });
    }; setInterval(status, 5000)

    function chNickname() {
      const targetguild = bot.guilds.cache.get("923552201341816873")
      const server = targetguild.members.cache.get(bot.user.id)
      let esm = ['𝐕𝐞𝐧𝐮𝐬 𝐒𝐭𝐮𝐟𝐟','𝐅𝐢𝐯𝐞𝐦 𝐒𝐭𝐮𝐟𝐟'] 
          let godrat = Math.floor(Math.random() * esm.length)
        server.setNickname(esm[godrat])
    }; setInterval(chNickname, 5000)
});

bot.once('ready', () => {
  const guild = bot.guilds.cache.get('923552201341816873')
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('976718927256256552')
        channel.setName(`⟅👥⟆・ᴍᴇᴍʙᴇʀꜱ: ${memberCount.toLocaleString()}`)
  }, 5000);
})

bot.on('guildMemberAdd', guildMember => {
  const WelcomeEmbed = new Discord.MessageEmbed();
  WelcomeEmbed.setColor('#BF71FF')
  WelcomeEmbed.setThumbnail('https://cdn.discordapp.com/attachments/897091043277811772/969473529600962600/092568dff23e0122dfe350380e6a8e14.png')
  WelcomeEmbed.setImage('https://cdn.discordapp.com/attachments/967773831106289674/978620723465687070/welcome.png')
  WelcomeEmbed.setTitle("💫 New Member Joined 💫")
  WelcomeEmbed.setURL('https://discord.gg/w2dGPDpwrV')
  WelcomeEmbed.setDescription(`<@${guildMember.user.id}> Khosh Omadi Be Server 𝐕𝐞𝐧𝐮𝐬 𝐒𝐭𝐮𝐟𝐟 ~ 𝐅𝐢𝐯𝐞𝐦 𝐒𝐭𝐮𝐟𝐟`)
  WelcomeEmbed.setFooter(bot.user.username)
  guildMember.guild.channels.cache.get('942708226707832873').send(`<@${guildMember.user.id}>`,WelcomeEmbed);
  guildMember.roles.add('962778373468336129')
});

bot.on('guildMemberRemove', guildMember => {
  const leaveEmbed = new Discord.MessageEmbed();
  leaveEmbed.setColor('#BF71FF')
  leaveEmbed.setThumbnail('https://cdn.discordapp.com/attachments/897091043277811772/969473529600962600/092568dff23e0122dfe350380e6a8e14.png')
  leaveEmbed.setTitle("😯 Member Leaved 😯")
  leaveEmbed.setURL('https://discord.gg/w2dGPDpwrV')
  leaveEmbed.setDescription(`<@${guildMember.user.id}> Az Server Leave Dad`)
  leaveEmbed.setFooter(bot.user.username)
  guildMember.guild.channels.cache.get('968207330833494036').send(leaveEmbed);
});

bot.on('guildBanAdd', guild => {
  guild.fetchAuditLogs().then(logs => {
    logs.entries.filter(l => l.action === 'MEMBER_BAN_ADD')
      .forEach(log => {
        if (Date.now() - log.createdTimestamp > 1000) return

        const logsChannel = guild.channels.cache.get('967831475158409227')
        const BanEmbed = new Discord.RichEmbed()
        BanEmbed.setColor('#BF71FF')
        BanEmbed.setThumbnail('https://cdn.discordapp.com/attachments/897091043277811772/969473529600962600/092568dff23e0122dfe350380e6a8e14.png')
        BanEmbed.setTitle("🧨 Member Banned 🧨")
        BanEmbed.setURL('https://discord.gg/w2dGPDpwrV')
        BanEmbed.setDescription(`${log.executor.tag} banned ${log.target.tag}`)
        BanEmbed.setFooter(bot.user.username)

        logsChannel.send(BanEmbed)
      })
  })
})

bot.on('message', async  message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArry = message.content.split(" ")
    let cmd = messageArry[0];
    let args = message.content.substring(prefix.length).split(" ")

    if (message.content.startsWith(`${prefix}`)) {
    if (args[0] === "clear") {
      bot.commands.get('clear').execute(message, args);
  }
}

    if (!message.guild) return;

    if (message.content.startsWith(`${prefix}ban`)) {
      bot.commands.get('ban').execute(message, args);
    } else if (!message.guild) return;

    if (message.content.startsWith(`${prefix}kick`)) {
      bot.commands.get('kick').execute(message, args);
    }

    if (message.content.startsWith(`${prefix}addrole`)) {
      bot.commands.get('addrole').execute(message, args);
    }

    if(cmd == `${prefix}announce`){
      bot.commands.get('announce').execute(message, args);
      }

      if(cmd == `${prefix}file`){
        bot.commands.get('file').execute(message, args);
        }

        if(cmd == `${prefix}fg`){
          bot.commands.get('fg').execute(message, args);
        }

        if(cmd == `${prefix}exchange`){
          bot.commands.get('exchange').execute(message, args);
        }
})


bot.login(botconfig.token)