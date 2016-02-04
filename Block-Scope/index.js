'use strict';

//Variable Hoisting
function hoistedVarValue(condition) {

  if(condition) {
    var x = 10;
  } else {
      //x is availble here
      x = 30;
  }

  return x;
}

console.log('Hoisted value -- ',hoistedVarValue(true));
console.log('unHoisted value -- ',hoistedVarValue(false));

function hoistedLetValue(condition) {
  var x = 20;
  if(condition) {
    let x = 10;
  } else {
    //x is 20 here;
  }

  //x is 20 here
  return x ;
}

console.log('Hoisted value -- ',hoistedLetValue(true));
console.log('unHoisted value -- ',hoistedLetValue(false));
