console.log(Boolean(undefined));    // false
console.log(Boolean(null));         // false
console.log(Boolean(''));           // false


var a;
// let's say we ajax GET some data and assign it to a

if (a) {
  console.log('a has data!');
} else {
  console.log('a is nothing!');
}

// We can use coercion to see if a has data
// But this will cause a bug if a ever genuinely gets assigned to the number 0 as it will coerce to false anyway.
// This is how we fix that
var b = 0;

if (b || b === 0) {
  console.log('b has data!');
} else {
  console.log('b is nothing!');
}
