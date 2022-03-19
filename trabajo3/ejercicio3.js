class Matematica {
    constructor(entero1_params, entero2_params) {
        this.entero1 = entero1_params;
        this.entero2 = entero2_params;
    }

    sumar() {
        let suma = this.entero1 + this.entero2
        return console.log("La suma de los numeros es : " + suma)
    }

    fibonacci(numero) {
        let b = 1;
        for (let i = 0; i <= numero; i++) {
            let next_nun = i + b;
            b = next_nun;
        }
        return console.log(b)
    }

    divisor() {
        if (this.entero1 % this.entero2 == 0) {
            console.log("El residuo del numero es 0")
        } else {
            console.log("El residuo es diferente de 0")
        }
    }

    numeroPrimo(numero) {
        let  j = 2;
        for (let i = 2; i < numero; i++) {
            for (; j < numero; j++) {
                if (j % i == 0 && (i == j || i == 1)) {
                    console.log(j);
                }
            }
        }
    }

}
let a = new Matematica(1, 2);
