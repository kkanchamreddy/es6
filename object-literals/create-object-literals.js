"use esnext";
//regular es5 style
function createPerson(fName, lName) {
  return {
    firstName: fName,
    lastName: lName
  };
}

//es6 style - there should be a local variable with matching key name
function createES6Person(fName, lName) {
  var firstName = fName, lastName = lName;

  return {
    firstName,
    lastName
  };
}

var p1 = createPerson('John', 'Doe');
var p2 = createES6Person('John', 'Doe');

console.log(p1);

console.log(p2);
