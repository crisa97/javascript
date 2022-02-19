var dimension = 5;

var returnedArray = [];
for(var i=0; i<dimension; i++) {
    returnedArray[i] = getArray(dimension, i);
} 

console.log(returnedArray);

function getArray(dimension, fila) {
    let arreglo = [];    
    for (let i=0; i < dimension ;i++){
       if (dimension > 2){
           if (fila == 0 || fila == dimension -1){
              arreglo.push("*");    
           }else{
               if (fila > 0 && fila < dimension){
                   if(i%2==0){
                       arreglo.push("*");    
                   }else{
                       arreglo.push(" ");    
                   }
               }
           }
       } else{
           arreglo.push("*");    
       }       
    }
    return arreglo;
}

