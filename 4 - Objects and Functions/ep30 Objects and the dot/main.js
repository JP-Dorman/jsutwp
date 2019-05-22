// A function inside an object is called a method



var person = new Object();

// Computed Member Access Operator
// Looks for firstname in person
person['firstName'] = 'Tony';
person['lastName'] = 'Chopper';

var firstNameProperty = 'firstName';

console.log(person);                      // {firstName: Tony ...}
console.log(person[firstNameProperty]);   // Tony

console.log(person.firstName);            // Tony
console.log(person.lastName);            // Chopper


// person['foo'] - computed member access operator
// person.foo - member access operator


person.address = new Object();
person.address.house = '111';
person.address.street = 'Pirate Road';

console.log(person);
console.log(person.address.street);
console.log(person['address']['street']);


// Computed member access is good for programmatically accessing data
var trainer = {
  pokemon: [
    {name: 'rapidash', 'sound': 'neigh'},
    {name: 'azuril', 'sound': 'marama!'},
    {name: 'flygon', 'sound': 'gon'},
    {name: 'alakazam', 'sound': 'alaka!'},
    {name: 'scizor', 'sound': 'scizor..'},
    {name: 'jolteon', 'sound': 'Jol!'},
  ]
}
for(i=0; i < trainer.pokemon.length; i++) {
  console.log(trainer.pokemon[i].name);
  console.log(trainer.pokemon[i].sound);
}
