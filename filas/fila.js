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

        let respuesta = '';

        for (let contador = this.primero; contador < this.final; contador++) {
            respuesta += this.elementos[contador] + " ";
        }
        return respuesta;
    }
    this.vaciarCola = function(){
        while (!this.estaVacia()){
            this.desencolar();
        }
    }
}
