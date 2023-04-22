//Biblioteca planificacion.js


function abrirSistemas(delay) {
//Si lo desea este código puede modificarse

/*La funcion recibe como parametro un “delay” que es la cantidad de milisegundos que demorará el sistema en abrirse
delay DEBE ser mayor o igual a 3300
*/
  setTimeout( () => { console.log("Puede iniciar el proceso")}, delay);
}

function cerrarSistemas(){
   //No se modifica el código
   console.log("sistemas cerrados de forma segura");
}

function restriccionesSanitarias(restriccion, destino) {
/*Modifique el código para manejar la restricción.
Recuerde que restricción es un entero, por ende lo que está en este código es referencial, sin embargo NO MODIFIQUE ni setTimeout ni el retorno de una promesa. Solo intervenga la función callback de setTimeout*/

  return new Promise((resolve, reject) => {
   setTimeout( () => {
     if(!restriccion) {
       const objReturn = {};
       objReturn.restriccion = true;
       objReturn.status = "Sin restricciones sanitarias a destino: " + destino;
       resolve( objReturn);
     }
     else resolve("Restriccion: Hay restricciones, no podrá ir a ese destino, codigo de restriccion", randomGenerado);
   }, 3353);//randomGenerado es el número que usted genera y que comparado con el parámetro restriccion genera un rechazo.
 })
}

function emiteCertificado(destino) {

  return new Promise((resolve, reject) => {
   setTimeout( () => {
       const objReturn = {};
       objReturn.certificado = true;
       objReturn.status = "Certificado emitido para destino " + destino;
       resolve( objReturn);
     }
     else reject("error en emisión");
   }, 3103);
 })
}
