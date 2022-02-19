let numero1 = prompt("ingrese el primer numero : ");
let numero2 = prompt("ingrese el segundo numero :");

console.log("El primer numeros es: " + numero1);
console.log("El segundo numeros es: " + numero2);

if (parseInt(numero1) > parseInt(numero2)) {
    console.log("El numero mayor es: " + numero1);
} else {
    console.log("El numero mayor es: " + numero2);
}