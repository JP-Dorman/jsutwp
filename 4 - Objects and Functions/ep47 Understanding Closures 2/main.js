function buildFunctions() {
  var arr = [];

  for (i=0; i < 3; i++) {

    arr.push(
      function() {
        console.log(i);
      }
    )
  }

  return arr;

}


var fs = buildFunctions();

console.log('------ Broken ------');
fs[0]();  // 3
fs[1]();  // 3
fs[2]();  // 3





// Explanation
function buildFunctionsExplained() {
  var arr = [];

  for (i=0; i < 3; i++) {

    arr.push(
      // We save the new function object to memory, but we haven't invoked it yet - the code hasn't run.
      // This means it doesn't save the value of i, it saves the reference to the variable, which is 3 by the time we run the function with fs[0]();
      function() {
        console.log(i);
      }
    )
  }

  return arr;

}
















// How to make it work as expected in es6
function buildFunctionsES6() {
  var arr = [];

  for (i=0; i < 3; i++) {
    // let variable is scoped to the block (inside curly braces) - forces a new variable every time the loop is called.
    let j = i;
    arr.push(
      function() {
        console.log(j);
      }
    )
  }

  return arr;

}


var fs2 = buildFunctionsES6();


console.log('------ ES6 ------');
fs2[0]();  // 3
fs2[1]();  // 3
fs2[2]();  // 3













// How to make it work as expected in es5
function buildFunctionsES5() {
  var arr = [];

  for (i=0; i < 3; i++) {
    arr.push(
      // Self invoking function that passes the value of i as a new variable j in each function's execution context - thanks to closures this value will be saved
      // We are instead pushing the RESULT of the outer function - which is the returned internal function with the variable we need stored in the outer function (a closure).
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )
  }

  return arr;

}


var fs3 = buildFunctionsES5();


console.log('------ ES5 ------');
fs3[0]();  // 0
fs3[1]();  // 1
fs3[2]();  // 2
