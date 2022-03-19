class Contador {
    constructor(valor) {
        this.valor = valor;
        this.hystory;
    }

    reset() {
        this.hystory = "reset()";
        return this.valor = 0;
    }

    inc() {
        this.hystory = "inc()";
        this.valor = this.valor + 1;
    }

    dec() {
        this.hystory = "dec()"
        this.valor = this.valor  - 1;
    }

    valorActual(){
        this.hystory = "valorActual()"
        return this.valor = this.valor;
    }

    recontarString(){
        if(this.hystory == "reset()"){
            return console.log("El ultimo comnado ereset()");
        }else if(this.hystory == "inc()"){
            return console.log("El ultimo comnado inc()");
        }else if(this.hystory == "dec()"){
            return console.log("El ultimo comnado dec()"); 
        }else{
            return console.log("El ultimo comnado valorActual()");
        }
    }
}