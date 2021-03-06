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

function Square(length) {
  Rectangle.call(this, length, length);
}
/*
Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;
*/

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        value:Square,
        enumerable: true,
        writable: true,
        configurable: true
    }
});

var sqr = new Square(10);
console.log('sqr instanceof Square: ', sqr instanceof Square);
console.log('sqr instanceof Rectangle: ', sqr instanceof Rectangle);
console.log('constructor', sqr.constructor);
console.log('Area of square is: ', sqr.getArea());



/******  ES6 Style *********/
console.log('-------ES6-----------');
class RectangleType {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    static create(length, width) {
      return new RectangleType(length, width);
    }
}

class SquareType extends RectangleType {
    constructor(length) {
        // same as Rectangle.call(this, length, length)
        super(length, length);
    }

    getArea() {
      return super.getArea();
    }
}

var sqrType = new SquareType(10);
var sqrType2 = SquareType.create(15,15);

console.log('sqrType instanceof SquareType: ', sqrType instanceof SquareType);
console.log('sqrType instanceof RectangleType: ', sqrType instanceof RectangleType);
console.log('constructor', sqrType.constructor);
console.log('Area of square is: ', sqrType.getArea());

console.log('sqrType2 instanceof SquareType: ', sqrType2 instanceof SquareType);
console.log('sqrType2 instanceof Rectangle: ', sqrType2 instanceof RectangleType);
console.log('Area of square is: ', sqrType2.getArea());
