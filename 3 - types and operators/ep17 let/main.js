// Let allows for block scoping - during the init phase the var is loaded into memory and set to undefined. However unlike var, you're not allowed to use it until the declaration is reached in the execution phase. Is also only available inside its block (curly braces).
var a = 2;
var b = 1;

if (a > b) {
  console.log(d);
  var d = true;

  console.log(d);
}

if (a > b) {
  console.log(c);
  let c = true;

  console.log(c);
}
