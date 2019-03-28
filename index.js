let words = {
    "ping": "pong",
    "test": "test",
    "hi": "hello"
}

var VK = require("VK-Promise"),
    vk = new VK("Place token here!");

vk.longpoll.start();

vk.on('message', (event, msg) => {
    if(!words.hasOwnProperty(msg.body.toLowerCase())) return;

    msg.send(words[msg.body.toLowerCase()]);
});
