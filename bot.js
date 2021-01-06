const { Client } = require("discord.js")
const dclient = new Client()
const token = ""
const roleid = ""
const guildid = ""

const getRandomColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16)
}

dclient.on("ready",()=>{
    dclient.user.setActivity("diltz winning",{type: "WATCHING"})
    const guild = dclient.guilds.cache.find(guild => guild.id === guildid)
    console.log(guild.name)

    if (!guild){
        console.log("Yo didn't found guild")
    }else{
        let role = guild.roles.cache.find(role => role.id === roleid)
        console.log(role.name)
        if (!role){
            console.log("Yo didn't found role")
            return
        }

        setInterval(() => {
            role.setColor(getRandomColor())
        }, 3000);
    }
})

dclient.login(token)
