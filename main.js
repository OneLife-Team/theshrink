const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("!");
var playstatus = ("Use !help for help");
var start_pitch = ("Take a deep breath, and carry out the following actions to enter live play...\n\n");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: playstatus}});
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content.startsWith(prefix + "startchallenge")){
        let replies = ["CHANT", "JUMP UP", '"FOLLOW ME"', '"WAIT"', "SHRUG"];
        let seq1 = Math.floor((Math.random() * replies.length));
        let seq2 = Math.floor((Math.random() * replies.length));
        let seq3 = Math.floor((Math.random() * replies.length));
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1).toString().toLowerCase();

        if (args.includes("oddysee")){
            var game = ("Oddysee");
        } else if (args.includes("exoddus")){
            var game = ("Exoddus");
        } else {
            if (args === ""){
                var wrongsentence = (", you need to specify game name to start your challenge...");
            } else {
                var wrongsentence = (", the game name you specified is wrong... Please check it again.");
            }
            var start_embed = new Discord.RichEmbed()
                .setColor('#FF0007')
                .addField("Error during initialization", message.author.toString() + wrongsentence)
                .addField("Exemples", "**!startchallenge Oddysee**\n**!startchallenge Exoddus**")
                .setFooter("Commands aren't case sensitive ;)")
            message.channel.send(start_embed);
            return;
        }
        var start_embed = new Discord.RichEmbed()
            .setColor('#9301BD')
            .addField("OneLife Challenge Initialized !", message.author.toString() + ", you have decided to start your " + game + " challenge.\n" + start_pitch + '"HELLO"\n**' + replies[seq1] + "\n" + replies[seq2] + "\n" + replies[seq3] + "**\nFART")
            .setFooter("Good Luck...")
        message.channel.send(start_embed);
    }

    if (message.content === prefix + "help"){
        var start_embed = new Discord.RichEmbed()
        .setColor('#00E930')
        .addField("Help asked", message.author.toString() + ", you asked for help!")
        .addField("Available Commands", "**!help** : Display this message\n**!startchallenge *(Oddysee/Exoddus)*** : Allows you to start your challenge!")
        .setFooter("That's all folks.")
    message.channel.send(start_embed);
    }
});
