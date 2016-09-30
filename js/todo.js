$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {

  $('form').on('submit', function(event) {
    event.preventDefault()

    var todo = $("input#item").val();
    addItem(todo)
    
  })
}

function addItem(todo) {
  var ol = $('div#list ol')[0];
  var li = $("<li></li>").text(todo);
  $('div#list ol').append(li)
}