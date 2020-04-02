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
    success: function(data){
      alert(data);
    }

  });
});
