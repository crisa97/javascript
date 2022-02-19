var color = prompt("Escriba el color: ");


console.log(validarColor(color));

function validarColor(color) {
    let arreglo = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];    
    for (let i=0; i < 6 ;i++){
        if (arreglo[i] == color){
            return true;
        }
    }
    return false;
}