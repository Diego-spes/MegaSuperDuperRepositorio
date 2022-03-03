
const http = require('http');

const server = http.createServer( (request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Hi!</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Hola desde el servidor local</h1>');
        response.write('<main>');
        response.write('<h2>Aquí dejo mi url a mi pagina donde tengo todos los laboratorios</h2>');
        response.write('<a target="_blank" href="https:/Users/User/MegaSuperDuperRepositorio/Labs.html"> https:/Users/User/MegaSuperDuperRepositorio/Labs.html</a>');
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>UPS | Page not found</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>La página '+ request.url +' no se encontró</h1>');
        response.write('</body>');
        response.end();
    }
});

server.listen(3000);
