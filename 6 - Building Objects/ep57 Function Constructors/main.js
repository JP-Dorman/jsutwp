// Function Constructor
// A normal function that is used to construct objects
// 'this' variable points to a new empty onject and that object is returned from the function by default
function Person(firstName, lastName) {

  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;


  // return will force john to equal the below  and overwrite the 'new' operator magic
  // return { greeting: 'beep beep' }
}


// New is an operator - it creates an empty object.
// When Person is called, 'new' makes the 'this' in person point to itself
// As long as Person doesn't return a value, what we do in Person will end up in the object created by new
var john = new Person('John', 'Doe');
console.log(john);        // {firstName: 'John', lastName:'Doe'}



var jane = new Person('Jane', 'Doe');
console.log(jane);        // {firstName: 'Jane', lastName:'Doe'}
