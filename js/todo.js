$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  $('form').on('submit', function(event) {
    var input = $('#item').val();
    // $('#list ol').append($('<li></li>').text(input));
    $('#list ol').append($('<li>' + input + '</li>'));
    event.preventDefault();
  });
}