const car = {
    noOfWheels : 4,
    start(){
        return 'Started';
    },
    stop(){
        return 'stopped';
    }
};

const newCar = Object.create(car, {owner: {value : 'Jhon'}});

console.log(newCar.__proto__ === car);
