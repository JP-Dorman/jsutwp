// Free Variable - a variable declared outside a function but referenced inside the function.

// i is a free variable
for (i=0; i < 3; i++) {
  (function myExample() {
    console.log(i);
  }())
  i++;
}


// Callback function - a function you give to another function to run when it's finished


// Function currying - creating a copy of a function with some preset parameters


// Look into functional programming course


// Inheritance - one object gets access to the properties and me thods of another object



// Reflection - an object can look at itself - listing and changing its props and methods

var john = {
  firstName: 'John',
  lastName: 'Doe'
}
for (var prop in john) {
  console.log(prop + ': ' + john[prop])
}


// .call() will invoke a function but tell it what to define 'this' as


// Method chaining - one method after another and each method affects the parent object.
// $('myDiv').addClass('bwaaaa').removeClass('myDiv');
// addClass and removeClass return the object so we can chain them




// Transpile - convert the syntax of one programming language to another.
