function triangulo() {
    let lado1 = prompt("ingrese el angulo 1: ");
    let lado2 = prompt("ingrese el angulo 2: ");
    let lado3 = prompt("ingrese el angulo 3: ");
    let suma = parseInt(lado1) + parseInt(lado2) + parseInt(lado3);
    if (suma == 180) {
        window.alert("El tirangulo es valido")
    } else {
        window.alert("El tirangulo no es valido")
    }
}
triangulo();