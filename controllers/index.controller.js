const { messages } = require('../db');

async function index(req, res) {
    res.render('index', { title: "Mini Messageboard", messages: messages });
}

async function newMessageGet(req, res) {
    res.render("form", { title: "Mini Messageboard" });
}

async function newMessagePost(req, res) {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    const newId = messages.length;

    messages.push({ id: newId, text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
}

async function messageDetails(req, res) {
    let id = parseInt(req.params.id);
    const message = messages.find(m => m.id == id);

    if (!message) {
        res.status(404).send(
            "Message not found"
        );
        return;
    }
    res.render("message-details", { title: "Mini Messageboard", message: message });
}

module.exports = {
    index,
    newMessageGet,
    newMessagePost,
    messageDetails
}