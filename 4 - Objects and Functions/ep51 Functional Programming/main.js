// Functional programming requires first class functions

var arr1 = [1,2,3];
console.log(arr1);        //[1,2,3]

var arr2 = [];
for (var i=0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2);        // [2,4,6]








// Do it in a functional way to minimise repeating code
function mapForEach(arr, fn) {
  var newArr = [];

  for (var i=0; i < arr.length; i++) {

    newArr.push(fn(arr[i]));
  }

  return newArr;
}


// We can use this map function for a range of things by passing in a different function each time - all the map does is go through each item in the array and apply the passed in function to it
arr3 = mapForEach(arr1, function(item) {
  return item * 2;
});
console.log(arr3);        // [2,4,6]


arr4 = mapForEach(arr1, function(item) {
  return item > 2;
})
console.log(arr4);        // [true,true,false]


var checkPastLimit = function(limiter, item) {
  return item > limiter;
}
// Create a copy of the function, setting the limiter to 1;
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);




// Use closures to create an even easier to use function
var magicLimiter = function(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter)
}
var arr5 = mapForEach(arr1, magicLimiter(2));
console.log(arr5);
