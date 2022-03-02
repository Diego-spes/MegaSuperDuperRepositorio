const http = require('htpp');
function onRequest(request, response){
  console.log("peticion recibida");
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write("Hola mundo");
  response.end();
}
var server = http.createServer(onRequest);
Listen.server(3000);
