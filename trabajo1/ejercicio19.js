let vocales = ['a', 'e', 'i','o', 'u'];
console.log(vocales)
let letra = prompt("Ingrese una letra: ");
if(letra.length == 1 ){
    console.log("letra:", letra)
    letras = vocales.includes(letra)
    if(letras == true){
        console.log("Es vocal")
    }else{
        console.log("No es vocal")
    }
}else{
    console.log('Nose puede procesar el dato')
}