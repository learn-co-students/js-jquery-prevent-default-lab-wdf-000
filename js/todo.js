$(document).ready(function(){
   submitForm();
});



function submitForm(){
  $('form').on('submit',function(event){
    var list = $('#item').val();
     $('div#list ol').append(`<li>${list}</li>`)
     event.preventDefault();
   });
}
