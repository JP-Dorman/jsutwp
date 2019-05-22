// (Function) Expression - a unit of code that results in a value

var a;

// The if statement is a statement ("var a = if () {}" makes no sense)
// Inside the parenthesis of an if statement is an expression - it returns a value
if (a === 3) {

}

// Function statement - doesn't result in a value - does not create an object
function greet() {
  console.log('hi!');
}

// Function expression - Set function to variable - creates an object
var anonymousGreet = function() {
  console.log('hi!');
}

greet();
anonymousGreet();

// Function expressions are variables - they get set to undefined when hoisted - greet() will work when invoked before set, whereas anonymousGreet() will error if you try that.



// You can pass functions to other functions as parameters
function log(a) {
  console.log(a);
}

log('hi');
log({ greeting: 'hi' });
log(function() {
  console.log('hi');
})


// You can invoke passed functions like this
function invokeMyFunc(a) {
  a();
}

invokeMyFunc(function() {
  console.log('hi');
});
