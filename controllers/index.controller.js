const { messages } = require('../db');

async function index(req, res) {
    res.render('index', { title: "Mini Messageboard", messages: messages });
}

async function newMessageGet(req, res) {
    res.render("form");
}

async function newMessagePost(req, res) {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
}

module.exports = {
    index,
    newMessageGet,
    newMessagePost
}