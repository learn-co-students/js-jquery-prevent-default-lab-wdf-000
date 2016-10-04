$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event){
  var item = $('#item').val();
  $("#list ol").append(`<li>${item}</li>`);
  $('#item').val("");
  event.preventDefault();
  });
}
