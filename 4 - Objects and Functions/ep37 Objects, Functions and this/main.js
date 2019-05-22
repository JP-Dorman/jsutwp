// Execution context -
// Has a variable environment
// Has a reference to the outer environment
// Has 'this' - given in each new execution context (function) - it points at a different object depending on how the function is invoked

console.log(this);          // Global Object (Window object)





// Function statement
function a() {
  console.log(this);        // Window object
}
a();


// Function expression
var b = function() {
  console.log(this);        // Window object
}
b();





// You can do weird stuff with 'this' like setting variables in the global namespace from inside a function
function c() {
  this.newVariable = 'Beep beep I\'m a sheep';
}
c();
// Window is the global namespace - no need for window.newVariable
console.log(newVariable);    // Beep beep I'm a sheep







var d = {
  name: 'The D object',
  number: 1,
  log: function() {
    console.log(this);                // var d {}
    this.name = 'Updated D object'    // Allows us to mutate d


    // Affects the global object instead of d because it's not a direct child of d - weird JavaScript behavior
    var setNumber = function(newNumber) {
      this.number = newNumber;
    }
    setNumber(2);
    console.log(this);
  }
}
d.log();


var e = {
  name: 'The E object',
  number: 1,
  log: function() {
    var self = this;

    // We use the self var to pass the reference to our object down to the child function through the scope chain
    var setNumber = function(newNumber) {
      self.number = newNumber;
    }
    setNumber(2);
    console.log(this);
  }
}
e.log();
