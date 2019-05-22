var a = new Number(3);                    // Function constructor
console.log(a);                           // Object

// Number has prototype because it's a constructor
console.log(Number.prototype.toFixed);

// You can run toFixed on a because it has access through the prototype of a Number object.
console.log(a.toFixed());



// The same applies with String().
var b = new String('John');
console.log(b);
console.log(String.prototype.indexOf);
console.log(b.indexOf('o'));




// The same applies with Date().
var c = new Date('03/01/2019');
console.log(c);
console.log(Date.prototype.getDay);
console.log(c.getDay());





// We can even add new methods to pre-existing constructors
String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}
console.log('John'.isLengthGreaterThan(3));



// And we do it again for Number();
Number.prototype.isPositive = function() {
  return this > 0;
}
// This will error as JavaScript doesn't convert number primitives to objects automatically.
// console.log(3.isPositive());


// We do this instead
var d = new Number(3);
console.log(d.isPositive());
