console.log("hello world");

// Function Constructor
// Set, Map, Array, Object, Function

// Any variable which gets created using any constructor function. Then that variable will persists the properties that constructor function provides.


//  first is by using {}, 
// second is by using Object constructor function
//  third by using Object.create()

// fourth way of creating an object = by using function constructor
function Person (name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
    this.salary = 10000;
}

let person1 = new Person ( 24, "Jaipur");
let person2 = new Person ("Chetan", 30, "Jalandhar");
let person3 = new Person ("Chandu", 22, "Jabalpur");

console.log(person1.company);

console.log(person2);
console.log(person2.marks);

// in case if you want to add other properties in the specific one single object created using function constructor
person2.marks = "A";
console.log(person2.marks);

console.log(person3);
console.log(person2);


// in case when you want to add properties inside function constructor
Person.prototype.company = "TCS";
person1.company= "Mindtree"
console.log(person1.company);


// Prototype Chaining: 
// person1 or person2 or person3 are the objects got created using function constructor Person. So their master or parent is Person constructor.

// Each object, array, etc always contains a Prototype property from which we can access all the inbuilt functions.

// In case od person1, its prototype level 1 is Person function constructor then prototype level 2 is Object constructor function and this chain goes on like this until you dont get value of __proto__ as null. This concept is known as Prototype chaining.