$(document).ready(function(){
	submitForm();
});

function submitForm() {
	$('form').on('submit', handleForm)
}

function handleForm(event) {
  $("#list ol").append('<li>' + $('#item').val() + '</li>');
  event.preventDefault();
}