// arguments - holds all the parameters


function greet(firstName, lastName, language) {
  // Set defaults
  firstName = firstName || 'FirstName';
  lastName = lastName || 'lastName';
  language = language || 'en(uk)';

  if (arguments.length === 0) {
    console.log('Missing parameters!')
    console.log('----------------------');
    return;
  }

  console.log(firstName);
  console.log(lastName);
  console.log(language);
  console.log(arguments);         // [John, Green, en(us)]
  console.log(arguments[0]);      // John
  console.log('----------------------');
}

greet();
greet('John', 'Green');
greet('John', 'Green', 'en(us)');

// Arguments are array-like, which means they're very similar to arrays but have some limited features









// Spread Operator
function greet2(...other) {
  console.log(other);           // [John, Green, en(us)]
  console.log('----------------------');
}
greet2('John', 'Green', 'en(us)');
