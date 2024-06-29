const express = require('express');
const feedController = require('../controllers/feed');

const router = express.Router();

router.get('/information', feedController.getPosts);

module.exports = router;
