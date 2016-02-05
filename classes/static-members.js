'use strict';

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function(){
  return this.name;
}

Person.create = function(name) {
  return new Person(name || 'No Name');
}

var john = Person.create('John');
var noName = Person.create();

console.log(john.sayName());
console.log(noName.sayName());


/*----------------------------------*/

class PersonClass {

   constructor(name) {
     this.name = name;
   }

   sayName () {
     return this.name;
   }

   static create(name) {
     return new PersonClass(name);
   }
}

var jack = PersonClass.create('jack');
console.log(jack.sayName());
