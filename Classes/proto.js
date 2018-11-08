let Car = (function(){
    let _car = function(color){
        this.color = color;
    }
    _car.prototype.drive = function(){
        console.log('driving';)
    }
    return _car;
})();

console.dir(Car);