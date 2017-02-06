$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event){
    var toDoItem = $('#item').val();
    $('ol').append('<li>' + toDoItem + '</li>');
    event.preventDefault();
  });
}
