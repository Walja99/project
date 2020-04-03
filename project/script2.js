let user_id;
$("#sendMail").on("click", function(){
  var email = $("#emailA").val().trim();
  var pass = $("#password").val().trim();
var data = new Object();
data.username = email;
data.userPassword = pass;
data = JSON.stringify(data);
  $.ajax({ type: "POST",
  url: "http://localhost:8080/user/authenticate",
   data: data,
   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json; charset=UTF-8' } ,
    success: function(id){
      localStorage.setItem("user_id", id);
    }

  });

});

$("#crEvent").on("click", function(){
  if (!localStorage.getItem("user_id")){
    alert("Aвторизируйтесь")}
    else{
  var name = $("#name").val().trim();
  var startTime = $("#startTime").val().trim();
  var stopTime = $("#endTime").val().trim();
  var place = $("#place").val().trim();
  var num = $("#num").val().trim();
var data = new Object();
data.name = name;
data.orgId = user_id;
data.startTime = startTime;
data.endTime = endTime;
data.place = place;
data.count = num;
data = JSON.stringify(data);
  $.ajax({ type: "POST",
  url: "http://localhost:8080/event/create",
   data: data,
   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json; charset=UTF-8' } ,
  });
}
});
$("#exit").on("click", function(){
  localStorage.removeItem("user_id");
  });

for (let i=0; i < 22; i++){
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
