//Функция авторизации
$("#sendMail").on("click", function () {
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
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        success: function (n) {
            localStorage.setItem("user_id", n.id);
            localStorage.setItem("login", n.firstName);
            localStorage.setItem("token", n.token);
        },
        error: function (t) {
            alert("Не удалось авторизоваться");
        }
    });
});
//Функция создания мероприятия
$("#crEvent").on("click", function () {
    if (!localStorage.getItem("user_id")) {
        alert("Aвторизируйтесь")
    } else {
        var name = $("#name").val().trim();
        var startTime = $("#startTime").val().trim();
        var endTime = $("#endTime").val().trim();
        var place = $("#place").val().trim();
        var num = $("#choose").val().trim();
        var data = {
            "name": name,
            "orgId": localStorage.getItem("user_id"),
            "startTime": startTime,
            "endTime": endTime,
            "place": place,
            "booths": num
        }
        tok = "Bearer " + localStorage.getItem("token")
        fetch('http://localhost:8080/event/create', {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
                'X-Authorization': tok
            },
            body: JSON.stringify(data)
        }).then(results => results.json()).then(console.log("ppp"))
    }
});
//Функция регистрации
$("#rege").on("click", function () {
    var email = $("#email").val().trim();
    var firstName = $("#firstName").val().trim();
    var password = $("#pass").val().trim();
    var secondName = $("#lastName").val().trim();
    var rank = "jjjjj";
    var sex = "m";
    var birth = $("#birthDate").val().trim();
    var phoneNumber = $("#phone").val().trim();
    var organization = $("#org").val().trim();
    var data = {
        "email": email,
        "password": password,
        "firstName": firstName,
        "secondName": secondName,
        "rank": rank,
        "sex": sex,
        "birth": birth,
        "phoneNumber": phoneNumber,
        "organization": organization
    }
    fetch('http://localhost:8080/create_user', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(results => results.json()).then(r => alert("Регистрация прошла успешно"))
});
//Функция выход
$("#exit").on("click", function () {
    localStorage.removeItem("user_id")
});
