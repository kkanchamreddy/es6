'use strict';

function Rectangle (length, width){
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

var rect = new Rectangle(10, 20);

console.log('rect instanceof Rectangle: ', rect instanceof Rectangle);
console.log('Area of rectangle is: ', rect.getArea());

function Square(length, width) {
  Rectangle.call(this, length, width);
}

Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;

var sqr = new Square(10, 10);
console.log('sqr instanceof Square: ', sqr instanceof Square);
console.log('sqr instanceof Rectangle: ', sqr instanceof Rectangle);
console.log('constructor', sqr.constructor);
console.log('Area of square is: ', sqr.getArea());
