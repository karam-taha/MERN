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

class Sensei extends Ninja {
    constructor(name,health){
        super(name,health);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
        this.health = 200;
    }
    speakWisdom() {
        this.health += this.wisdom;
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

// const ninja1 = new Ninja("Hyabusa",300);
// ninja1.sayName();
// ninja1.showStats();
