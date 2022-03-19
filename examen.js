class Empresa {
    constructor(nombre, nit, tipo_empresa, empleados, edades, genero, es_cabeza_del_hogar, nomina) {

        this.nombre = prompt("ingrese el nombre completo de la empresa : ");
        this.nit = prompt("ingrese el nit de la empresa : ");

        let lg = this.nit.split('');
        this.tipo_empresa = [this.nit[6], this.nit[7], this.nit[8], this.nit[9]]

    }

    crear_datos_iniciales() {

        let lg = this.nit.length;

        while (this.nombre == '' || this.nit == '' || this.nit.length <= 9) {
            this.nombre = prompt("ingrese el nombre completo de la empresa : ");
            this.nit = prompt("ingrese el nit de la empresa : ");
        }
        console.log("Este es el nombre de la empresa:", this.nombre);
        console.log("Este es el nit de la empresa:", this.nit);

    }

    ingresar_empleado() {

        this.empleados = prompt("ingrese los nombres completos separados por comas(,) : ");
        this.genero = prompt("ingrese los genero (F, M, O), separados por comas(,) : ");
        this.es_cabeza_del_hogar = prompt("Ingrese si true o false si es cabeza de hogar separados por comas(,): ")

        this.empleados = this.empleados.split(',');
        this.genero = this.genero.split(',');
        this.es_cabeza_del_hogar = this.es_cabeza_del_hogar.split(',')

    }

    mujeres() {
        const mujer = [];
        for (let m = 0; m < this.genero.length; m++) {
            if (this.genero[m]== "F") {
                mujer.push(this.empleados[m]);
            }
        }
        return console.log(mujer);

    }

    hombres() {
        const hombre = [];
        for (let h = 0; h < this.genero.length; h++) {
            if (this.genero[h]== "M"){
                hombre.push(this.empleados[h]);
            }
        }
        return console.log(hombre)
    }

    generar_nomina() {
        this.edades = prompt("ingrese las edades separados por comas(,) : ");
        this.empleados = this.edades.split(',');
        const sueldoBase = 1000000;
        const sueldoRecargo = 0;

        if (this.edades >= 20 && this.edades <= 30) {
            sueldoRecargo = sueldoBase + 200000;
            console.log("Ganara $200.000 cop extra al sueldo base" + sueldoRecargo)

        }

        if (this.edades >= 30 && this.edades <= 40) {
            sueldoRecargo = sueldoBase + 400000;
            console.log('Ganara $400.000 cop extra al sueldo base' + sueldoRecargo)

        }

        if (this.edades >= 40 && this.edades <= 50) {
            sueldoRecargo = sueldoBase + 500000;
            console.log('Ganara $500.000 cop extra al sueldo base' + sueldoRecargo)

        }

        if (this.edades >= 50 && this.edade <= 60) {
            sueldoRecargo = sueldoBase + 600000;
            console.log('Ganara $600.00 cop extra al sueldo base' + sueldoRecargo)

        }

        if (this.edades >= 60) {
            sueldoRecargo = sueldoBase + 700000;
            console.log('Ganara $700.000 cop extra al sueldo base' + sueldoRecargo)

        }
        if (this.es_cabeza_del_hogar) {
            sueldoRecargo = sueldoBase + (sueldoBase * 0.30);
            console.log('Ganara el 30% cop extra al sueldo base' + sueldoRecargo)
        }
        if (this.mujeres()) {
            sueldoRecargo = sueldoBase + (sueldoBase * 0.10);
            console.log('Ganara el 10% cop extra al sueldo base' + sueldoRecargo)
        }
    }

}