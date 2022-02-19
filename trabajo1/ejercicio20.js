let numero1 = prompt("ingrese el primer numero : ");
let numero2 = prompt("ingrese el segundo numero :");
let numero3 = prompt("ingrese el segundo numero :");

if (parseInt(numero1) < parseInt(numero2) && parseInt(numero1) < parseInt(numero3)) {
    console.log("El numero menor es: " + numero1)
} else if (parseInt(numero2) < parseInt(numero1) && parseInt(numero2) < parseInt(numero3)) {
    console.log("El numero menor es: " + numero2)
}else if (parseInt(numero3) < parseInt(numero2) && parseInt(numero3) < parseInt(numero1)){
    console.log("El numero menor es: " + numero3)
}