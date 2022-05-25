У JavaScript є три види спливаючих вікон: поле сповіщення, поле підтвердження та поле підказки.
alert("I am an alert box!");         спливає вікно сповіщення, користувачеві доведеться натиснути «ОК»,
                          щоб продовжити.
confirm("sometext");                 Коли з'явиться вікно підтвердження, користувачеві доведеться натиснути
                          або «ОК» або «Скасувати», щоб продовжити.
prompt("sometext","defaultText");    Коли з'явиться вікно підказки, користувачеві доведеться натиснути або
                         "OK" або "Скасувати", щоб продовжити після введення вхідного значення.

\n                Щоб відобразити розриви рядків всередині спливаючого вікна



...........window
x = window.open("", "", "width=300, height=300");   відкриває нове вікно
x.moveTo(123,123);                                     коокдинати вікна
x.focus();
x.resizeBy(234,234);                             збільшує вікно
x.close();                                        закриває вікно
  window.history.go(-2)                          повертає історію вікна, відкриваючи попередній сайт
  window.history.back()                   повертає історію вікна
x = window.open("https://www.w3schools.com","_blank","toolbar=yes, location=yes, directories=no, status=no,
    menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
..............
screen.width;    щирина екрану
screen.availHeight;      чиста висота без панелі задач
screen.colorDepth;         розпадність колір піксел


// показує в url все що йде після #
window.location.hash

/////////////////////////////////////////////////

Іноді нам потрібно отримати доступ до певних даних у нашому додатку, і в таких випадках ми можемо створити глобальні змінні в реакції
window.$name = 'king' //global variable

///////////////////////////////

function App() {
  2  const reloadPage = () => {
  3    window.location.reload()
  4  }
  5  return (
  6    <div className="App">
  7      <button onClick={reloadPage}>Reload Page</button>
  8    </div>
  9  )
  10}
  щоб примусово перезавантажити сторінку
  
