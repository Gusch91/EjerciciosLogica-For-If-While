/* 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad. */

let num=parseInt(prompt("ingrese un nro entero mayor que 1"));
let acum=1;
let mult=1;

if (mult>=1){
    while(num!=mult){
        acum=acum+(mult*acum);
        mult+=1;
    }
}
document.write(`el factorial de ${num} es ${acum}`);
