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