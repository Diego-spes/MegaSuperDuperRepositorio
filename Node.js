const http = require("http");
const host = 'localhost';
const port = 8000;
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("file:///C:/Users/User/MegaSuperDuperRepositorio/Laboratorio1.html");
};