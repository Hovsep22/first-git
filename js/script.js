// class Dog{
//     constructor(name){
//         this._name = name;
//     }
//     talk1(){
//         alert(this._name +" " + "says woof")
//     }
//     toString(){
//         return this._name
//     }
// }

// const dog1 = new Dog("picklies");
// alert(dog1.toString());

// const a = {
//     name: "Joe",
    
// }

// const b = {
//     lastname: "Jacson"
// }

// const c = {
//     age: 18,
//     showAge (){
//         alert(this.age)
//     }
// }

// a.__proto__ = b
// b.__proto__ = c
// a.showAge()

// function zoo(){
//     alert(this.name)
// }

// let person = {
//     name: "Joe",
//     age: 33
// };

// person.foo = zoo;
// person.foo();

"use strict"

function zoo(txt,x){
    alert(txt + " " + this.name)
}

let person = {
    name: "Joe",
    age: 33
};

zoo.call(person, "my name is", 2)
