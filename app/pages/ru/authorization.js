function goBack() {
    window.history.back();
}

function checkForm(el) {
    const login = el.login.value;
    const password = el.password.value;

    var fail;

    if(login == "user123" && password == "123456Aa") {
        window.location = 'windowForTeacher.html';
        return false;
    } else {
        fail = "Данные введины некоректно";
        document.getElementById('error').innerHTML = fail;
        return false;
    }
}