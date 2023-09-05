const express = require('express');

const router = express.Router();

const HomePage = require('../controllers/mainController.js');

router.route('/').get(HomePage);

module.exports = router;