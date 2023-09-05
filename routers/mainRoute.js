const express = require('express');

const router = express.Router();

const {HomePage, Registration, Login} = require('../controllers/mainController.js');

router.route('/').get(HomePage).post(Registration);
router.route('/login').post(Login);

module.exports = router;