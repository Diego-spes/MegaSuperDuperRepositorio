const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/UserController');
const isAuth = require('../Util/isAuth.js');
//Login
router.get('/Login', userController.get_login);
router.post('/Login', userController.post_login);
router.get('/', isAuth, userController.root);
//logout
router.get('/Logout', userController.logout);
//signup
router.get('/Signup', userController.get_signup);
router.post('/Signup', userController.post_signup);
//Pagina principal
router.use('/Home',isAuth, userController.get_Home)
//imagenes
router.use('/imagenes',isAuth, userController.post_image);
module.exports = router;
