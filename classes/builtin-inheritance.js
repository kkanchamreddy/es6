// built-in array behavior
var colors = [];
colors[0] = "red";
console.log(colors.length); //should be 1

colors.length = 0; //removing all the elements of this array
console.log(colors[0]);  //should return undefined

/* Trying with the ES5/Traditinal way */
function MyArray() {
  Array.apply(this, arguments);
}

MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

var extendedColors = new MyArray();
extendedColors[0] = "red";
console.log(extendedColors.length);    // should be 1 just like if you are using the builtin array

extendedColors.length = 0 //Try to remove all the elements

//should be undefined but since inherting bulitin Arrays doesn't work as expected, we will still see 'red'
console.log(extendedColors[0]);
