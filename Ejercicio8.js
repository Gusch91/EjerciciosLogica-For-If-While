/* 8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde.
El número no puede ser negativo ni tener más de 8 dígitos.
La posición de la letra es el resultado del módulo del número introducido entre 23
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; */



const LETRAS=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"]
let numDni=prompt("ingrese numero de DNI");
let posicion=0;


if (numDni.length <= 8 && parseInt(numDni)>0){

    posicion=posicion+((parseInt(numDni))%23);
    
    document.write(`El dni ${numDni} pertenece a la letra ${LETRAS[posicion]}`);
}else {
    document.write("ingrese un nro menor a 8 digitos y mayor a cero")

}
