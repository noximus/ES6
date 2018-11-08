class Mammal {
    constructor(_legs, _name="jon doe"){
        this.legs = _legs;
        this.name = _name;
        this.warmBlooded = true;
    }
    walk(){
        return `${this.name} is walking`;
    }
}

class Bat extends Mammal{
    constructor(_legs, _name, _eatsMeat){
        super(_legs, _name);
        this.eatsMeat = _eatsMeat;
    }
    fly(){
        return `${this.name} is flying`;
    }
    // overrides original walk method
    walk(){
        let holding = this.eatsMeat ? 'bug' : 'carrot';
        return `${super.walk()} with a ${holding}`;
    }
}

// create new object
let fruitBat = new Bat (4, 'peter', false);

console.log(fruitBat);
console.log(fruitBat.walk());