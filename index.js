const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;
const mensajeCantidad = "La cantidad de caracteres de la frase es: " + cantidad;
console.log(mensajeCantidad);
const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minMay = fraseMinusculas + " " + fraseMayusculas;
console.log(minMay);
