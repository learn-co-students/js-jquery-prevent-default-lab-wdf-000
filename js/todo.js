$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm(){
  $('form').on('submit', handleFormSubmit)
}

function handleFormSubmit(event) {
  $("#list ol").append('<li>' + $('#item').val() + '</li>');
  event.preventDefault();
}
