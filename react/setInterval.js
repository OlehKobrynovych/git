//
setInterval()

Метод setInterval(), запропонований на інтерфейсах Windowі Worker, багаторазово викликає функцію або 
виконує фрагмент коду з фіксованою затримкою між кожним викликом.
Цей метод повертає ідентифікатор інтервалу, який однозначно ідентифікує інтервал, тому ви можете 
видалити його пізніше, викликавши clearInterval().

var intervalID = setInterval(func, [delay, arg1, arg2, ...]);  // delay час в мілісикундах arg1 додаткові аргументи які можна передати
var intervalID = setInterval(function[, delay]);
// ----------------------
clearInterval();   //
метод скасовує тимчасову повторювану дію, яка була раніше встановлена ​​викликом до setInterval()

// --------------------------------------
setTimeout()

Глобальний setTimeout()метод встановлює таймер, який виконує функцію або вказаний фрагмент коду
 після закінчення терміну дії таймера.

 var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
 var timeoutID = setTimeout(function[, delay]);

//  -----------------------------
 clearTimeout();
 Глобальний clearTimeout()метод скасовує тайм-аут, встановлений раніше, викликаючи setTimeout().

// --------------------------------------
 btn.addEventListener("click", () => {}, options);

 Метод EventTarget.addEventListener()реєструє певний обробник події, викликаної на  EventTarget.
EventTargetможе бути Element, Document, Windowабо будь-яким іншим об'єктом, що підтримує події 
(таким як XMLHttpRequest (en-US)).

target.addEventListener(type, listener[, options]); // type подія що обрбляється
target.addEventListener(type, listener[, useCapture]);

// listener Об'єкт, який приймає повідомлення, коли подія вказаного типу сталася. Це має бути 
// об'єкт, що реалізує інтерфейс  EventListenerабо просто  функція JavaScript .

// options Необов'язковий Об'єкт options, який визначає характеристики об'єкта, що прослуховує подію.

// -----------------------------
btn.removeEventListener('click', () => {}, options);

// Видаляє обробник події, який було зареєстровано за допомогою EventTarget.addEventListener().
// Обробник визначається типом події, самою функцією обробки події та додатковими параметрами, 
// переданими при реєстрації обробника.

target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
