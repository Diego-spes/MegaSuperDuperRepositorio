
const numero = prompt("Dame un numero por favor");
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
var num1 = random(0,20);
var num2 = random(0,20);
var resultado = num1+num2;
var inicio = new Date;
inicio.getSeconds();
const respuesta = prompt("Cual es el resultado de "+ num1+ "+"+ num2+ "?");
var final = new Date;
final.getSeconds();
var segundos = final-inicio;
if (respuesta == resultado){
  alert("Excelente!! Acertaste y solo tardaste " + segundos+ " Mili Segundos :D Yaiii! nuevo logro desbloqueado ^.^");
}
else {
  alert("Que mal. No es la respuesta correcta. mejor suerte para la proxima pero oye tardaste "+ segundos+ " Mili Segundos :D Yaiii! nuevo logro desbloqueado ^.^" );
}


document.write("<p class = Preguntas> Del 0 al numero ingresado </p>");
for (let i = 0; i <= numero; i++) {
  document.write("<p class = Answers>",i,"</p>");
}

document.write("<p class = Preguntas> Los cuadrados del 0 al numero ingresado </p>");
for (let i = 0; i <= numero; i++) {
  document.write("<p class = Answers>",i*i,"</p>");
}

document.write("<p class = Preguntas> Los cubos del 0 al numero ingresado </p>");
for (let i = 0; i <= numero; i++) {
  document.write("<p class = Answers>",i*i*i,"</p>");
}
const arreglo = new Array(0,0,5,0,-9,-6,7);
function contador(miArreglo){

  var ceros = 0;
  var negativos = 0;
  var mayoresACero = 0;
  for (let i = 0; i<= miArreglo.length;i++){
    if(miArreglo[i]==0){
      ceros++;
    }
    else if (miArreglo[i]<0){
      negativos++;
    }
    else if (miArreglo[i]>0){
      mayoresACero++;
    }
  }
  document.write("<p class = Preguntas> El numero de 0's en el arreglo del codigo son: </p>");
  document.write("<p class = Answers>",ceros,"</p>");
  document.write("<p class = Preguntas> El numero de numeros negativos en el arreglo del codigo son: </p>");
  document.write("<p class = Answers>",negativos,"</p>");
  document.write("<p class = Preguntas> El numero de numeros mayores a cero en el arreglo del codigo son: </p>");
  document.write("<p class = Answers>",mayoresACero,"</p>");
}
contador(arreglo);


function promedios(otroArreglo){
  var arreglo = [[1,3],[6,4]];
  var suma = 0;
  var promedio = 0;
  for(var i=0; i< otroArreglo.length; i++) {
    var x = otroArreglo[i];
    for(var j=0; j< x.length; j++) {
      suma = suma + x[j];
    }
   }
   document.write("<p class = Preguntas> promedio del arreglo del codigo: </p>");
   promedio = suma/2;
   document.write("<p class = Answers>",promedio,"</p>");
}
promedios(arreglo);

document.write("<p class = Preguntas> Del numero ingresado hasta -10 digitos </p>");
for (let i = numero; i >= -10; i--) {
  document.write("<p class = Answers>",i,"</p>");
}
document.write("<h1>Problema a mi eleccion para resolver con JavaScript</h1>");
document.write("<p id=Chase>Este es José ( ╹▽╹ ). </p>");
document.write("<p id=Chase>José quiere andar con María (◕ᴗ◕✿) pero María es la inteligente del salón y solo sale con chicos inteligentes. Como José es un soberano tarado pues María ni lo pela. Obsesionado por obtener el amorx de María.</p>");
document.write("<p id=Chase>José invoca al demonio azteca tepartolacaratl para hacer un pacto con él y ser el we más inteligente del mundo pero tepartolacaratl hace magia más no milagros así que como es bien mañoso te pide a ti que tires paro y le hagas un programa en JavaScript para que saque los cuadrados de los números porque claro eso fue lo que le pidió José (￣ヘ￣) maldito tepartolacaratl ni le da lo que le pide el José</p>");
document.write("<p id=Chase>Te niegas pero luego tepartolacaratl te recuerda que una vez te tiro paro para pasar la materia de Ricardo en análisis de software así que de mala gana aceptas (ー_ー゛)</p>");
document.write("<p id=Chase>Ademas de demonio chantajista y estafador</p>");


 function numeros(num){
   this.num = num;
   this.sac_cuadrado = sacar_cuadrado(num);
   this.tablamulti = tabla_multiplicar(num)
 }

 function tabla_multiplicar(num){
   document.write("<p class = Preguntas> La tabla de multiplicar del numero que hay en el codigo  </p>");
   for( let i =0; i<= 10; i++){
     document.write("<p class = Answers>",i*num,"</p>");
   }
 }

 function sacar_cuadrado(num){
   document.write("<p class = Preguntas> El cuadrado del numero que hay en el codigo  </p>");
   document.write("<p class = Answers>",num*num,"</p>");
 }

var numeros1 = new numeros(5);
numeros1.sac_cuadrado(num);
numeros1.tablamulti(num);
