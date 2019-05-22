// async events are added to a separate event queue, this is the async part - when the execution stack is empty, it then checks for  the first item in the event queue, adds any code it calls to the execution stack, processes it, then when the execution stack is empty again, it moves onto the next item in the event queue.

// long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('finished function');
}

function clickHandler() {
  console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

// The click event will never execute before the wait function is done as it is waiting for the execution stack to be done
