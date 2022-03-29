const express = require('express');
const router = express.Router();
const path = require('path');
const isAuth = require('../controllers/is_auth.js');
const userController = require('../controllers/UserController');

router.get('/Login', userController.get_login);

router.post('/Login', userController.login);

router.get('/Logout', userController.logout);

router.get('/Signup', isAuth, userController.get_signup);

router.post('/Signup', userController.post_signup);

module.exports = router;
