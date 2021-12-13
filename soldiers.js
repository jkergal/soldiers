//-----------------------------//
//---------REQUISITES----------//
//-----------------------------//

// const cron = require('cron');
require('dotenv').config(); // Create a .env file to specify your bot token and commands' prefix
const { Client, Intents, Message } = require('discord.js');


// //-----------------------------//
// //-------DISCORD CONNEXION-----//
// //-----------------------------//

const client1 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const client2 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const client3 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const client4 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const client5 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const client6 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const client7 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const client8 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
client1.once('ready', () => {
    console.log('SOLDIER I READY FOR THE WAR SERGENT!')
})
client2.once('ready', () => {
    console.log('SOLDIER II READY FOR THE WAR SERGENT!')
})
client3.once('ready', () => {
    console.log('SOLDIER III READY FOR THE WAR SERGENT!')
})
client4.once('ready', () => {
    console.log('SOLDIER IV READY FOR THE WAR SERGENT!')
})
client5.once('ready', () => {
    console.log('SOLDIER V READY FOR THE WAR SERGENT!')
})
client6.once('ready', () => {
    console.log('SOLDIER VI READY FOR THE WAR SERGENT!')
})
client7.once('ready', () => {
    console.log('SOLDIER VII READY FOR THE WAR SERGENT!')
})
client8.once('ready', () => {
    console.log('SOLDIER VIII READY FOR THE WAR SERGENT!')
})



// //-----------------------------//
// //----------VARIABLES----------//
// //-----------------------------//

const nomClient1 = 'Soldier I';
const nomClient2 = 'Soldier II';
const nomClient3 = 'Soldier III';
const nomClient4 = 'Soldier IV';
const nomClient5 = 'Soldier V';
const nomClient6 = 'Soldier VI';
const nomClient7 = 'Soldier VII';
const nomClient8 = 'Soldier VIII';

//-----------------------------//
//-------REACTIONS ARMY--------//
//-----------------------------//

function reactOnLastMessage(client, nomClient) {
    client.on('messageCreate', async (message) => {

        const guild = client1.guilds.cache.get("910603170336624640"); // Change your Discord server ID here 
    
        const emojiMonday = guild.emojis.cache.get('911267403072167966'); // Change here and below the emojis IDs considering your server's emojis
        const emojiTuesday = guild.emojis.cache.get('911267403046998016');
        const emojiWednesday = guild.emojis.cache.get('911267403084730418');
        const emojiThursday = guild.emojis.cache.get('911267403046985738');
        const emojiFriday = guild.emojis.cache.get('911268283901177876');
        const emojiSaturday = guild.emojis.cache.get('911267403034415114');
        const emojiSunday = guild.emojis.cache.get('911267403109912606');
        
    
        if(message.content === "!reactall") {
            const messages = await message.channel.messages.fetch({ limit: 2 });
            const lastMessage = messages.last();
    
            lastMessage.react(emojiMonday)
            lastMessage.react(emojiTuesday)
            lastMessage.react(emojiWednesday)
            lastMessage.react(emojiThursday)
            lastMessage.react(emojiFriday)
            lastMessage.react(emojiSaturday)
            lastMessage.react(emojiSunday)
            lastMessage.react('⏰');
    
            console.log(nomClient + ' reacted on all emojies of the last message');
        }
    });
};

reactOnLastMessage(client1, nomClient1);
reactOnLastMessage(client2, nomClient2);
reactOnLastMessage(client3, nomClient3);
reactOnLastMessage(client4, nomClient4);
reactOnLastMessage(client5, nomClient5);
reactOnLastMessage(client6, nomClient6);
reactOnLastMessage(client7, nomClient7);
// reactOnLastMessage(client8, nomClient8);


//-----------------------------//
//--------CLIENT LOGIN---------//
//-----------------------------//

client1.login(process.env.DISCORD_TOKEN_1);
client2.login(process.env.DISCORD_TOKEN_2);
client3.login(process.env.DISCORD_TOKEN_3);
client4.login(process.env.DISCORD_TOKEN_4);
client5.login(process.env.DISCORD_TOKEN_5);
client6.login(process.env.DISCORD_TOKEN_6);
client7.login(process.env.DISCORD_TOKEN_7);
client8.login(process.env.DISCORD_TOKEN_8);