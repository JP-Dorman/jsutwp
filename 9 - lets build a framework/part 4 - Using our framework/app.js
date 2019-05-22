// Log in button
$('#login').click(function() {
  // Init our user (pretend we have their name from somewhere)
  var john = G$('John', 'Doe');

  // Set language
  var lang = $('#lang').val();
  john.setLang(lang);

  // Hide login box
  $('#login-div').hide();

  // Show greeting Message and log success to console
  john.jqueryUpdater('#greeting', true).log();
});
