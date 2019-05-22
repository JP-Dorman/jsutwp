(function(global, $) {

// Use a closure to do the work of using the 'new' keyword so we don't have to use it every time we call Greetr
var Greetr = function(firstName, lastName, language) {
  return new Greetr.init(firstName, lastName, language);
}


// Set hidden data
var supportedLangs = ['en', 'es'];

var greetings = {
  en: 'Hello',
  es: 'Hola'
};

var formalGreetings = {
  en: 'Greetings',
  es: 'Saludos'
};

var logMessages = {
  en: 'Logged in',
  es: 'Inicio sesion',
};


// Set visible props and methods on prototype
Greetr.prototype = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },

  validateLang: function() {
    if (supportedLangs.indexOf(this.language) === -1) {
      throw 'Invalid language';
    }
  },

  greeting: function() {
    return greetings[this.language] + ' ' + this.firstName + '!';
  },

  formalGreeting: function() {
    return formalGreetings[this.language] + ' ' + this.fullName();
  },

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

  log: function() {
    if(console) {
      console.log(logMessages[this.language] + ': ' + this.fullName());
    }

    return this;
  },

  setLang: function(newLanguage) {
    this.language = newLanguage;
    this.validateLang();

    return this;
  }
};


Greetr.init = function(firstName, lastName, language) {
  // Set default values
  this.firstName = firstName || 'user';
  this.lastName = lastName || '';
  this.language = language || 'en';
}


// Set individual usage prototype to main Greetr prototype so we can use the objects and methods it has
Greetr.init.prototype = Greetr.prototype;


// Set the Greetr aliases
global.Greetr = global.G$ = Greetr;

}(window, jQuery));
