function return_uptime(client, message) {
    if (message.content.split(' ').indexOf('--embed') > -1) {
        message.author.send({ embed: { color: 3447003, title: client.uptime } });
    }
    else {
        message.author.send(client.uptime);
    };
};

module.exports = (build) => {
    build.register_command('!uptime', return_uptime);
};
