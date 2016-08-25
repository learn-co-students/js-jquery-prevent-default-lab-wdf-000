$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm() {
  $('form').on('submit', function(e) {
    $('#list ol').append('<li>' + $('input#item').val() + '</li>');
    e.preventDefault();
  });
}
