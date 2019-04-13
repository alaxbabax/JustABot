// The link to receive token
// https://vk.cc/8E0H4r

// Keywords
let words = {
    "ping": "pong",
    "test": "test",
    "hi": "hello"
}

// VK authorization by token
var VK = require("VK-Promise"),
    vk = new VK(" < token here > "); // place token in quotes

// Starting longpoll server
vk.longpoll.start();

// Callback function
vk.on('message', (event, msg) => {

    // Check if message body contains any keywords
    if(!words.hasOwnProperty(msg.body.toLowerCase()) || msg.out) return;

    // If true, send the message with text, which specified in beginning of code
    msg.send(words[msg.body.toLowerCase()]);

});
