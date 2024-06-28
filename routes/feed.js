const express = require('express');
const feedController = require('../controllers/feed');

const router = express.Router();

router.get('/information', feedController.getPosts);
router.post('/register', feedController.createPosts);

module.exports = router;
