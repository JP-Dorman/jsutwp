// Without relying on hoisting
var a = 'Hey! A is defined!';

function b() {
  console.log('B is activate sir.');
}

b();
console.log(a);


/*====================*/
// Relying on hoisting to define our vars
d();
console.log(c);

var c = 'Hey! C is defined!';

function d() {
  console.log('D is activate sir.');
}
