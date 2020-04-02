$("#sendMail").on("click", function(){
  var email = $("#exampleInputEmail").val().trim();
  var pass = $("#exampleInputPass").val().trim();
var data = new Object();
data.username = email;
data.userPassword = pass;
data = JSON.stringify(data);
  $.ajax({ type: "POST",
  url: "http://localhost:8080/user/authenticate",
   data: data,
   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } ,
    success: function(data){
      alert(data);
    }

  });
});
