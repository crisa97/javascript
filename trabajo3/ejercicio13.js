class Starship {
    constructor(energy, armor) {
        this.energy = energy || 50;
        this.armor = armor || 5;
     }

    foundAtomicPile(){
        const ATOMICPILE = 25;
        if (this.energy != 100){
            return this.energy += ATOMICPILE;
        } else {
            return this.energy = 100;
        }
    };

    foundShieldArmor() {
        const SHIELDARMOR = 10;
        if(this.armor >= 0 && this.armor <= 20){
           return this.armor += SHIELDARMOR; 
        } else {
            return this.armor = 20;
        };
    };

   attackComming(atk) {
       if (this.armor >= atk) {
            return this.armor -= atk;
       } else {
           return this.energy -= atk; 
       }
   }

    needsArmor() {
        if(this.armor === 0 && this.energy <= 20) {
            return true;
        } else {
            return false;
        }
    }

    ofensiveAttack() {
        const OFFENSIVEFX = (this.energy - 20) / 2;

        if(this.energy <= 20) {
            return `Puntos de fuerza de ataque: ${OFFENSIVEFX}`;
        } else {
            return `Puntos de fuerza de ataque: ${OFFENSIVEFX}`;
        }
    }
}
