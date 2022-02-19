let edad = prompt("ingrese  su edad: ");
let articulo = prompt("ingrese  numeros de articulos comprados: ");

if (edad >= 18 & articulo > 1) {
    console.log("Tu edad es: " + edad);
    console.log("Los articulos comprados son :" + articulo);
    console.log("Es mayor de edad: " + true)
    console.log("Compro mas de un articulo: " + true)
} else {
    console.log("Tu edad es: " + edad);
    console.log("Los articulos comprados son :" + articulo);
    console.log("Es mayor de edad: " + false)
    console.log("Compro mas de un articulo: " + false)
}
false