'use strict';

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function() {
  return this.name;
};

let person1 = new Person('John', 50);
let person2 = new Person('Jack', 20);

console.log('person1 name: ', person1.getName());
console.log('person2 name: ', person2.getName());


//Es6 Classes
class PersonClass {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  updateAge(age) {
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

let person3 = new PersonClass('Ted', 30);
let person4 = new PersonClass('Tim', 30);
person4.updateAge(40);

console.log('person3 name: ', person3.getName());
console.log('person4 name: ', person4.getName());
console.log('person4 age: ', person4.getAge());
