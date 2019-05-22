// Today we learn some magic in the Boolean operator

function greet(name) {
  // So here it's looking for a value that returns true. *First* it checks the name parameter *and if* that returns false (it's undefined etc) it will then check the other side which is a filled string which returns true. So it sets name to the string.
  name = name || 'user';
  console.log('Hello ' + name);
}

greet('Tony');                        // Hello Tony
greet();                              // Hello user
greet(0);                             // Hello user - (0 coerces to false)



function greetZero(name) {
  // name = 0 ? '0' : name;
  if (name === 0) { name = '0' }
  name = name || 'user';
  console.log('Hello ' + name);
}

greetZero('yo');
greetZero();
greetZero(0);



console.log(undefined || 'Second');   // Second
console.log(null || 'Second');        // Second
console.log('First' || 'Second');     // First
console.log(1 || 'Second');           // 1
