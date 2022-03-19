class vehiculo {
    constructor(cambioIngresado, rpmIngresado) {
      this.cambio = cambioIngresado;
      this.rpm = rpmIngresado;  
    }
    
    arrancar(){
        this.cambio = 1;
        this.rpm = 500;
    }

    subirCambio(){
        if (this.cambio >= 0 || this.cambio <=4 ){
             this.cambio = this.cambio + 1;
        }
    }

    bajarCambio(){
        if (this.cambio >= 1 || this.cambio <=5 ){
             this.cambio = this.cambio - 1;
        }
    }

    subirRPM(rpmParam){
        if ((this.rpm + rpmParam) <= 5000){
            this.rpm = this.rpm + rpmParam;
        }
    }

    bajarRPM(rpmParam){
        if ((this.rpm - rpmParam) >= 0){
            this.rpm = this.rpm - rpmParam;
        }
    }

    velocidad(){
        return (this.rpm /100)*(0.5 + (this.cambio/2))
    }

    consumo(){
        let consumoInicial = 0.05;
        //Variaciones de consumo
        if (this.rpm > 3000){
            return consumoInicial *
                this.coeficienteRPM() * 
                this.coeficienteCambio();
        }
        return consumoInicial;
    }

    coeficienteRPM(){
        return (this.rpm - 2500) /500;
    }

    coeficienteCambio(){
        if (this.cambio == 1){
            return 3;
        }
        if (this.cambio == 2){
            return 2;
        }
        return 1;
    }
}