class Person {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi , I am ${this.name}`);
    }
}

class student extends Person {
    constructor(name, age, marks) {
        super(name, age)   //parent class constructor is being called
        this.marks = marks;

    }

}



class teacher extends Person {
    constructor(name, age, subject) {
        super(name, age)   //parent class constructor is being called
        this.subject = subject;

    }

}

