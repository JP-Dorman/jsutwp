var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}


// JS engine will not make John.firstName === 'Default' because it starts at the top of the prototype chain where it sees we have defined firstName as 'John' - it will not look any further for firstName.
var john = {
  firstName: 'John',
  lastName: 'Doe'
}


// Don't ever set prototype this way - for demo purposes only. Will massively slow down code.
// Gives John access to the props and methods of person
john.__proto__ = person;
console.log(john.getFullName());




// Jane's lastName is set as the 'Default' we set on person - this is because there is no lastName in Jane to take over.
var jane = {
  firstName: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());
