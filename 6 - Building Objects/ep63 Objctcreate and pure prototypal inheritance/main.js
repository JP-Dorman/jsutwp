// Polyfill
if (typeof Object.create !== "function") {
  Object.create = function (proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object: ' + proto);
    } else if (proto === null) {
      throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    }

    if (typeof propertiesObject != 'undefined') {
      throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
    }

    function F() {}
    F.prototype = proto;

    return new F();
  };
}






// Prototypes are just objects that we base our new objects on - similar to classes

var person = {
  firstName: 'Default',
  lastName: 'Default',
  greet: function() {
    return 'Hi' + this.firstName;
  }
}


var strix = Object.create(person);
console.log(strix);                // { ,person prototype}



strix.firstName = 'Strix';
strix.lastName = 'Beestinger';
console.log(strix);
