Array.prototype.myCustomFeature = 'cool!';


// Arrays are objects
var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]);
}


// Do not use for..in loops on arrays - it can start iterating over custom methods in the prototype because arrays are objects.


// Instead use for loops, they are safe
for(i=0; i < arr.length; i++) {
  console.log(i + ': ' + arr[i]);
}
