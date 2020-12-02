require("dotenv").config()

//dot env takes all the variables from the env file and loads them into the process.env inside of node
//code is taken from discord.js documentation

const Discord=require("discord.js")
const client= new Discord.Client({
    //partials are used for reacting/accesing to data before the bot has entered]
    partials:["MESSAGE"] 
})
const PREFIX="!"
const COMMAND="mod-me"

client.on("ready",()=>{
    console.log("Our bot is ready to go!")
})

client.on("messageDelete",msg=>{
    msg.channel.send("Stop deleting messages")
})

client.on("message",msg=>{
    if(msg.content===`${PREFIX}${COMMAND}`){
        modUser(msg.member)
    }
    if(msg.content=="I love Dunk_orz"){
        msg.react("💖")
    }
})

function modUser(member){
    member.roles.add("783634367221071873")
}

client.login(process.env.BOT_TOKEN)