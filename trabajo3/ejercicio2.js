/*async  class Banco {
    cuenta(cuenta_params) {
        this.titular = cuenta_params;
        this.cantidad = 0;
    }
    mostar() {
        return `El nombre del titular es : ${this.titular} \nLa cantidad que tiene en la cuenta es: ${this.cantidad}`;
    }
    ingresar(nuevaCantidad){
        if( nuevaCantidad > 0){
            this.cantidadTotal = cantidad1 + this.cantidad;
            return `El nombre del titular es : ${this.titular} \nLa cantidad que tiene en la cuenta es: ${this.cantidadTotal}`;
        }else{
            return console.log("Se debe ingresar una cantidad positiva");
        }
    }
    retirar(retiar){
        if(this.cantidadTotal > 0){
            this.retiarMonto = this.cantidadTotal - retiar;
            return console.log("La transacion fue exitosa");
        }else{
            return console.log("El monto arretiar no esta disponible");
        }
        
    }

}*/
function Cuenta(titular_ingresado, cantidad_ingresada){
    this.titular = titular_ingresado;
    this.cantidad = cantidad_ingresada;
    this.mostrar = function(){
      return `la titular ${this.titular} tiene en su cuenta saldo a favor de : ${this.cantidad}`
    }
    this.retirar = function(valor){
      if(valor <= this.cantidad){
        this.cantidad = this.cantidad - valor
        //return `${this.titular} retiraste ${valor} y tu saldo actual es de: ${this.cantidad}`
        return this.mostrar();
      }else{
        return `Error el valor requerido excede el cupo de tu cuenta: ${this.titular}`
      }
    }
  }
  
  var cuenta_uno = new Cuenta("Karen", 10000000)
  var cuenta_dos = new Cuenta("Carlos", 10000000)