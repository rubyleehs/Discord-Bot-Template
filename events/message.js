const botconfig = require(`../bot_config`);

module.exports = function (client, msg)
{
    //Don't process any bot messages
    if (msg.author.bot) return;

    //Check if message start with necessary prefix
    if (msg.content.startsWith(botconfig.prefix))
    {
        //remove prefix and sanitize input
        var s = msg.content.substr(botconfig.prefix.length);
        s = JSON.stringify(s).replace(/[^0-9a-z ]/gi, '')

        //get which command is being called
        var commandName = s.split(" ")[0].toLowerCase();

        //runs the command
        //this finds exact matches of files in ../commands/*
        try
        {
            return eval("require('../commands/" + commandName + "')" + "(msg)");
        }
        catch{
            return msg.channel.send("`" + commandName + "` is not a valid function");
        }

    };
}