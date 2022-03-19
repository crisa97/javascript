class Persona {
    constructor(nombre_params, edad_params, dni_params,sexo_params, peso_params, altura_params) {
        this.nombre = nombre_params;
        this.edad = edad_params;
        this.dni = dni_params;
        this.sexo = sexo_params
        this.peso = peso_params;
        this.altura = altura_params;
    }

    calularLMC() {
        let peso = this.peso / (this.altura) ^ 2;
        if (peso < 20) {
            return console.log("-1");
        } else if (peso >= 20 || peso <= 25) {
            return console.log("0");
        } else {
            return console.log("1");
        }
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            return console.log("La Persona es mayor de edad. " + true)
        } else {
            return console.log("La Persona es mayor de edad. " + false)
        }
    }
    tipoDeSExo() {
        if (this.sexo == "F" || this.sexo == "f") {
            return true
        } else if (this.sexo == "M" || this.sexo == "m") {
            return true
        } else if (this.sexo != "M" || this.sexo != "m" && this.sexo != "F" || this.sexo != "f") {
            return console.log("M")
        }

    }

}