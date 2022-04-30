function PilaStack() {

    this.elementos = [];

    this.insertar = function (elemento) {
        this.elementos.push(elemento);
    }

    this.extraer = function () {
        const ultimo = this.elementos[this.elementos.length - 1];
        this.elementos.pop();
        return ultimo;
    };

    this.longitud = function () {
        return this.elementos.length;
    }
    this.ver_proximo = function () {
        return this.elementos[this.elementos.length - 1];
    }
    this.ver_elementos = function () {
        return this.elementos;
    }
    this.vacia = function () {
        if (this.elementos.length == 0) {
            return true;
        } else {
            return false;
        }
    }
    this.vaciarFila = function () {
        while (!this.vacia()) {
            this.extraer();
        }
    }
    this.IngresarTamano = function (tamano) {
        for (i = 0; i < tamano; i++) {
            let elemento = prompt("valor : ");

            const elementoConvertido = this.getElementConverted(elemento);
            this.insertar(elementoConvertido)
        }
    }
    this.getElementConverted = function (elemento) {
        try {
            const converted = JSON.parse(elemento)
            return converted
        } catch (error) {
            const converted2 = Number.parseInt(elemento)
            return Number.isNaN(converted2) ? elemento : converted2
        }

    }
    this.isNumber = function (elemento) {
        try {
            const converted = Number.parseInt(elemento)
            return typeof converted === 'number'
        } catch (error) {
            return null;
        }

    }
    this.ParImpar = function () {

        for (let propiedad in this.elementos.reverse()) {
            if (!isNaN(this.elementos[propiedad])) {
                if (parseInt(this.elementos[propiedad]) % 2 == 0) {
                    console.log('el numero ' + this.elementos[propiedad] + ' es par ' + true);
                } else {
                    console.log('el numero ' + this.elementos[propiedad] + ' es par ' + false);
                }
            }
        }

    }
    this.sumar = function () {
        let resul = 0;
        for (let sum in this.elementos.reverse()) {
            if (!isNaN(this.elementos[sum])) {
                resul = parseInt(this.elementos[sum]) + resul;
            }
        }
        return resul;
    }

    this.numPar = function () {
        const arryPar = [];
        for (let par in this.elementos.reverse()) {
            if (!isNaN(this.elementos[par])) {
                if (parseInt(this.elementos[par]) % 2 === 0) {
                    arryPar.push(this.elementos[par]);
                }
            }
        }
        return arryPar;
    }

    this.numImpar = function () {
        const arrayImpar = [];
        let resulImpar = '';
        for (let impar in this.elementos.reverse()) {
            if (!isNaN(this.elementos[impar])) {
                if (!(parseInt(this.elementos[impar]) % 2 == 0)) {
                    resulImpar = arrayImpar.push(this.elementos[impar]);
                }
            }
        }
        return arrayImpar
    }

    this.countData = function () {
        let number = 0;
        let letras = 0;
        let array = 0;
        for (let count in this.elementos) {
            if (Array.isArray(this.elementos[count])) {
                array += 1
            }
            else if (!isNaN(this.elementos[count])) {
                number += 1;
            } else if (typeof (this.elementos[count]) === 'string') {
                letras += 1;
            }
        }
        console.log(`El total de numeros es : ${number} \nEl total de letras es : ${letras} \nEl total de array es : ${array}`)
    }

    this.eliminarNombre = function () {
        //console.log(this.elementos)

        for (let eliminar in this.elementos) {
            //console.log(this.elementos[eliminar])

        }

        let busqueda = prompt('Escriba el elemento a eliminar ')
        //console.log('Elemento busado', busqueda)

        if (this.elementos.includes(busqueda) == true || this.elementos.includes(parseInt(busqueda)) == true) {
            let index = this.elementos.indexOf(busqueda)
            let indexP = this.elementos.indexOf(parseInt(busqueda))
            //console.log('letra', index)
            //console.log('Numero', indexP)
            if (index > -1) {
                this.elementos.splice(index, 1)
                //this.elementos.splice(indexP, 1)
                //console.log(this.elementos)
            }

            if (indexP > -1) {
                this.elementos.splice(indexP, 1)
                //console.log(this.elementos)
            }

        }
        //console.log(this.elementos.includes(busqueda));
    }

    this.elimarIndice = function () {
        let indice = Object.keys(this.elementos);

        console.log(indice)

        //console.log(indice.includes('1'))


        let busquedaIndice = prompt('Escriba el indice a eliminar ')

        if (indice.includes(busquedaIndice) == true) {
            indice.splice(keys, 1)
            console.log('I', indice)
        } else {
            console.log('EL indice no existe')
        }

    }

    this.atenderPila = function () {
        while (!this.vacia()) {
            let indice = Object.keys(this.elementos);

            console.log(indice)

            let busquedaIndice = prompt('Escriba el indice a eliminar ')

            if (indice.includes(busquedaIndice) == true) {
                indice.splice(keys, this.extraer())
                console.log('I', indice)
            } else {
                console.log('EL indice no existe')
            }
        }
    }
}

let pila = new PilaStack();
pila.IngresarTamano(3);
/*pila.ParImpar();
pila.sumar();
pila.numPar();
pila.numImpar();*/
//pila.countData();
//pila.elimarIndice();