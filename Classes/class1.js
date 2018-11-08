class Car {
    constructor(color){
        this.color = color;
    }
}
// returns a function
console.dir(typeof(Car));

let Car = (function(){
    let _car = function(color){
        this.color = color;
    }
})();

