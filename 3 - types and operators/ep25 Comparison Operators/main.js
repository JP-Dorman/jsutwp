// Expect True
console.log(1 < 2 < 3);          // true

// Expect False
console.log(3 < 2 < 1);          // true

// Why does the second one return true when we expect false?
// Because it has a left to right associativity, it runs 3 < 2 which returns false. Which then gives us "false < 1" - it then coerces the false into a number, which gives us "0 < 1" which returns true - so our console log returns "true".

// Step 1
console.log(3 < 2 < 1);
// Step 2
console.log(false < 1);
// Step 3
console.log(0 < 1);
// Step 4
console.log(true);


// We can use Number() to check what things will coerce as
console.log(Number('1') + 2);     // 3
console.log(Number(undefined));   // NaN
console.log(Number(null));        // 0


// Okay, but want to see something really weird? We just established that null coerces into 0, the same as false. BUT:
console.log(false == 0);          // true
console.log(null == 0);           // false
console.log(Number(null) == 0);   // true
console.log(null < 1);            // true

// And:
console.log('' == 0);             // true
console.log('' == false);         // true


//Tl;dr: Use strict equality "===" because it doesn't try to coerce datatypes
console.log(3 === 3);             // true
console.log('3' === '3');         // true
console.log(3 === '3');           // false
