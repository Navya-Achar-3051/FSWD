class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        const date=new Date();
        return date.getFullYear()-this.year;
    }
}
const mycar=new car("Ford",2020);
console.log("My car is " + mycar.age() + " years old");
//document.getElementById('demo').innerHTML="My car is " + mycar.age() + " years old";