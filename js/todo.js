$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  // NOTE: handleSubmit called wihtout () at the end returns the actual function itself
  $('form').on('submit', handleSubmit);
}

function handleSubmit(event) {
  const item = $('#item').val();
  let liWithItem = `<li>${item}</li>`;

  $('#list ol').append(liWithItem);
  event.preventDefault();
}
