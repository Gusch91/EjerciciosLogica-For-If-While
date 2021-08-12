*/ 6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. 
Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido */

let acum=0;
let cont=0;

while(acum<50){
    let serie=parseInt(prompt("ingrese un nro"));
    acum+=serie;
    cont++;


}
document.write(`ingresaste ${cont} numeros y la suma de todos ellos es ${acum}`);
