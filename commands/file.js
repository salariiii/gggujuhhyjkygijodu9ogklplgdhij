module.exports = {
    name: 'file',
    description: 'file command',
    execute(message, args){
        let messageArry = message.content.split(" ")
        let cmd = messageArry[0];
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Shoma permission kafi baraye in kar ra nadarid");
        message.delete()
          
          let text1 = message.content.replace(`${cmd}`, '')
  
          if(text1 && text1 !== ""){
            message.channel.send(text1)

          }else{
            message.reply("Lotfan Matn Ham Vared Konid")
          }
    }
}