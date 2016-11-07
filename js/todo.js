$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm(){
  $('form').on('submit',function(event){
    var list = $('#item').val();
    $('div#list ol').append(`<li>${list}</li>`)
    event.preventDefault();
  });
}
