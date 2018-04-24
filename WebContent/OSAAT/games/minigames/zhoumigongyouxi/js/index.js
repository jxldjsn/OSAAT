(function mapGen(b, c, e, a, m) {
    // Функция управления персонажем
    function character(a, b) {
        // Получаем цвет пикселя из промежутка между текущей ячейкой и той, в сторону которой персонаж должен передвинуться
        var h = d.getImageData(13 * f + 7 + 6 * a, 13 * g + 7 + 6 * b, 1, 1);
        // Если цвет пикселя черный, то не перемещаем персонажа (обнуляем dx (a) и dy (b)), иначе увеличиваем количество шагов
        0 == h.data[0] && 0 == h.data[1] && 0 == h.data[2] && 255 == h.data[3] ? a = b = 0 : document.querySelector("#step").innerHTML = Math.floor(document.querySelector("#step").innerHTML) + 1;
        // Закрашиваем персонажа
        d.clearRect(13 * f + 3, 13 * g + 3, 10, 10); 
        // Меняем его текушие координаты
        f += a; 
        g += b; 
        // Вновь отрисовываем его
        d.fillRect(3 + 13 * f, 3 + 13 * g, 10, 10);
        // Если персонаж вышел за пределы лабиринта, то генерируем новый лабиринт и начинаем игру сначала
        f >= c && mapGen("#canvas", c, e, 0, m + 1)
    }

    // Выбираем область рисования
    b = document.querySelector(b);
    var d = b.getContext("2d");
    // И вписываем количество шагов и пройденных лабиринтов
    document.querySelector("#step").innerHTML = Math.floor(a);
    document.querySelector("#complete").innerHTML = Math.floor(m);
    // Зададим ширину и высоту области лабиринта
    b.width = 13 * c + 3;
    b.height = 13 * e + 3;
    // И закрасим в черный цвет
    d.fillStyle = "black";
    d.fillRect(0, 0, 13 * c + 3, 13 * e + 3);
    
    // Объявим массивы для хранения значения множества текущей ячейки, для значения стенки справа и для значения стенки снизу
    a = Array(c); 
    b = Array(c);
    var k = Array(c),
        // Текущее множество
        q = 1;

    // Цикл по строкам
    for (cr_l = 0; cr_l < e; cr_l++) {
        // Проверка принадлежности ячейки в строке к какому-либо множеству        
        for (i = 0; i < c; i++) 
            0 == cr_l && (a[i] = 0), d.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 10), k[i] = 0, 1 == b[i] && (b[i] = a[i] = 0), 0 == a[i] && (a[i] = q++);

        // Создание случайным образом стенок справа и снизу
        for (i = 0; i < c; i++) {
            k[i] = Math.floor(2 * Math.random()), b[i] = Math.floor(2 * Math.random());
            
            if ((0 == k[i] || cr_l == e - 1) && i != c - 1 && a[i + 1] != a[i]) {
                var l = a[i + 1];
                for (j = 0; j < c; j++) a[j] == l && (a[j] = a[i]);
                d.clearRect(13 * i + 3, 13 * cr_l + 3, 15, 10)
            }
            cr_l != e - 1 && 0 == b[i] && d.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 15)
        }

        // Проверка на замкнутые области.
        for (i = 0; i < c; i++) {
            var p = l = 0;
            for (j = 0; j < c; j++) a[i] == a[j] && 0 == b[j] ? p++ : l++;
            0 == p && (b[i] = 0, d.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 15))
        }
    }

    // Рисуем выход из лабиринта
    d.clearRect(13 * c, 3, 15, 10);
    // Обнуляем текущие координаты персонажа
    var f = 0,
        g = 0;
    // Задаем крассный цвет
    d.fillStyle = "red";
    // И ставим персонажа в начало лабиринта
    character(-1, -1);
    // Ожидаем нажатия стрелок
    document.body.onkeydown = function (a) {
        36 < a.keyCode && 41 > a.keyCode && character((a.keyCode - 38) % 2, (a.keyCode - 39) % 2)
    }
})("#canvas", 25, 30, 0, 0);