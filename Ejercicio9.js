/* 9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra. */

let palabra=(prompt("ingrese una palabra").toLowerCase());
let vocales=0;
let consonantes=0;



for (i=0;i<palabra.length;i++){
    if (palabra[i]=="a"|| palabra[i]=="e"|| palabra[i]=="i"|| palabra[i]=="o"|| palabra[i]=="u"){
        vocales=vocales+1;
     } else{
         consonantes=consonantes+1;
     }
    }
document.write(`La palabra ${palabra} mide ${palabra.length} caracteres y tiene ${vocales} vocales y ${consonantes} consonantes`);
