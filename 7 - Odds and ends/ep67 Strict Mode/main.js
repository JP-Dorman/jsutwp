// You can set strict for the whole file or just for individual functions - you do it by declaring it at the top of the execution context.

// 'use strict';


function logNewPerson() {
  'use strict';

  var person2 = {};
  console.log(persom2);
}

var person;
persom = {};
console.log(persom);
logNewPerson();


// Strict doesn't always have the same rules for every browser - because that would be smart.   :/


// Also - if you minify your js and the first file has use strict at the top - it will process the whoooole minified file using strict - a problem if some of those libs / original files didn't consider strict upon writing.



// MDN has good notes on strict mode
