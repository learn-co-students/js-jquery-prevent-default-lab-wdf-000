$(document).ready(function(){
  adds();
});

function adds() {
  $('form').on('submit', function(event) {
    var item = $('input#item').val();
    $('ol').append('<li>' + item + '</li>');
    event.preventDefault();
  });
}
