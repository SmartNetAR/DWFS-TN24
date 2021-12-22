
const express = require('express');
const userController = require('../controllers');
const router = express.Router();

router.get('/profiles/show', userController.showProfile);
router.get('/profiles/save', userController.saveProfile);

module.exports = router;
