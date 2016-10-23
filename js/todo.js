$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event) {
    var item = $('input#item').val();
    $('ol').append('<li>' + item + '</li>');
    event.preventDefault();
  });
}
