$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm(argument) {
  $('form').submit(function (e) {
    $('#list ol').append(`<li>${$('input#item').val()}</li>`);
    e.preventDefault();
  });

}

