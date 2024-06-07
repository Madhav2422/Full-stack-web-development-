            // Constructors=does not return anything and starts with the capital

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk=function(){
    console.log(`Hi my name is ${this.name}`);
}

let p1=new p1("madhav",21);
let p2=new p2("sahil",21);