var arr = new Array();
var arrLiteral = [1, 2, 3];

console.log(arr);
console.log(arrLiteral[1]);


// Because JavaScript is dynamically typed, it doesn't have to be an array of just numbers or just strings.

myArray = [
  1,
  false,
  {
    name: 'Tony',
    address: '111 Main St.'
  },
  function(name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  'butts'
];
console.log(myArray);

// Run the function with the name
myArray[3](myArray[2].name);
