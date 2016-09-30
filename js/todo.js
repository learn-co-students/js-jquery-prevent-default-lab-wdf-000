$(document).ready(function(){
  // call functions here
  submitForm()
});

// define functions here
function submitForm() {
  $('form').on('submit', function(event){
    var item = $('#item').val();
    $("#list ol").append("<li></li>");
    $("#list ol li:last").text(item)
    event.preventDefault();
  });
}
