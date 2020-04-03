var element = document.getElementById("events");
for (let i=0; i < 6; i++){
var div_card = document.createElement('div');
if (element.className == "row justify-content-center eng"){
div_card.innerHTML = "<div class='card-body'><h4 class='card-title'>Event "+(i+1)+"</h4> <p class='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><a href='' id='btn_regevent"+(i+1)+"' class='btn btn-primary "+(i+1)+"'>Take part</a></div>";
}
else{
div_card.innerHTML = "<div class='card-body'><h4 class='card-title'>Мероприятие "+(i+1)+"</h4> <p class='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><a href='' id='btn_regevent"+(i+1)+"' class='btn btn-primary "+(i+1)+"'>Зарегаться</a></div>";
}
div_card.className = "card col-md-4 col-lg-3 mb-3";
element.appendChild(div_card);
};
var element = document.getElementById("choose");
for (let i=0; i < 6; i++){
var option = document.createElement('option');
option.value = i+1;
option.innerHTML = i+1;
element.appendChild(option);
}
if (localStorage.getItem("user_id")){
  document.getElementById("aut").style="display : none";
  document.getElementById("exit").style="display : inline";
  var hello = document.getElementById("hello");
  if (hello.className =="eng mr-lg-5")
  {
  hello.innerHTML="Hello, " + localStorage.getItem("user_id");
}
else{
  hello.innerHTML="Здравствуйте, " + localStorage.getItem("user_id");
}
}
else {
  document.getElementById("aut").style="display : inline";
  document.getElementById("exit").style="display : none";
  var hello = document.getElementById("hello");
  if (hello.className =="eng mr-lg-5")
  {
    hello.innerHTML="Log in.";
  }
  else{
  hello.innerHTML="Авторизируйтесь для регистрации на мероприятие.";
}
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
