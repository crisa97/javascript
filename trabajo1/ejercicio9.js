let str = prompt("ingrese un texto : ");
let arr = str.split('');
console.log(arr);
console.log("Su texto inicia con la letra : ", arr[0]);
console.log("Ingrese un numero menor a : ", arr.length);
let numero = prompt("ingrese un numero : ");
let posicion = numero.split('');
console.log("numero ingresado : ", numero);
console.log(arr[numero]);