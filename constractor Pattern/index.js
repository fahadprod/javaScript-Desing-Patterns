//Traditional function base
function Hero(name, specialAbility){

    //set property value
    this.name = name;
    this.specialAbility = specialAbility;

    //declare method object
    this.getDetail = function(){
        return this.name + ' can ' + this.specialAbility
    };
}
const IronMan = new Hero('Iron Man', 'Fight');
console.log(IronMan.getDetail());

//ES6 class base

class newHero{
    constructor(name, specialAbility){
        this._name = name;
        this._specialAbility = specialAbility;

        this.getDetail = function(){
            return `${this._name} can ${this._specialAbility}`;
        };
    }
}

const spiderMan = new newHero('Spider Man ', 'Fly');
console.log(spiderMan.getDetail());