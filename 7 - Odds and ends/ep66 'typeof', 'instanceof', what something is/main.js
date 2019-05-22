var a = 3;
console.log(a);
console.log(typeof a);      //number


var b = 'Henlo';
console.log(b);
console.log(typeof b);      // string


var c = {};
console.log(c);
console.log(typeof c);    // object


var d = [];
console.log(d);
console.log(typeof d); // Weird apparently? I bet it's an object - it is
console.log(Object.prototype.toString.call(d)); // [object Array]


function Person(name) {
  this.name = name;
}


var e = new Person('Simon');
console.log(e);
console.log('typeof:')
console.log(typeof e);
console.log('instanceof:')
console.log(e instanceof Person);


console.log(typeof undefined);

// bug - been around forever a will probs never be fixed
console.log(typeof null);     // object


var z = function() {}
console.log(typeof z);      // function
