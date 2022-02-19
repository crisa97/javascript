var dimension = 3;

var returnedArray = [];
for(var i=0; i<dimension; i++) {
    returnedArray[i] = getArray(dimension);
} 

console.log(returnedArray);

function getArray(tamanio) {
    let arreglo = [];
    
    for (let i=0; i < tamanio ;i++){
       arreglo.push("*");
    }

    return arreglo;
}
