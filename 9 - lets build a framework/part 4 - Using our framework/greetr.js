// You can throw a semicolon at the start to make sure the previous script will always end its last line properly and leave your code alone.
;(function(global, $) {

// Use a closure to do the work of using the 'new' keyword so we don't have to use it every time we call Greetr
var Greetr = function(firstName, lastName, language) {
  return new Greetr.init(firstName, lastName, language);
}


// Set hidden data - hidden within the scope of the IIFE and never directly accessible
// Languages we support
var supportedLangs = ['en', 'es', 'ni'];

// Our set greetings
var greetings = {
  en: 'Hello',
  es: 'Hola',
  ni: 'Konnichiwa'
};

var formalGreetings = {
  en: 'Greetings',
  es: 'Saludos',
  ni: 'Ohayō gozaimasu'
};

// Message to send on login
var logMessages = {
  en: 'Logged in',
  es: 'Inicio sesion',
  ni: 'Roguin'
};


// Greetr prototype holds methods (to save memory space)
Greetr.prototype = {
  // Return full name of instance
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },


  // Make sure the entered language is valid
  validateLang: function() {
    if (supportedLangs.indexOf(this.language) === -1) {
      throw 'Invalid language';
    }
  },


  // Return a regular greeting
  greeting: function() {
    return greetings[this.language] + ' ' + this.firstName + '!';
  },


  // Return a formal greeting
  formalGreeting: function() {
    return formalGreetings[this.language] + ' ' + this.fullName();
  },


  // Console log a formal or informal greeting
  greet: function(formal) {
    var msg;

    if(formal) {
      msg = this.formalGreeting();
    } else {
      msg = this.greeting();
    }

    if (console) {
      console.log(msg);
    }

    // Return this to make it chainable
    return this;
  },


  // Console log 'commence session' message in set language
  log: function() {
    if(console) {
      console.log(logMessages[this.language] + ': ' + this.fullName());
    }

    // Make it chainable
    return this;
  },


  // Write to what language we're using then call a validation on the new lang
  setLang: function(newLanguage) {
    this.language = newLanguage;
    this.validateLang();

    // Make it chainable
    return this;
  },


  // Use jquery selectors to update any html
  jqueryUpdater(selector, formalBool) {
    // Make sure we have jQuery and a selector
    if (!$) { throw 'jQuery not loaded'; }
    if (!selector) { throw 'missing jQuery selector'; }

    var msg = formalBool ? this.formalGreeting() : this.greeting;

    $(selector).html(msg);

    // Make it chainable
    return this;
  }
};


Greetr.init = function(firstName, lastName, language) {
  // Set default values
  this.firstName = firstName || 'user';
  this.lastName = lastName || '';
  this.language = language || 'en';

  this.validateLang();
}


// Copy greetr prototype to proto of each object created by it - this gives each instance access to all the props and methods
Greetr.init.prototype = Greetr.prototype;


// Set the Greetr aliases
global.Greetr = global.G$ = Greetr;

}(window, jQuery));
