function Calc(value){
    this.value = value;

    this.loadNumber = () => {
        if(this.value != undefined){
            return this.value;   
        } else {
            return `Error, no se puede leer el valor: ${this.value}`
        };
    };

    this.addNumber = (number) => {
        this.result;
        return this.result = this.value += number;
    };

    this.substractNumber = (number) => {
       return this.result -= number; 
    };

    this.multiplyNumber = (number) => {
        return this.result *= number;
    };

    this.currentValue = () => {
        if (this.result != undefined) {
            return `Valor actual: ${this.result}`
        } else if (this.result === 0) {
            return `Valor actual: ${this.result}`
        } else {
            return this.loadNumber();
        }
    };
}
