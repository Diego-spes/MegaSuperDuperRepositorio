const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const misRutas = require('./routes/routes.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
app.set('view engine', 'ejs');

app.set('views',__dirname + '/views');
app.use(express.static(path.join(__dirname, 'uploads')));



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
        //path.join(__dirname, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const postArchivo = (request, response, next) => {
    const ruta_archivo = request.file.path;
};

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cookieParser());

app.use(session({
    secret: 'ñlknaeañco3pom4ñi3jrcñlawjomxñi3iq3mc4rsejf0438cnf83h4cknh43ui',
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));



app.use('/users', misRutas);
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});
app.use((request, response, next) => {
    response.redirect('/users');
    next();
});
//Error 404
app.listen(3000);
