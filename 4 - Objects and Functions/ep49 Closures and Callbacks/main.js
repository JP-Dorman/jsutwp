function sayHiLater() {

  var greeting = 'Hi!';

  setTimeout(function() {
    console.log(greeting);
  }, 3000);
}

sayHiLater();


// jQuery uses function expressions and first-class functions
/*
$('button').click(function() {

})
*/




// Callbacks example
function tellMeWhenDone(myCallback) {

  var a = 1000;   // Some example work for the function to do
  var b = 2000;   // Some example work for the function to do

  myCallback();
}


tellMeWhenDone(function() {

  console.log('I am done!');

});

tellMeWhenDone(function() {

  console.log('Winner winner!');

});
