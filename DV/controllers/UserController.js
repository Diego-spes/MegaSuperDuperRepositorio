const path = require('path');
//Controladores
const User = require('../models/Usuario');
const bcrypt = require('bcryptjs');

//Controladores del Login
exports.get_login = (request, response, next) => {
    response.render('Login', {
        username: request.session.username ? request.session.username : '',
        info: ''
    }); 
};

exports.root = (request, response, next) => {
    response.redirect('/users/login'); 
};

exports.post_login =  (request, response, next) => {
  User.findOne(request.body.nombre)
        .then(([rows, fieldData]) => {
            console.log(request.body.nombre)
            if (rows.length < 1) {
                console.log('no existe el usuario')
                return response.redirect('/users/Login');
            }
            const user = new User(rows[0].username, rows[0].password, rows[0].nombre);
            bcrypt.compare(request.body.password, user.password).then(doMatch => {
                    if(doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        request.session.usuario = user.nombre;
                        console.log('Perfecto')
                        return request.session.save(err => {
                            response.redirect('/users/Home');
                        });
                    }
                    console.log('password incorrecto')
                    response.redirect('/users/Login');
                }).catch(err => {
                    response.redirect('/users/login');
                });
        }).catch((err) => {
            console.log(err);
        });
};
// Controladores del Singup
exports.get_signup =  (request, response, next) => {
    response.render('Signup.ejs', {
        usuario: request.session.usuario ? request.session.usuario : '',
    });
};

exports.post_signup =  (request, response, next) => {
  console.log(request.body);
    const nuevo_usuario = new User(request.body.username, request.body.password, request.body.nombre);
    nuevo_usuario.save()
        .then(() => {
            console.log("usuario insertado");
            response.redirect('/Login');
        }).catch((err) => {
            console.log(err);
        });
};
// Controladores de imagenes
exports.post_image =  (request, response, next) => {
    response.render('imagenes.ejs');
};
// Controladores del logout
exports.logout =  (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/Login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

//Controladores de Pagina principal 

exports.get_Home =  (request, response, next) => {
    response.render('Mipagina');
};
