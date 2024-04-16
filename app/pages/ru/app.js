function infoAboutCollege() {
    document.getElementById('mainContent').innerHTML = "<h2>Расписание</h2><p>Здесь будет отображаться расписание</p>";
}

function showRules() {
    document.getElementById('mainContent').innerHTML = "<h2>Звонки</h2><p>Здесь будет отображаться информация о звонках</p>";
}

function infoAboutLibery() {
    document.getElementById('mainContent').innerHTML = "<h2>Информация о библиотеке</h2><hr>"
}

function showTheCode() {
    document.getElementById("mainContent").innerHTML = "<h1>Кодекс академической честности студентов</h1><hr>" +
        "<p>Костанайский политехнический колледж (далее – Колледж), стремясь обеспечивать высокое качество образовательных программ, научных исследований, а также творческих и прикладных проектов, гарантирует соблюдение принципа академической честности.\n" +
        "Высокое качество образовательных программ, научных исследований, творческих и прикладных проектов достижимо исключительно в условиях культуры академической добросовестности, разделяемой всеми членами академического сообщества Колледжа.\n" +
        "Нарушения стандартов академической деятельности причиняют вред авторитету и репутации Колледжа как образовательного учреждения, которое придерживается высоких стандартов преподавания, исследования и творчества.</p>"
}

function showConnection() {
    document.getElementById("mainContent").innerHTML = "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
        "    <title>Связь</title>\n" +
        "    <style>\n" +
        "        body {\n" +
        "            font-family: Arial, sans-serif;\n" +
        "            background-color: #f0f0f0;\n" +
        "            margin: 0;\n" +
        "            padding: 0;\n" +
        "        }\n" +
        "        .container {\n" +
        "            max-width: 600px;\n" +
        "            margin: 20px auto;\n" +
        "            background-color: #fff;\n" +
        "            padding: 20px;\n" +
        "            border-radius: 10px;\n" +
        "            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n" +
        "        }\n" +
        "        .contact-info {\n" +
        "            margin-bottom: 20px;\n" +
        "        }\n" +
        "        .social-links {\n" +
        "            margin-top: 20px;\n" +
        "        }\n" +
        "        .social-links a {\n" +
        "            display: inline-block;\n" +
        "            width: 40px;\n" +
        "            height: 40px;\n" +
        "            background-color: #007bff;\n" +
        "            color: #fff;\n" +
        "            text-align: center;\n" +
        "            line-height: 40px;\n" +
        "            margin-right: 10px;\n" +
        "            border-radius: 50%;\n" +
        "            text-decoration: none;\n" +
        "        }\n" +
        "    </style>\n" +
        "</head>\n" +
        "<body>\n" +
        "    <div class=\"container\">\n" +
        "        <h1>Связь</h1>\n" +
        "        <div class=\"contact-info\">\n" +
        "            <p>Адрес: г.Костанай, Проcпект Кобылянды Батыра 3</p>\n" +
        "            <p>Телефон: 8 (7142) 56-08-81</p>\n" +
        "            <p>Email: krak_kost@mail.ru</p>\n" +
        "        </div>\n" +
        "        <div class=\"social-links\">\n" +
        "            <a href=\"#\" target=\"_blank\"><img src=\"img/facebook_icon.png\" alt=\"Facebook\"></a>\n" +
        "            <a href=\"#\" target=\"_blank\"><img src=\"img/instagram_icon.png\" alt=\"Instagram\"></a>\n" +
        "            <a href=\"#\" target=\"_blank\"><img src=\"img/youtube_icon.png\" alt=\"YouTube\"></a>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</body>\n" +
        "</html>"
}

function goBack() {
    window.history.back();
}

function showDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

function showSecondDropdown() {
    var dropdown = document.getElementById("secondDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

    // Закрыть выпадающий список, если кликнули вне его
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}