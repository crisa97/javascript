class Nodo {
    constructor(informacion_ingresada, siguiente_ingresado) {
        this.info = informacion_ingresada;
        this.siguiente = siguiente_ingresado;
    }
}

class ListEnlazada {
    constructor() {
        this.cabeza = null;
        this.tamano = 0;
    }

    agregar(informacion) {

        const nuevo_nodo = new Nodo(informacion, null);
        if (this.cabeza === null) {
            this.cabeza = nuevo_nodo;
        } else {

            let nodo_actual = this.cabeza;
            while (nodo_actual.siguiente) {
                nodo_actual = nodo_actual.siguiente;
            }
            nodo_actual.siguiente = nuevo_nodo;
        }
        this.tamano++;
    }

    agregar_en(informacion, posicion) {
        if (posicion < 0 || posicion > this.tamano) {
            return null;
        }
        const nuevo_nodo = new Nodo(informacion, null);
        let nodo_actual = this.cabeza;
        let nodo_anterior;

        if (posicion === 0) {
            nuevo_nodo.siguiente = nodo_actual;
            this.cabeza = nuevo_nodo;
        } else {
            for (let i = 0; i < posicion; i++) {
                nodo_anterior = nodo_actual;
                nodo_actual = nodo_actual.siguiente;
            }

            nuevo_nodo.siguiente = nodo_actual;
            nodo_anterior.siguiente = nuevo_nodo;
        }
        this.tamano++;
    }

    mostrar() {
        if (this.cabeza === null) {
            return "No existe la cabeza no hay mucho que mostrar X-X";
        }

        let nodo_actual = this.cabeza;
        let respuesta = "";
        while (nodo_actual.siguiente) {
            if (typeof (nodo_actual.info) == "string") {
                respuesta += nodo_actual.info += ' -> ';
            } else {
                respuesta += `tipo: ${typeof (nodo_actual.info)} -> `;
            }

            nodo_actual = nodo_actual.siguiente;
        }
        respuesta += 'null o cola';
        return respuesta;
    }

    remover_por(posicion) {
        if (posicion < 0 || posicion > this.tamano) {
            return null;
        }

        let nodo_actual = this.cabeza;
        let nodo_anterior;

        if (posicion === 0) {
            this.cabeza = nodo_actual.siguiente;
        } else {
            for (let i = 0; i < posicion; i++) {
                nodo_anterior = nodo_actual;
                nodo_actual = nodo_actual.siguiente;
            };
            nodo_anterior.siguiente = nodo_actual.siguiente;
        };
        this.tamano--;
        return nodo_actual.info;
    }
    ingresarTamano(tamnoAingreasar) {
        for (let i = 0; i < tamnoAingreasar; i++) {
            let valor = prompt("valor : ");
            const elementoConvertido = this.getElementConverted(valor);
            this.agregar(elementoConvertido);
        }

    }
    getElementConverted(valor) {
        let valor_actual = valor;
        try {
            const converted = JSON.parse(valor_actual)
            return converted
        } catch (error) {
            const converted2 = Number.parseInt(valor_actual)
            return Number.isNaN(converted2) ? valor_actual : converted2
        }
    }
    isNumber() {
        let nodo_actual = this.cabeza;
        try {
            const converted = Number.parseInt(nodo_actual.info)
            return typeof converted === 'number'
        } catch (error) {
            return null;
        }

    }
    ParInpar() {
        let nodo_actual = this.cabeza;
        for (let i = 0; i < this.tamano; i++) {
            if (!isNaN(nodo_actual.info)) {
                if (parseInt(nodo_actual.info) % 2 == 0) {
                    console.log('El numero es par :' + true);
                } else {
                    console.log('El numero es par :' + false);
                }
            }
            nodo_actual = nodo_actual.siguiente;
        }
    }
    sumarElementos() {
        let resul = 0;
        let nodo_actual = this.cabeza;
        for (let i = 0; i < this.tamano; i++) {
            if (!isNaN(nodo_actual.info)) {
                resul = parseInt(nodo_actual.info) + resul
            }
            nodo_actual = nodo_actual.siguiente;
        }
        return resul;
    }
    numPar() {
        const arryPar = [];
        let nodo_actual = this.cabeza;
        for (let i = 0; i < this.tamano; i++) {
            if (!isNaN(nodo_actual.info)) {
                if (parseInt(nodo_actual.info) % 2 == 0) {
                    arryPar.push(nodo_actual.info);
                }
            }
            nodo_actual = nodo_actual.siguiente;
        }
        return arryPar;
    }
    numImpar() {
        const arrayImpar = [];
        let nodo_actual = this.cabeza;
        for (let i = 0; i < this.tamano; i++) {
            if (!isNaN(nodo_actual.info)) {
                if (parseInt(nodo_actual.info) % 2 != 0) {
                    arrayImpar.push(nodo_actual.info);
                }
            }
            nodo_actual = nodo_actual.siguiente;
        }
        return arrayImpar;
    }
    cadenas() {
        let letras = [];
        let nodo_actual = this.cabeza;
        for (let i = 0; i < this.tamano; i++) {
            if (typeof (nodo_actual.info) == "string") {
                letras.push(nodo_actual.info);
            }
            nodo_actual = nodo_actual.siguiente;
        }
        return letras;
    }
    countData() {
        let number = 0;
        let string = 0;
        let array = 0;
        let nodo_actual = this.cabeza;
        for (let i = 0; i < this.tamano; i++) {
            if (Array.isArray(nodo_actual.info)) {
                array += 1;
            } else if (!isNaN(nodo_actual.info)) {
                number += 1;
            } else if (typeof (nodo_actual.info) === 'string') {
                string += 1;
            }
            nodo_actual = nodo_actual.siguiente;
        }
        console.log(`El total de numeros es : ${number} \nEl total de letras es : ${string} \nEl total de array es : ${array}`);
    }
    deleateName() {
        let nodo_actual = this.cabeza;
        let busqueda = prompt('Escriba el elemento a eliminar ');
        for (let i = 0; i < this.tamano; i++) {
            if (nodo_actual.info.includes(busqueda) == true || nodo_actual.info.includes(parseInt(busqueda)) == true) {
                let index = nodo_actual.info.indexOf(busqueda);
                let indexP = nodo_actual.info.indexOf(parseInt(busqueda));
                if (index > -1) {
                    nodo_actual.info.splice(index, 1);
                }else if (indexP > -1) {
                    nodo_actual.info.splice(indexP, 1);
                }
            }
            nodo_actual = nodo_actual.siguiente;
        }
    }

}

const enlazada_1 = new ListEnlazada();
enlazada_1.ingresarTamano(3);
enlazada_1.deleateName();
enlazada_1.tamano();