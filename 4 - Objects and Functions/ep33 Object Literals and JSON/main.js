// Object literal
var myObjectLiteral = {
  firstName: 'Mary',
  isAProgrammer: true
}
console.log(myObjectLiteral);


// JSON
var myJSON = '{ "firstName": "Mary", "isAProgrammer": true }'
console.log(myJSON);


console.log(JSON.stringify(myObjectLiteral));
console.log(JSON.parse(myJSON));
