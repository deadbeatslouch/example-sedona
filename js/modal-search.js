var button = document.querySelector(".search-button"); //кнопка открытия и закрытия модалки поиска
var popup = document.querySelector(".modal-search"); //находит модалку

var form = document.querySelector("form");
var arrival = document.querySelector("[name=arrival-date]"); //первые три поля формы
var departure = document.querySelector("[name=departure-date]");
var adults = document.querySelector("[name=adults]");

button.addEventListener("click", function (evt) { //клик по кнопке
	evt.preventDefault(); //сбрасывает событие по умолчанию
	popup.classList.toggle("modal-search-show"); //добавляет класс появления модалки если его нет, удаляет если есть
	arrival.focus(); //устанавливает фокус на первом поле
  popup.classList.remove("modal-error"); // удаляет класс ошибки при повторном открытии формы
});

form.addEventListener("submit", function (evt) { // отлавливает событие отправки формы
  if (!arrival.value || !departure.value || !adults.value) { // отменяет отправку форму если одно из полей незаполнено
    evt.preventDefault();
    popup.classList.remove("modal-error"); // хак, чтобы анимация ошибки срабатывала каждом нажатии
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error"); // добавляет форме класс ошибки если форма не валидна
  }
});

window.addEventListener("keydown", function (evt) { // отлавливает нажатие клавиши esc, 
  if (evt.keyCode === 27) {
    evt.preventDefault(); // отменяет действие по умолчанию(выход из полноэкранного режима),
    if (popup.classList.contains("modal-search-show")) { // если модалка открыта, закрывает ее
      popup.classList.remove("modal-search-show");
      popup.classList.remove("modal-error"); // и удаляет класс ошибки
    }
  }
});