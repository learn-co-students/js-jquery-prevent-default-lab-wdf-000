$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(e) {
    $('ol').append("<li>" + $("#item").val() + "</li>");
    e.preventDefault();
  });
}
