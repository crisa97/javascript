let suNombre = prompt("Ingrese su nombre: ");
let nombreOtra = prompt("Ingrese el nombre de otra persona:" )
console.log("Tu nombre: ", suNombre)
console.log("Otro nombre: ", nombreOtra)
let letraS = suNombre.split('')
let letraO = nombreOtra.split('')
console.log(letraS)
console.log(letraO)
if(letraS[0] == letraO[0] ||  letraS[letraS.length -1].slice() == letraO[letraO.length -1].slice()){
    console.log("True")
}else{
    console.log("False")
}