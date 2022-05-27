module.exports = {
    name: 'fg',
    description: 'file gif',
    execute(message, args){
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Shoma permission kafi baraye in kar ra nadarid");
        message.delete()
        message.channel.send("https://cdn.discordapp.com/attachments/933342347557752885/946808500502286396/image0-7-1.gif")
    }
}