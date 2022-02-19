let numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let fecha = prompt("Ingrese Una fecha formada por 8 numeros (DDMMAAAA):" )
let fechaI = fecha.split('')
if(fecha == parseInt(fecha)){
    if(fechaI.length == 8){
    console.log("Fecha en formato DDMMAAAA:", fecha)
    console.log(fechaI[0],fechaI[1],"/",fechaI[2],fechaI[3],"/",fechaI[4],fechaI[5],
                    fechaI[6],fechaI[7])
    //console.log(numeros)
    }else{
        console.log("Tu numero es mayor o menor a 8 :", fecha)
    }
}else{
    console.log("Escribiste una letra")
}