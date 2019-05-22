function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// We use capital letters at the start of the constructor function so that we remember to add the 'new' keyword in front of it. If we forget 'new', it causes our constructed objects to return undefined.
var jane = new Person('Jane', 'Doe');
console.log(jane);
