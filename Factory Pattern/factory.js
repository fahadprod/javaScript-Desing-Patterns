class BallFactory{
    constructor(){
        this.createBall = function(type){
            let ball;
            if(type === 'football' || type === 'score') ball = new FootBall();
            else if(type === 'basketball') ball = new BasketBall();

            ball.roll = function(){
                return `The ${this._type} is rolling`;
            };
            return ball;
        };
    }
}

class FootBall {
    constructor(){
        this._type = 'football';
        this.kick = function(){
            return "You kicked the football";
        }
    }
}

class BasketBall {
    constructor(){
        this._type = 'basketball';
        this.bounce = function(){
            return "You bounced the basketball";
        }
    }
}

const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.roll());
console.log(myBasketball.roll());
console.log(myFootball.kick());
console.log(myBasketball.bounce());