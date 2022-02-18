///variables, constantes, consola
var personaje = "Mario";
console.log(personaje);
console.warn(personaje);
console.info(personaje);
console.error(personaje);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
//El siguiente mensaje madaría un error haciendo que el programa crashee
///console.log(i);
/// var y let sirven para declarar variables solo que var hace la variable globar y let hace que la variable solo viva dentro del codigo en el que fue declarado
alert("Esto es una alerta");

const nombre = prompt("como te llamas?");
console.log(nombre);
//Funciones
function saltar(){
  console.log("Mario Salta");
}
saltar();

//Arreglos
const personajes =["Luigi"];
personajes.push("Mario")
console.log(personajes);
