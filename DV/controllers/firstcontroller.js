const path = require('path');
const saludo = require('../models/firstmodel');

exports.resendiz = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'Mipagina.ejs'));
};
