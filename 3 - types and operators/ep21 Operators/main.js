// Operators - a special function that is syntactically different - Generally, operators take two parameters and return one result.

var a = 3 + 4;

console.log(a);


// I'm sorry, what? The + symbol is a function??
// 3 + 4 -This is called infix notation
// +3 4  - called prefix notation
// 3 4+  - called postfix notation


console.log(1 + 2);
// Basically does this
console.log(add(1, 2));
function add(a, b) {
  return a + b;
}
