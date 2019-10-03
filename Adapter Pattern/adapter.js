class OldCalculator{
    constructor(){
        this.operations = function(a,b,operation){
            switch(operation){
                case 'add':
                    return a + b;
                case 'sub':
                    return a - b;
                default:
                    return NaN;
            };
        }
    }
}

class NewCalculator{
    constructor(){
        this.add = function(a,b){
            return a + b;
        }
        this.sub = function (a,b){
            return a - b;
        }
    }
}

class CalcAdapter{
    constructor(){
        const newCalc = new NewCalculator();

        this.operations = function(a,b,operation){
            switch(operation){
                case 'add' :
                    return newCalc.add(a , b);
                case 'sub':
                    return newCalc.sub(a , b);
                default:
                    return NaN;
            };
        }
    }
}

const OldCalc = new OldCalculator();
console.log(OldCalc.operations(10,5,'add'));

const NewCalc = new NewCalculator();
console.log(NewCalc.add(10,5));

const AdaptCalc = new CalcAdapter();
console.log(AdaptCalc.operations(10,5,'add'));