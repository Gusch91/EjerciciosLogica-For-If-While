/* 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" 
si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar */

let num=prompt("ingrese un numero");
let cont=1;

while (cont<=num){
    if(cont%2=="0"){
        document.write(`${cont} es par`+"<hr>");
        cont+=1;
    }else{
        document.write(`${cont} es impar`+"<hr>");
        cont+=1;
    }
}
