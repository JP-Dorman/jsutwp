function makeGreeting(language) {

  return function(firstName, lastName) {

    if(language === 'en') {
      console.log('Hello' + firstName + ' ' + lastName);
    }

    if (language === 'es') {
      console.log('Hola ' + firstName + ' ' + lastName);
    }
  }
}


// makeGreeting returns the inner function - we can use this as a function factory to build new functions in memory with their own execution contexts and custom closure variables.
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');


greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');
