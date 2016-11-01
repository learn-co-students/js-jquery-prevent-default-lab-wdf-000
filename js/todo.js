$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm(){
  $('form').on('submit', function(event){
    var result = $('#item').val();
    $("#list ol").append('<li>' + result + '</li>')
    event.preventDefault();
  });
}
