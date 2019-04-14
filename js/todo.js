$(document).ready(function(){

  submitForm();
});

function submitForm(){
  $('form').on('submit', function(event){
    var listItem = $('#item').val();
    $('ol').append( '<li>' + listItem + '</li>' );
    event.preventDefault();
  });
}
// });




// $(document).ready(function(){
//   // call functions here
//   submitForm();
// });
//
// // define functions here
// function submitForm(){
//   $('form').on('submit', function(event){
//     var list = $('#item').val();
//     $('div#list ol').append(`<li>${list}</li>`)
//     event.preventDefault();
//
//   });
// }
// $(document).ready(function(){
//   // call functions here
//   $('form').on('submit', submitForm);
// });
//
// // define functions here
// function submitForm(event){
//   debugger
//   event.preventDefault();
//   var list = $('#item').val();
//   $('div#list ol').append(`<li>${list}</li>`)
// }
