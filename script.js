let clock = document.getElementById("clock"); // Получение элементов из DOM
let color = document.getElementById("color");


function HexoClock() { // Функция изменения времени и цвета фона
    let time = new Date();// Вызов Date
    let h = (time.getHours() % 12).toString(); // Вызов текущего времени и преобразование в строку
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if (h.length < 2) { // Проверка
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    let clockString = h + ':' + m + ':' + s;
    let colorString = '#' + h + m + s;

    clock.textContent = clockString; // Вставка в DOM
    color.textContent = colorString;

    document.body.style.background = colorString; // Изменение фона
}

HexoClock(); //Первый вызов функции
setInterval(HexoClock, 1000); //Интервал