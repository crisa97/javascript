function chimuela() {
    this.energy;

    this.remainingEnergy = () => {
        if (this.energy <= 0){
            return "La Dragón no tiene energía en este momento"
        } return `el dragón tiene: ${this.energy} joules de energia`;
    };


    this.hasEaten = (g) => {
        return (this.energy === undefined) ?  
            this.energy = Math.floor((g / 1000) * 4 / 0.001) : this.energy += Math.floor((g / 1000) * 4 / 0.001);
    };


    this.hasFlew = (km) => {
        this.energy = this.energy - km;
        return this.energy;
    };

    this.hasLanded = (km) => {
        this.energy = this.energy - km;
        return this.energy;
    };

    this.animicState = () => {
        if(this.energy <= 50) {
            return `el dragon esta esta debil, ${this.remainingEnergy()}`;
        } else if (this.energy >= 50 && this.energy <= 500) {
            return `el dragon esta normal, ${this.remainingEnergy()}`;
        } else if (this.energy >= 500 && this.energy <= 1000) {
            return `el dragon esta feliz, ${this.remainingEnergy()} !!!`;
        } else {
            return `el dragon esta fuera de control, ${this.remainingEnergy()}`
        };
    }

    this.sheWantsToFly = () => {

        this.flew = (this.energy / 5);

        if(this.energy >= 300 && this.energy <= 400 && this.energy % 20 === 0){
            this.flew += 25;
            return `el dragon quiere volar : ${this.flew} Km`;
        } else {
            return `el dragon quiero volar ${this.flew} Km`;
        };
    }
};