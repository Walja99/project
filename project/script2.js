$("#sendMail").on("click", function() {
  var email = $("#emailA").val().trim();
  var pass = $("#password").val().trim();
  var data = new Object();
  data.username = email;
  data.userPassword = pass;
  data = JSON.stringify(data);
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/user/authenticate",
    data: data,
    headers: { 'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8' },
    success: function(n) {
      localStorage.setItem("user_id", n.id);
      localStorage.setItem("login", n.login);
      localStorage.setItem("token", n.token);
    },
    error: function(t) {
      localStorage.setItem("user_id", "error");
    }
  });
  alert("для отладки");
});

$("#crEvent").on("click", function(){
  if (!localStorage.getItem("user_id")) {
    alert("Aвторизируйтесь")
  } else {
    var name = $("#name").val().trim();
    var startTime = $("#startTime").val().trim();
    var endTime = $("#endTime").val().trim();
    var place = $("#place").val().trim();
    var num = $("#choose").val().trim();
    var data2 = new Object();
    data2.name = name;
    data2.orgId = localStorage.getItem("user_id");
    data2.startTime = startTime;
    data2.endTime = endTime;
    data2.place = place;
    data2.booths = num;
    data2 = JSON.stringify(data2);
    tok="Bearer"+localStorage.getItem("token");
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/event/create",
      data: data2,
      headers: { 'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Authorization': tok},
    });
  }
});

$("#rege").on("click", function() {
  var email =  $("#email").val().trim();
  var firstName = $("#firstName").val().trim();
  var password = $("#pass").val().trim();
  var secondName = $("#lastName").val().trim();
  var rank = "jjjjj";
  var sex = "m";
  var birth = $("#birthDate").val().trim();
  var phoneNumber = $("#phone").val().trim();
  var organization = $("#org").val().trim();
  var data = new Object();
  data.email = email;
  data.password = password;
  data.firstName = firstName;
  data.secondName = secondName;
  data.rank = rank;
  data.birth = birth;
  data.phoneNumber = phoneNumber;
  data.organization = organization;
  data = JSON.stringify(data);
  fetch("http://localhost:8080/create_user", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: data // body data type must match "Content-Type" header
  });
});

$("#exit").on("click", function() {
  localStorage.removeItem("user_id");
});

for (let i=0; i < 22; i++) {
  $("#btn_regevent"+(i+1)).on("click", function() {
    if (!localStorage.getItem("user_id")) {
      alert("Авторизируйтесь")
    } else {
      var element = document.getElementById("btn_regevent"+(i+1));
      var id = element.className.slice(16);
      alert(localStorage.getItem("user_id"));
    }
  });
};
