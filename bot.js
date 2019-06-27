const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("593910247190560784")
setInterval(function() {
channel.send(`HI FREE CREDITS FROM SKILLZ`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
