const Discord = require("discord.js");

module.exports.run = async (client) =>{


    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("O loop presence foi ativado!")

    for (i=0; i<10;){
        await sleep(60000)
        client.user.setPresence({ game: { name: `para ${client.guilds.size} servidores! Muito obrigado por me usarem 😘`, url: "https://twitch.tv/LockDzn", type: 1} });
        await sleep(60000)
        client.user.setPresence({ game: { name: "k!ajuda | k!convite", type: 0 } });
        await sleep(60000)
        client.user.setPresence({ game: { name: `${client.users.size} pessoas! Muita gente 😯`, type: 3} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `📩 Me adicione em seu servidor https://kally.glitch.me/invite.html`, url: "https://twitch.tv/LockDzn", type: 1} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `❓ Precisando de ajuda? https://discord.gg/fsSNJJH`, url: "https://twitch.tv/LockDzn", type: 1} });
    }
   

}
