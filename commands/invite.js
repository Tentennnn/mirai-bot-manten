const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (client, message, args, prefix) => {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#d1bed7")
   .addField(
      "INVITE LINK :",
      `CLICK [HERE](https://discordapp.com/api/oauth2/authorize?client_id=700314109102522419&permissions=2088763127&scope=bot) INVITE ME TO YOUR SERVER !\n\nKHMER BOT WEBSITE : [CLICK HERE TO VISTI WEBSITE](https://tenbot.glitch.me/bot.html)`
    )

    .setTimestamp();

  message.channel.send(exampleEmbed);
};

module.exports.config = {
  name: "invite",
  aliases: ["inv"]
};
