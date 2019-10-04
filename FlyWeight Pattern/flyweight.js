class Icecream{
    constructor(flavour,price){
        this.flavour = flavour;
        this.price = price;
    }
}

class IcecreamFactory{
    constructor(){
        this._icecreams = [];
    }

    createIcecream(flavour,price){
        let icecream = this.getIcecream(flavour);
        if(icecream){
            return icecream;
        } else{
            const newIcecream = new Icecream(flavour,price);
            this._icecreams.push(newIcecream);
            return newIcecream;
        }
    }

    getIcecream(flavour){
        return this._icecreams.find(icecream => icecream.flavour === flavour);
    }
}

const factory = new IcecreamFactory();

const chocoVanilla = factory.createIcecream("Chocolate and vanilla",15);
const vanillaChoco = factory.createIcecream("Chocolate and vanilla",15);

console.log(chocoVanilla === vanillaChoco);