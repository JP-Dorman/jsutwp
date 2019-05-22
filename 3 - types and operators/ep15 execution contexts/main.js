// Each function creates its own execution context, when we define myVar inside it, it makes its own local scope version
function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
