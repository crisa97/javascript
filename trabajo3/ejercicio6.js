class Contador {
    constructor(valor) {
        this.valor = valor;
    }

    reset() {
        return this.valor = 0;
    }

    inc() {
        this.valor = this.valor + 1;
    }

    dec() {
        this.valor = this.valor  - 1;
    }

    valorActual(){
        return this.valor = this.valor;
    }
}