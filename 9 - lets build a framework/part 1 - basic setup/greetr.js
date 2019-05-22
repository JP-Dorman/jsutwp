(function(global, $) {

// Use a closure to do the work of using the 'new' keyword so we don't have to use it every time we call Greetr
var Greetr = function(firstName, lastName, language) {
  return new Greetr.init(firstName, lastName, language);
}

Greetr.prototype = {};


Greetr.init = function(firstName, lastName, language) {
  // Set default values
  this.firstName = firstName ? firstName : 'user';
  this.lastName = lastName ? lastName : '';
  this.language = language ? language : 'default';
}


// Set individual usage prototype to main Greetr prototype so we can use the objects and methods it has
Greetr.init.prototype = Greetr.prototype;


// Set the Greetr aliases
global.Greetr = global.G$ = Greetr;

}(window, jQuery));
