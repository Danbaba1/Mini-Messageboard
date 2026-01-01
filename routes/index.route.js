const express = require('express');
const router = express.Router();
const { index, newMessageGet, newMessagePost, messageDetails } = require('../controllers/index.controller');

router.get('/', index);

router.get('/new', newMessageGet);

router.post('/new', newMessagePost);

router.get('/messages/:id', messageDetails);

module.exports = router;