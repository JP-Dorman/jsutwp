function greet(whatToSay) {

  return function(name) {
    console.log(whatToSay + ' ' + name);
  }
}


// greet('Hi')('Tony'); - the normal way to invoke, but to understand, we'll invoke the long way below


var sayHi = greet('Hi');

// It remembers the parameter 'Hi' we passed when we invoke sayHi
sayHi('Tony');





//Tl;dr: closures save the variables in the outer function so you can access them in the inner function without declaring stuff in the global scope.

function count() {
  var i = 0;

  return function() {
    i++;
    console.log(i);
  }
}

count()();
