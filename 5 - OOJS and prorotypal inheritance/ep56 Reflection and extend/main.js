var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

var john = {
  firstName: 'John',
  lastName: 'Doe'
}


// Don't ever set prototype this way - for demo purposes only!
john.__proto__ = person;
console.log(john.getFullName());






// Reflect on John's data

// Loops over all the members of the john object and logs the property
for (var prop in john) {
  console.log(prop + ': ' + john[prop])
}

console.log('--------------');

// Loops over all the members of the john object and logs only the props that belong just to john - no inheritance
for (var prop in john) {

  if (john.hasOwnProperty(prop)) {
    console.log(prop + ': ' + john[prop])
  }
}

console.log('--------------');







// Extend john - part of the underscore library - uses reflection to add properties from one object to another
var jane = {
  address: '111 Main Street',
  getFormalFullName: function() {
    return this.lastName + ', ' + this.firstName;
  }
}

var jim = {
  getFirstName: function() {
    return firstName;
  }
}

_.extend(john, jane, jim);

console.log(john);        // John now has all the properties of Jane and Jim
