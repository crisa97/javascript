//pila
function PilaStack() {
    this.elementos = [];
    const dictionary = new Map();

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
    this.MayorDeEdad = function () {
        let mayor = [];
        for (let dato in this.elementos.reverse()) {
            //console.log(this.elementos[dato].edad)
            console.log(this.elementos[dato])
            /*if(this.elementos[dato.edad] > this.elemento[dato.edad]){
                mayor.push(this.elementos[dato.edad]);
            }*/
        }
        return mayor;
    }
}
///cola
function ColaFila() {
    this.elementos = {};
    this.primero = 0;
    this.final = 0;


    this.encolar = function (info) {
        this.elementos[this.final] = info;
        this.final++;
    }

    this.desencolar = function () {
        if (this.primero == this.fina) {
            return null;
        }
        const info = this.elementos[this.primero];
        delete this.elementos[this.primero];
        this.primero++;
    }

    this.tamañoFila = function () {
        return this.final - this.primero;
    }

    this.estaVacia = function () {
        if (this.tamañoFila() === 0) {
            return true;
        } else {
            return false;
        }
    }

    this.verSiguiente = function () {
        if (this.tamañoFila() === 0) {
            return null;
        }
        return this.elementos[this.primero];
    }
    this.imprimir = function () {
        if (this.tamañoFila() === 0) {
            return null;
        }
    }
    this.MayorDeEdad = function () {
        let mayor = [];
        for (let dato in this.elementos) {
            console.log(this.elementos[dato]);
        }
        return mayor;
    }

}
const pila = new PilaStack();
pila.insertar({ nombre: "Armando", edad: 45 });
pila.encolar({nombre: "prube", edad: 50});
const cola = new ColaFila();
cola.encolar({ nombre: "Armando", edad: 45 });
cola.encolar({nombre: "prube", edad: 50});