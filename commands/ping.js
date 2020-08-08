module.exports = function (msg)
{
    msg.channel.send(
        ":ping_pong: **PONG!**"
    ).then((msg2) =>
    {
        msg2.edit(
            msg2.content +
            "\n** Latency : ** " + (msg2.createdTimestamp - msg.createdTimestamp) + "ms"
        );
    });
}