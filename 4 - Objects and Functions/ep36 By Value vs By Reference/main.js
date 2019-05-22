// by value (primitives) - when the javascript engine sees a primitive being copied like this, it saves a new value to b
var a = 3;
var b;

b = a;
a = 2;
console.log(a);             // 2
console.log(b);             // 3




// by reference (objects(inc. functions)) - when the javascript engine sees an object being set like this it DOES NOT create a copy, it just references the original object with the new name.

var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'yo';
console.log(d);             // yo
console.log(c);             // yo

// Mutate - to change something
// Immutable - can't be changed

// This is even true if you pass as param
function mutateGreeting(f) {
  f.greeting = 'Hola';
}

mutateGreeting(c);
console.log(c);             // Hola




// Equals operator sets up new memory space because it sees the object literal isn't something that already exists in memory and assigns c to it
c = { greeting: 'Heck off' };
console.log(c);             // Heck off
console.log(d);             // Hola
