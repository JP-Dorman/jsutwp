
var a = 3;                    // 3
var b = new Number(3);        // {3}

console.log(a == b);          // True
console.log(a === b);         // False



// Use primitives, NOT built in constructors where possible to avoid weird errors.
