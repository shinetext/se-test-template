$(document).ready(function() {
  console.log('document ready');

  $('#send').click(send);
  $('#user').keypress(function(event) {
    if (event.which === 13) {
      send();
    }
  })

  function send() {
    var message = $('#user').text();
    sendMessage(message);

    $('#user').val('');
  }
});

/**
 * Post the user's input to the server.
 */
function sendMessage(text) {
  //
  // @todo IMPLEMENT ME
  //
}