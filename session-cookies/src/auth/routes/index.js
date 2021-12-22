
const express = require('express');
const authController = require('../controllers');
const router = express.Router();

router.get('/login', authController.login);
router.get('/me', authController.me);
router.get('/logout', authController.logout);

module.exports = router;