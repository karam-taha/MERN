class Ninja {
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`${this.name}`);
    }
    showStats(){
        console.log(`name: ${this.name}\nstrength: ${this.strength}\nspeed: ${this.speed}\nhealth: ${this.health}`)
        
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa",300);
ninja1.sayName();
ninja1.showStats();
