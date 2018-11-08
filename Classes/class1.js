class Car {
    constructor(color){
        this.color = color;
    }
    drive(){
        console.log('driving');
    }
}
// returns a function
// console.dir(Car);

let redCAr = new Car('red');
console.dir(redCar);