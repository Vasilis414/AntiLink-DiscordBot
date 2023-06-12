const { Client, PermissionsBitField, Partials, ActivityType, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
    sharCount: "auto",
});
const {antilink, token} = require("./config.json")

client.once('ready', () => {
    console.log('Ready!');
    client.user.setPresence({
        activities: [{ name: `for links`, type: ActivityType.Watching }],
        status: 'dnd',
    });
});


client.on("messageCreate", async message => {
    if (!message.guild) return;
    if (message.member.permissions.has([PermissionsBitField.Flags.Administrator])) return;
    if (antilink !== true) {
        return
    } else if (message.content.toLowerCase().includes("discord.gg/") || message.content.toLowerCase().includes("discord.io/") || message.content.toLowerCase().includes("youtube.com/") || message.content.toLowerCase().includes("twitch.tv/") || message.content.toLowerCase().includes("discord.com/") || message.content.toLowerCase().includes("https://") || message.content.toLowerCase().includes("http://") || message.content.toLowerCase().includes(".com")) {
        message.delete().catch(() => { })
        message.channel.send({
            embeds: [new EmbedBuilder({
                "color": 0xFF0000,
                "title": "Link Detected ⚠",
                "description": "<@"+message.member.user.id+"> sent a link!"
            })]
        }).catch((e)=>{console.log(e)})
    }


});

client.on("messageUpdate", async (oldMessage, newMessage) => {
    message = newMessage;
    if (oldMessage.member.permissions.has([PermissionsBitField.Flags.Administrator])) return;
    if (antilink !== true) return;
    if (!newMessage) return;
    if (message.content.toLowerCase().includes("discord.gg/") || message.content.toLowerCase().includes("discord.io/") || message.content.toLowerCase().includes("youtube.com/") || message.content.toLowerCase().includes("twitch.tv/") || message.content.toLowerCase().includes("discord.com/") || message.content.toLowerCase().includes("https://") || message.content.toLowerCase().includes("http://") || message.content.toLowerCase().includes(".com")) {
        message.delete().catch((e)=>{console.log(e)})
        oldMessage.channel.send({
            embeds: [new EmbedBuilder({
                "color": 0xFF0000,
                "title": "Link Detected ⚠",
                "description": "<@"+oldMessage.member.user.id+"> sent a link!"
            })]
        }).catch((e)=>{console.log(e)})
    }
})

client.login(token);
