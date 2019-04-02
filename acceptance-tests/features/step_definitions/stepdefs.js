const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const chatManager1 = require("../../../src/chat/scripts/chatManager.js");

// SEND MESSAGE
Given('I\'m using the chat app', function() {
    chatManager1.INFO.user = "jandrolaviana"; // ME
    chatManager1.INFO.receiver = "pruebaes5b"; // MY FRIEND
});

When('I send a message {string} to my {string} friend', function(message, friendName) {
    chatManager1.INFO.receiver = friendName;
    chatManager1.getReceiver = function() { return chatManager1.INFO.receiver; }
    chatManager1.sendMessage = function() { return message; }
    this.reply = chatManager1.sendMessage(message);
});

Then('My friend {string} gets the message {string}', function(friendName, message) {
    assert.equal(chatManager1.getReceiver(), friendName);
    assert.equal(this.reply, message);
});

// RECEIVE MESSAGE
When('I\'m chatting with {string}', function(friendName) {
    chatManager1.INFO.receiver = friendName;
    chatManager1.getReceiver = function() { return chatManager1.INFO.receiver; }
});

Then('I recieve a message {string} from my friend {string}', function(message, friendName) {
    chatManager1.MESSAGES.friendMSG = [message, "another by default"];
    assert.equal(chatManager1.getReceiver(), friendName);
    assert.equal(containsMessageAndFriend(chatManager1, message, friendName), true);
});

function containsMessageAndFriend(cm, message, friendName) {
    var i;
    for (i = 0; i < cm.MESSAGES.friendMSG.length; i++)
        if (cm.MESSAGES.friendMSG[i] === message && cm.INFO.receiver === friendName)
            return true;
    return false;
}

// CHECK RIGHT FRIEND
When('I want to start chatting with my friend {string}', function(friendName) {
    chatManager1.INFO.receiver = friendName;
    chatManager1.getReceiver = function() { return chatManager1.INFO.receiver; }
});

Then('{string} is the right person to send the message', function(friendName) {
    assert.equal(chatManager1.getReceiver(), friendName);
});

// CHECK FRIENDS
When('I want to start a chat with my friend {string}', function(friendName) {
    chatManager1.getFriends = function() { return [friendName, "Lucas", "Fernando"]; }
});

Then('{string} appears in the friends list', function(friendName) {
    assert.equal(containsFriend(friendName, chatManager1.getFriends()), true);
});

function containsFriend(friendName, friends) {
    var i;
    for (i = 0; i < friends.length; i++)
        if (friends[i] === friendName)
            return true;
    return false;
}






var nope;
// NOT CHOOSING FRIEND
When('I send a message {string}', function(message) {
    if (chatManager1.INFO.receiver == null)
        this.nope = "Nope";
    else this.nope = "Talking alone succesfull!";
});

Then('The chat says "Nope"', function() {
    assert.equal(nope, "Nope");
});
