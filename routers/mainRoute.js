const express = require('express');

const router = express.Router();

const {HomePage, Registration, Login, Logout} = require('../controllers/mainController.js');

router.route('/').get(HomePage).post(Registration);
router.route('/login').post(Login);
router.route('/logout').post(Logout);

module.exports = router;