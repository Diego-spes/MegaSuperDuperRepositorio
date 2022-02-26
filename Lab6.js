
function validarformulario(){
  let txt_confirmar=document.getElementById("txt_confirmar").value;
  let txt_contraseña=document.getElementById("txt_contraseña").value;
  if(txt_contraseña == "" & txt_confirmar==""){
    window.alert("No ingresaste ninguna contraseña");
  }
  else if (txt_contraseña == "" || txt_confirmar=="") {
    window.alert("No llenaste un espacio");
  }
  else if (txt_contraseña == txt_confirmar) {
    window.alert("Las contraseñas son iguales :) ")
  }
  else {
    window.alert("Las contraseñas son distintas, por favor asegurate que sean iguales");
  }
}

function agregar(){
  let label_tomioka = document.getElementById("tomioka");
  label_tomioka.innerHTML = 1;
  let label_tanjiro = document.getElementById("tanjiro");
  label_tanjiro.innerHTML = 1;
  let label_rengoku = document.getElementById("rengoku");
  label_rengoku.innerHTML = 1;
  label_compra = document.getElementById("compra");
  label_compra.innerHTML = 35 + "Dolares con IVA incluido"
}

function eliminar(){
  let label_tomioka = document.getElementById("tomioka");
  label_tomioka.innerHTML = 0;
  let label_tanjiro = document.getElementById("tanjiro");
  label_tanjiro.innerHTML = 0;
  let label_rengoku = document.getElementById("rengoku");
  label_rengoku.innerHTML = 0;
  label_compra = document.getElementById("compra");
  label_compra.innerHTML = 0 + " Dolares con IVA incluido"

}
