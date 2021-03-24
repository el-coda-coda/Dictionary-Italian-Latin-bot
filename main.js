const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
const bot_token = config.token

console.log("Dicitionary-bot is started")
console.log("--------------------------")
console.log("")



client.on("message", (message) => {
    if (message.content.startsWith("!trad")){
        let script = String("https:" + "//www.dizionario-latino.com/dizionario-latino-italiano.php?parola=" + String(message.content.substr(6)))
        message.channel.send(script).then(msg => msg.delete({timeout: 150000}))
    }
    if (message.content.startsWith("!dec")){
        let script = String("https:" + "//www.dizionario-latino.com/dizionario-latino-flessione.php?parola=" + String(message.content.substr(5)))
        message.channel.send(script).then(msg => msg.delete({timeout: 150000}))
    }
})

client.login(process.env.bot_token)