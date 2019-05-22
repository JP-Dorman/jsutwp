// Function overloading - have different functions with the same name to handle different numbers of parameters.
// JavaScript doesn't have function overloading but we can fake it

// So we can do some logic in one function
function greet(firstName, lastName, language) {
  language = language || 'en';

  if (language === 'en') {
    console.log('Hello ' + firstName + ' ' + lastName);
  } else if (language === 'es') {
    console.log('Hola ' + firstName + ' ' + lastName);
  }
}
greet('Billy', 'Franklin', 'en');



// Or we can do Fake overloading
function greetEnglish(firstName, lastName) {
  console.log('Hello ' + firstName + ' ' + lastName);
}
function greetEnglish(firstName, lastName) {
  console.log('Hello ' + firstName + ' ' + lastName);
}
