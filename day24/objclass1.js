let car = {
    brand:'Ford',// prperties and vlue pair
    speed: 0, //sample value
    //methods-parts of properties
    accelerate : function (amount) { //compute acceleration
        this.speed += amount; //will increase
    },
    brake : function (amount) {
        this.speed -=amount;
    },
    
    carstatus : function () {
        return this.brand +" is running at " +this.speed +" km/h " ;
        
    } 
    
}
console.log(car.carstatus());
car.accelerate(50);
console.log(car.carstatus());
car.accelerate(100);
console.log(car.carstatus());
car.brake(25);
console.log(car.carstatus());
//no repetion
let car2 = {
    brand:'Ferrari',
    speed: 0, 
    accelerate : function (amount) { //compute acceleration
        this.speed += amount; //will increase
    },
    brake : function (amount) {
        this.speed -=amount;
    },
    
    carstatus : function () {
        return this.brand +" is running at " +this.speed +" km/h " ;
        
    } 
    
}