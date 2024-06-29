const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/user');

const User = require('../models/user');

const router = express.Router();

router.post(
  '/register',
  [
    check('email').normalizeEmail().isEmail(),
    check('password').trim().isLength({ min: 6 }),
    check('name').trim().not().isEmpty(),
  ],
  userController.signupUser
);

module.exports = router;
