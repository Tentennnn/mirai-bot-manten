const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (client, message, args, prefix) => {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#d1bed7")
    .setTitle(`${client.user.username} Commands List!`)
    .addField(
      "ℹ️ Informantion :",
      `
សួស្តីខ្ញុំឈ្មោះ \`${client.user.username}\`,
ខ្ញុំមកពី \`Cambodia/Khmer\`.
បង្កើតដោយ : <@356510829920780289>
ខ្ញុំបានធ្វើវាជាមួយ JavaScript/Discord.js ជាក្របខ័ណ្ឌមួយ,
កុំភ្លេចតាមដានគាំទ្រប្រព័ន្ធផ្សព្វផ្សាយសង្គមរបស់ខ្ញុំ។
**[Facebook](https://www.facebook.com/heaalong855) | [Instagram](https://www.instagram.com/healong_/) | [Khmer Bot Website](https://tenbot.glitch.me/bot.html)**
`
    ) 
   .addField(
      "📄 Commands :",
      `\`\`\`» ${client.commands.map(c => c.config.name).join("\n» ")}\`\`\``
    )
 // .addField("Donate:", `**<:aba:759117484996689991> | 001581635 LIM CHILONG\n<:paypal:759117344977977425> | heaalong.kh@gmail.com**`)
    .setTimestamp();

  message.channel.send(exampleEmbed);
};

module.exports.config = {
  name: "help",
  aliases: ["h", "hlp"]
};
