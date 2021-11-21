function createCar (carbrand) {
    let car = {
        brand: carbrand,
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
    return car;
}
let car1 = createCar('Honda');
console.log (car1.carstatus());
car1.accelerate(50);
console.log(car1.carstatus());
car1.accelerate(100);
console.log(car1.carstatus());
car1.brake(25);
console.log(car1.carstatus());

let car2 = createCar('Mazda');
console.log (car2.carstatus());
car2.accelerate(100);
console.log(car2.carstatus());
car2.accelerate(90);
console.log(car2.carstatus());
car2.brake(25);
console.log(car2.carstatus());

