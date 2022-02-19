function numeroMayor() {
    let numero1 = prompt("ingrese el numero 1: ");
    let numero2 = prompt("ingrese el numero 2: ");
    if (parseInt(numero1) > parseInt(numero2)) {
        window.alert("El numero mayor es: " + numero1)
    } else {
        window.alert("El numero mayor es: " + numero2)
    }
}
numeroMayor();