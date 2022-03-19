class Contraseña {

    constructor(longitud) {
        this.longitud = longitud
        this.password = ''
    }

    generarPassword() {
        let possibles = 'qwrtyuiopasdfghjklñzxcvbnmQWRTYUIOPASDFGHJKLÑZXCVBNM+*[]_-0123456789';
        let password = [];
        for (let i = 0; i < this.longitud; i++) {
            password.push(possibles[parseInt(Math.random() * possibles.length)])
        }
        this.password = password.join('')
        console.log(this.password);
    }

    carateres() {
        let letras = 0;
        let numeros = 0;
        let especiales = 0;

        for (let i = 0; i < this.password.length; i++) {
            const ascii = this.password.charCodeAt(i)
            if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122) {
                letras += 1;
            } else if (ascii >= 48 && ascii <= 57) {
                numeros += 1;
            } else {
                especiales += 1;
            }
        }
        return { letras, numeros, especiales }
    }
    contarCarateres() {
        let minusculas = 0;
        let mayusculas = 0;
        let numeros = 0;

        for (let i = 0; i < this.password.length; i++) {
            const ascii = this.password.charCodeAt(i);
            if (ascii >= 97 && ascii <= 122) {
                minusculas += 1
            } else if (ascii >= 65 && ascii <= 90) {
                mayusculas += 1
            } else if (ascii >= 48 && ascii <= 57) {
                numeros += 1;
            }
        }
        return { minusculas, mayusculas, numeros}
    }
    seguridadPaswword() {
        const cantidadCarateres = this.carateres();
        if (cantidadCarateres.letras + cantidadCarateres.numeros <= 6) {
            return console.log("la contraseña es debil")
        } else if (cantidadCarateres.letras + cantidadCarateres.numeros >= 7 && cantidadCarateres.letras + cantidadCarateres.numeros <= 10) {
            return console.log("la contraseña es media")
        } else if (cantidadCarateres.letras + cantidadCarateres.especiales >= 11 && cantidadCarateres.letras + cantidadCarateres.especiales <= 20) {
            return console.log("la contraseña es fuerte")
        }
        
    }
    esFuerte() {
        const cantidadCarateres = this.contarCarateres(i)
        if (cantidadCarateres.mayusculas > 2 && cantidadCarateres.minusculas > 1 && cantidadCarateres.numeros > 5) {
            return true
        } else {
            return false
        }
    }
}

const contra = new Contraseña(20)

contra.generarPassword()
console.log(contra.seguridadPaswword())