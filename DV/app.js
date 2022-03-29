const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const misRutas = require('./routes/routes.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

app.set('views',__dirname + '/views');

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: 'ñlknaeañco3pom4ñi3jrcñlawjomxñi3iq3mc4rsejf0438cnf83h4cknh43ui',
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));
app.use('/users', misRutas);
//ruta del login
app.use('/Login', (request, response, next) => {
    response.render("Login.ejs");
});
//ruta del Signup
app.use('/Signup', (request, response, next) => {
    response.render("SignUp.ejs");
});
//ruta de la pagina de inicio
app.use('/Home', (request, response, next) => {
    response.render("Mipagina.ejs");
});

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Error 404
app.use((request, response, next) => {
    response.status(404).render("Error404"); //Manda la respuesta
});
app.listen(3000);
