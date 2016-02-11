'use strict';

const log = console.log;
var hasRegExpU = (function () {
    try {
        var pattern = new RegExp(".", "u");
        return true;
    } catch (ex) {
        return false;
    }
})();

var text = "𠮷";

log(text.length); // 2
log(/^.$/.test(text));      // false

/* not working in node 4.x  so checking for the support of u flag */
if(hasRegExpU) {
    log(/^.$/u.test(text));  // true because of the u flag
}


/* Substring methods

1. includes()
2. startsWith()
3. endsWith()

*/

var hello = 'Hello World';
log('Hello World contains llo ',hello.includes('lLo'));  //It is case sensitive

log('Hello World starts with  H ', hello.startsWith('h')); //it is case sensitive
log('Hello World starts with  o', hello.startsWith('o', 4)); //starting from index 4

log('Hello World ends with rld', hello.endsWith('rld')); //it is also case sensitive
