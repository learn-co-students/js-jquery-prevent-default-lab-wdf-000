$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  $('form').on('submit', function(event){
    var task = $('#item').val();
    $('ol').append('<li>' + task + '</li>');
    event.preventDefault();
  });
};
