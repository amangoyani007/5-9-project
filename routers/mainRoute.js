const express = require('express');

const router = express.Router();

const {HomePage, Registration} = require('../controllers/mainController.js');

router.route('/').get(HomePage).post(Registration);

module.exports = router;