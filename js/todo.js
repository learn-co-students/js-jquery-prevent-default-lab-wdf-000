$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm(){
  $('form').on('submit', function(event){
    var item = $('#item').val();

    $('ol').append(`<li>${item}</li>`)
    event.preventDefault();
  });

}
