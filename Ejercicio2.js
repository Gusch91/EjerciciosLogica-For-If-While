/* 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo.
En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado) */

let figura=prompt("ingrese la figura de la cual quiere calcular el area: triangulo, rectangulo o circulo");

if (figura=="triangulo"){
    let base=parseInt(prompt("ingrese la dimension de la base en cm"));
    let altura=parseInt(prompt("ingrese la dimension de la altura en cm"));
    let area=(base*altura)/2;
    document.write(`Su triangulo tiene un area de ${area} cm2`);
}
else if (figura=="rectangulo"){
    let base=parseInt(prompt("ingrese la dimension de la base en cm"));
    let altura=parseInt(prompt("ingrese la dimension de la altura en cm"));
    let area=base*altura;
    document.write(`Su rectangulo tiene un area de ${area} cm2`);
}
else if (figura=="circulo"){
    let radio=parseInt(prompt("ingrese el radio de su circulo"));
    let area=Math.PI*(Math.pow(radio,2));
    document.write(`Su circulo tiene un area de ${
        area} cm2`);
}
