class Car {
    constructor (brand,model) {
        this.brand=brand;
        this.model=model;
        this.speed=0;
        this.motion = 'The car is not moving'; //initial condition
    }
    checkmotion () {
        //ternary condition
        this.speed > 0 ? this.motion = 'The car is Moving': this.motion = 'The car has stopped';
    }
    accelerate (amount) { //compute acceleration
        this.speed += amount; //will increase
        this.checkmotion();
    }
    brake (amount) {
        amount>=this.speed ? this.speed = 0 : this.speed -= amount;
        this.checkmotion();
    }
    carstatus () {
        return this.brand  +" " +this.model +" is running at " +this.speed +" km/h. Status Check: "+this.motion ;  
    }
}
let car = new Car ('Ford','Fiesta');
console.log (car.carstatus());
car.accelerate(50);
console.log(car.carstatus());
car.accelerate(100);
console.log(car.carstatus());
car.brake(25);
console.log(car.carstatus());
car.brake(150);
console.log(car.carstatus());

let car2 = new Car ('Honda', 'Mobilio');

console.log (car2.carstatus());
car2.accelerate(100);
console.log(car2.carstatus());
car2.accelerate(100);
console.log(car2.carstatus());
car2.brake(25);
console.log(car2.carstatus());
car2.brake(175);
console.log(car2.carstatus());