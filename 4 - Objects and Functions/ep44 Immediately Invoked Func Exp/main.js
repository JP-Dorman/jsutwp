// Immediately invoked function expressions

// So we know about function statements
function greetStatement(name) {
  console.log('Hello ' + name);
}
greetStatement('Billy');



// And using function expressions - where it's almost a function literal - we create on the fly
var greetExpression = function (name) {
  console.log('Hello ' + name);
}
greetExpression('Jean');



// Using an immediately invoked function expression (IIFE)
var greeting = function (name) {
  return 'Hello ' + name;
}('Brad');  // We use these parentheses to run the function immediately



// Because we set greeting with a return statement, it references the returned string, not the function.
console.log(greetExpression);   // function greetExpression()
console.log(greeting);          // 'Hello Brad'











// Valid JS
3;
'I am a string';
{ name: 'John' };


// Not valid JS because the engine expects a function statement with this syntax - so it wants a name
/*
function (name) {
  return 'Hello ' + name;
}
*/


// Valid js because it's inside the grouping operator (parentheses) - it can be assumed there's only an expression in here, not a statement
(function (name) {
  var greeting =  'Hello';
  console.log(greeting + ' ' + name);
});


var firstName = 'John';
(function (name) {
  var greeting =  'Hello';
  console.log(greeting + ' ' + name);
}(firstName));  // Adding extra parentheses here invokes the function
// IIFE
