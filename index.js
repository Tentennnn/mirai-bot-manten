const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
const Enmap = require("enmap");
const settings = require("./config/bot.json") //The bot connects using the configuration file


const { Player } = require("discord-player"); //Create a new Player (Youtube API key is your Youtube Data v3 key)

const player = new Player(client, settings.youtube_api);

client.player = player;
client.commands = new Discord.Collection();
client.command = new Discord.Collection();
client.aliases =  new Discord.Collection();
client.emotes = require("./config/emojis.json");
client.colors = require("./config/colors.json");

fs.readdir("./commands/", (err, files) => {
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) return console.log("Could not find any commands!");
    jsfile.forEach((f, i) => { 
    console.log(`Loaded ${f}!`);
    let pull = require(`./commands/${f}`);
    client.commands.set(pull.config.name, pull);  
    pull.config.aliases.forEach(alias => {
    client.aliases.set(alias, pull.config.name)
                
    });
})});


client.on("ready", () => {
    console.log("The bot is ready to play music");
    let playing = client.voice.connections.size; 
    setInterval(() => {
      let statuses = [`Need help? Try ${client.prefix}help`, "Wishing peoples"];
      let ranstatus = Math.floor(Math.random() * statuses.length);
      client.user.setActivity(statuses[ranstatus], {
        type: "STREAMING",
        url: "https://www.twitch.tv/tamotoji__"
      });
    }, 5000);
});

client.on('message', async message => {
    
    let prefix = settings.prefix;
        
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
      
      
    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args,prefix);   
        
});

client.login(settings.token_bot); //This is the heart of the bot