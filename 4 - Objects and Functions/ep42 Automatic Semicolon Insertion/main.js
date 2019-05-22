// A syntax parser will inject semicolons in places it expects them to be. (like when you hit enter without using one after a return statement).

// Always always put in your semicolons


function getPerson() {
  return // Syntax parser put a semicolon here
  {
    firstName: 'Tony'
  }
}

console.log(getPerson());


// Fixed
function getPerson2() {
  return {
    firstName: 'Tony'
  }
}

console.log(getPerson2());
