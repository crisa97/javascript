var numero = 2;

console.log(validarNumero(numero));

//validar si un numero es perfecto
function validarNumero(numero){
    let divisores = getDivisores(numero);
    let sumatoria = 0;
    for (let i=0; i < divisores.length;i++){
        sumatoria = sumatoria + divisores[i];
    }
    if (sumatoria == numero){
        console.log(divisores);
        return true;
    }
    return false;
}

//obtener divisores
function getDivisores(numero){
    let divisores=[];
    for (let i=1;i< numero;i++){
        if (numero%i == 0){
            divisores.push(i);
        }        
    }
    return divisores;
}
