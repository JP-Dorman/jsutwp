var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {

    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;

  }
}



// This doesn't work because 'this' refers to the window/global execution context
var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('----------------');
}
//logPersonName();  -- commented out to stop errors




// Here, we aren't invoking the function, we're treating it as an object to assign a copy of it to logPersonName
// .bind() defines what is used as 'this' in its parentheses
var logName2 = logName.bind(person);
logName2();




//  Or we could do it with the original function like this:
var logName3 = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('----------------');
}.bind(person);
logName3('en', 'es');








// Call also lets me decide what 'this' should be as the first parameter as I call the function
logName.call(person, 'en', 'es');

// Apply does the same as call but wants an array wrapped around the parameters
// logName.apply(person, 'en', 'es');  - breaks
logName.apply(person, ['en', 'es']);



var logName4 = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('----------------');
}.apply(person, ['en', 'es']);



















/*------------------------ Example Usage ------------------------*/
// Function borrowing
var person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
}

// Invoke the function stored in person but set 'this' to use it with person2's data
person.getFullName.apply(person2);







// Function currying
function multiply(a, b) {
  return a*b;
}

// These two things do functionally the same thing - passing parameters to bind after setting 'this' will create permanent values for multiplyByTwo();
var multiplyByTwo;


multiplyByTwo = multiply.bind(this, 2);
//--------
multiplyByTwo = function(b) {
  var a = 2;
  return a*b;
}


console.log(multiplyByTwo(4))
