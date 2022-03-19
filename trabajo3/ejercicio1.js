/*
let person = {
    nombre: "Cristhian",
    edad: 25,
    cedula: 1053856233,

    mostrar: function(){
        return `Datos ${this.nombre} ${this.edad} ${this.cedula}`;
   }
   es_mayor_de_edad: function(){
       if (this.edad >= 18){
        return console.log("La persona es mayor de edad" + true)
       }else{
        return console.log("La persona es mayor de edad" + false)
       }
   }
}
*/

class Persona{
    constructor(nombre_params, edad_params, cedula_params){
        this.nombre = nombre_params;
        this.edad = edad_params;
        this.cedula = cedula_params;
        return  console.log("se creo una persona" + this.nombre);
    }
    mostar() {
        return `El nombre es : ${this.nombre} la edad es: ${this.edad} el numero de la cedula es:${this.cedula}`;
   }
   es_mayor_de_edad(){
       if (this.edad >= 18){
        return console.log("La persona es mayor de edad" + " " + true)
       }else{
        return console.log("La persona es mayor de edad" + " " + false)
       }

   }
}
persona1 = new Persona();