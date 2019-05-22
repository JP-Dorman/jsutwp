// Init a but never assign a value, leaving the default of undefined
var a;

console.log(a);
if (a === undefined) {
  console.log('a is undefined!');
} else {
  console.log('a is defined!');
}

/*====================*/
// Assign a value to a, replacing the undefined default value
a = 'yo boiiiii';
console.log(a);
if (a === undefined) {
  console.log('a is undefined!');
} else {
  console.log('a is defined!');
}


/*====================*/
// Never even declare b, creating an error as the memory space is never assigned to it

/* Temp comment this out to stop errors as we move on
console.log(b);
if (b === undefined) {
  console.log('b is undefined!');
} else {
  console.log('b is defined!');
}*/

/*====================*/
// Never ever do this - it can cause debugging stress later as you can't tell if you set something to undefined or if the js engine did it on init
var c = 'Hey! I have a value!';
console.log(c);
c = undefined;
console.log(c);
