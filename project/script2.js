let user_id;
$("#sendMail").on("click", function(){
  var email = $("#emailA").val().trim();
  var pass = $("#password").val().trim();
var data = new Object();
data.username = email;
user_id = email;
data.userPassword = pass;
data = JSON.stringify(data);
  $.ajax({ type: "POST",
  url: "http://localhost:8080/user/authenticate",
   data: data,
   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json; charset=UTF-8' } ,
    success: function(data){
      alert(data);
    }

  });
  localStorage.setItem("user_id", user_id);
});
$("#exit").on("click", function(){
  localStorage.removeItem("user_id");
  });
for (let i=0; i < 6; i++){
$("#btn_regevent"+(i+1)).on("click", function(){
  if (!localStorage.getItem("user_id")){
    alert("Авторизируйтесь")
  }
  else{
  var element = document.getElementById("btn_regevent"+(i+1));
  var id = element.className.slice(16);
  alert(localStorage.getItem("user_id"));
 }
  });
}
