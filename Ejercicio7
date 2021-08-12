/* 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos.
Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10,
si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares.
Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares */


let array=[2,7,13,8,18];
let pares=[];
let impares=[];
let num=0;
let multi=0;

for(i=0;i<array.length;i++){
    multi=Math.random() * (10 - 1) + 1; 
    num=Math.round(num+(array[i]*multi));
    console.log(`${array[i]}*${Math.round(multi)}=${num}`);

    if(num%2==0){
        pares.push(num);
    }else{
        impares.push(num);
    }
}
document.write("este es el primer arreglo " + array + "<hr>");
document.write("este es un arreglo de pares " + pares + "<hr>");
document.write("este es un arreglo de impares" + impares + "<hr>");
