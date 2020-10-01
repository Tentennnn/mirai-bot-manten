const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (client, message, args, prefix) => {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#d1bed7")
   .addField(
      "DONATE TEN MUSIC :",
      `**<:aba:759117484996689991> | 001 581 635 LIM CHILONG
      <:paypal:759117344977977425> | [Pay Now](https://www.paypal.com/paypalme/heaalong)**`
    )

    .setTimestamp();

  message.channel.send(exampleEmbed);
};

module.exports.config = {
  name: "donate",
  aliases: []
};
