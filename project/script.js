var element = document.getElementById("id1");
for (let i=0; i < 6; i++){
var div_card = document.createElement('div');
div_card.className = "card col-md-4 col-lg-3 mb-3";
div_card.innerHTML = "<div class='card-body'><h4 class='card-title'>Мероприятие "+(i+1)+"</h4> <p class='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><a href='#' class='btn btn-primary'>Зарегаться</a></div>";
element.appendChild(div_card);
}


(function() {
  'use strict';

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
(function(){
  var element = document.getElementById('justify-content-center');
  var link = document.createElement('a');
  var br = document.createElement('br');
  link.immerHTML = 'Go to google';
  link.href = "http://google.com";
  element.appendChild(br);
  element.appendChild(link);
})();
