var arregloBase = [1,2,3,4,5,6,7,8,9,10,11,12,13];

console.log(dividirArreglo(arregloBase));

function dividirArreglo(arreglo){
    let tamanioUno = 0;
    let tamanioDos = 0;

    let arregloUno = [];
    let arregloDos = [];
    
    if (arreglo.length <= 1){
        tamanioUno = arreglo.length;
        tamanioDos = 0;
    }else{
        tamanioUno = Math.round(arreglo.length / 2);
        tamanioDos = arreglo.length - tamanioUno;
    }
    

    console.log(arreglo.length);
    console.log(tamanioUno);
    console.log(tamanioDos);

    for (let i= 0; i < arreglo.length; i++){
        if (i < tamanioUno){
            arregloUno.push(arreglo[i]);
        }else{
            arregloDos.push(arreglo[i]);
        }
    }

    console.log(arregloUno);
    console.log(arregloDos);
}