class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    return 'Hi ' + this.firstName;
  }
}

var john = new Person('John', 'Doe');
console.log(john);
console.log(john.greet());









class InformalPerson extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  greet() {
    return 'Yo ' + this.firstName;
  }
}

var paulton = new InformalPerson('Paulton', 'Seppa');
console.log(paulton);
console.log(paulton.greet());




// Syntactic sugar - a different way to type something - it doesn't work any differently under the hood
