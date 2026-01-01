const express = require('express');
const router = express.Router();
const { index, newMessageGet, newMessagePost } = require('../controllers/index.controller');

router.get('/', index);

router.get('/new', newMessageGet);

router.post('/new', newMessagePost);

module.exports = router;