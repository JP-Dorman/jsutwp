// First class functions - Everything you can do with other types, you can do with functions. Assign to vars, pass them around as params, create on the fly.

function greet() {
  console.log('hi');
}

// In JS, functions are objects
greet.language = 'english';


console.log(greet);
console.log(greet.language);
greet();
