function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  // Putting methods in the object would create a copy of the method for every object - wasting memory space.
  // Adding them to the prototype gives all objects access to one methodin memory
}


Person.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);


// The prototype property on a function is *NOT* the prototype of the function - it's the prototype of any objects created by the function as a constructor.

// For example John and Jane will get access to getFullName() but Person won't.



Person.prototype.getFullNameReversed = function() {
  return this.lastName + ' ' + this.firstName;
}

console.log(john.getFullNameReversed());
