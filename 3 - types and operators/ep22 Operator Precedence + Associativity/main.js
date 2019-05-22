// Operator Precedence - BODMAS essentially
// Operator Associativity - what order operator functions get called in if they have the same precedence (left to right or right to left)

var a = 3 + 4 * 5;
console.log(a);


// Associativity example - "=" has right to left assiciativity, so it first executes "b = c" which sets b to 4 and returns a value (remember this is a function with a return statement) of 4 - which replaces the "b = c" with 4. So next it runs "a = 4"
var a = 2, b = 3, c = 4;
a = b = c;
console.log(a);
console.log(b);
console.log(c);
