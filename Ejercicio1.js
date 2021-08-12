/* 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene 
tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings */

let nombre=prompt("ingrese su nombre");
let edad=prompt("ingrese su edad");

document.write(`Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${parseInt(edad)+1} años`);
