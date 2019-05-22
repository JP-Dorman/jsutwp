// Any declared variable in the IIFE is encapsulated in the IIFE's execution context - it never hits the global execution context

var greeting = 'Hola';

// IIFE
(function (name) {
  var greeting =  'Hello';
  console.log(greeting);
}('John'));

console.log(greeting);


// The code in the IIFE is safe because it stops variables being stored in the global context where they might overwrite each other







// What if we WANT to affect the global scope from an IIFE? We pass a reference to window so we can choose to use it.
(function (global, name) {
  global.globalGreeting =  'Yo ' + name;
}(window, 'Everyone'));

console.log(globalGreeting);
