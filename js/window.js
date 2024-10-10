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




  // перевірка наявності програми на пристрої
Щоб перевірити, чи встановлена певна аплікація на пристрої користувача при використанні React, 
ви можете використати API Window.navigator. Ось декілька кроків, які можна виконати:

Перевірити наявність потрібного протоколу: Багато аплікацій реєструються як спеціальні протоколи, наприклад mailto: 
для поштових клієнтів або tg:// 
для Telegram. Ви можете перевірити, чи підтримується потрібний протокол в браузері за допомогою navigator.registerProtocolHandler.

jsxCopyconst isAppInstalled = () => {
  try {
    const isProtocolSupported = navigator.registerProtocolHandler
      ? navigator.registerProtocolHandler("тут-протокол", "/")
      : false;
    return isProtocolSupported;
  } catch (e) {
    return false;
  }
};

Перевірити наявність спеціальних рядків користувацького агента: 
Деякі аплікації додають спеціальні рядки до властивості navigator.userAgent. 
Ви можете перевірити їх наявність за допомогою регулярних виразів.

jsxCopyconst isAppInstalled = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /назва-аплікації/i.test(userAgent);
};

Використання спеціальних API: Деякі аплікації надають власні API для перевірки їх встановленості. 
Наприклад, Facebook App має API navigator.getFacebookUri().

jsxCopyconst isAppInstalled = () => {
  return !!navigator.getFacebookUri;
};

Використання інтент-фільтрів на Android: 
На пристроях Android ви можете використовувати інтент-фільтри для перевірки встановленості певної аплікації. 
Для цього потрібно використовувати спеціальний сервіс веб-переглядача.

Зауважте, що ці методи не є універсальними та можуть не спрацювати для всіх аплікацій. 
Крім того, деякі браузери можуть блокувати певні функції з міркувань безпеки. 
handlePriceReplaceТому, перед використанням цих методів, рекомендується перевірити їх сумісність з цільовими платформами та браузерами.
  

// 2 спосіб перевірки на наявність
const checkApp = (scheme) => {
  const now = new Date().getTime();
  setTimeout(() => {
    if (new Date().getTime() - now > 100) return;
    window.location = "https://play.google.com/store/apps/details?id=org.telegram.messenger";
  }, 50);
  window.location = scheme;
};

// Використання
checkApp("tg://");  // для Telegram


// 3 У вашому JavaScript-коді ви можете використовувати API так:
javascriptCopyif ('getInstalledRelatedApps' in navigator) {
  navigator.getInstalledRelatedApps()
    .then((relatedApps) => {
      if (relatedApps.length > 0) {
        console.log('Пов'язаний додаток встановлено');
      } else {
        console.log('Пов'язаний додаток не встановлено');
      }
    })
    .catch((error) => console.error('Помилка:', error));
} else {
  console.log('API getInstalledRelatedApps не підтримується');
}


// най кращис спосіб перевірки чи є встановлений додаток
function checkApp(iosScheme, androidPackage, androidUrl, fallbackUrl) {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const openApp = (scheme, androidIntent) => {
    const start = Date.now();
    const ifr = document.createElement('iframe');
    ifr.style.display = 'none';
    ifr.src = scheme;

    const handleBlur = () => {
      clearTimeout(timer);
      window.removeEventListener('blur', handleBlur);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    };

    window.addEventListener('blur', handleBlur);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    document.body.appendChild(ifr);

    const timer = setTimeout(() => {
      document.body.removeChild(ifr);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (Date.now() - start < 2000) {
        window.location = fallbackUrl;
      }
    }, 1500);
  };

  if (isiOS) {
    openApp(iosScheme);
  } else if (isAndroid) {
    openApp(androidUrl);
  } else {
    window.location = fallbackUrl;
  }
}

// Використання:
checkApp(
  'tg://resolve?domain=telegram',  // iOS URL-схема
  'org.telegram.messenger',  // Android package name
  'intent://resolve?domain=telegram#Intent;package=org.telegram.messenger;scheme=tg;end;',  // Android URL-схема
  'https://telegram.org'  // Fallback URL
);
