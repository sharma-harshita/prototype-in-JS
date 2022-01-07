// var a = {
//     id : 1,
//     firstName : "John",
//     lastName : "Doe",
//     course : "MERN"
// }

// var b = Object.create(a);
// console.log("B", b);

//Object = constructor function , a lot of properties


// Prototype Chaining
// When an object gets created using another object it will have some property know as Prototype using 
// which you can always access the properties of your parent constructor


// function Person (name, doj, batch) {
//     this.name = name;
//     this.doj = doj;
//     this.batch = batch;
// }

// var person1 = new Person ("John", "12Nov", "Morning");
// var person2 = new Person ("Doe", "10Oct", "Evening");


// Person.prototype.course = "MERN"
// Person.prototype.displayInfo = function(){
//     console.log(this.name , "has joined on ", this.doj, " in course", this.course, "and batch", this.batch);
// };

// person1.displayInfo();
// person2.displayInfo();


//block of code 
class A {
    displayInfo(){
        console.log("hello World");
    }
}


class B extends A{
    value = 2;
}

const userB = new B();
// const userA = new A();
console.log(userB.value);
userB.displayInfo();



// function a (){
//     let value = 10;
// }

// function b (){
//     let value2 = 20;
//     a()
//     console.log(value);
// }


var parent = {
    firstName : "Harshita",
    printName : function (){
        console.log("Hey");
    }
}

parent.printName()