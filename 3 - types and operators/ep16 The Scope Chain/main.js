// myVar is passed down to b from the global scope
// The lexical environment (where in the code you place your function) defines what variables are passed down to your functions.

function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
  c();

  function c() {
    // myVar is overwritten in the context of a(), but otherVar isn't
    console.log(myVar);
    console.log(otherVar);
  }
}

var myVar = 1;
var otherVar = 12;
a();

// This will fail because it is not defined at the global level and so is never loaded into memory on init
c();

/*
So our scope chain for c() is:

c()
a()
window (global)

and it will search for myVar or otherVar down this chain until it finds it
*/
