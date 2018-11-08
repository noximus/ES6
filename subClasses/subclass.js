class Mammal {
    constructor(_legs, _name="jon doe"){
        this.legs = legs;
        this.name = name;
        this.warmBlooded = true;
    }
    walk(){
        return `$(this.name) is walking`
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
    walk(){
        let holding = this.eatsMeat ? 'bug' : 'carrot';
        return `${super.walk()} with a ${holding}`;
    }
}