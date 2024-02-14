<script>
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event:'gtm.js'
    });
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),
    dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXX');
</script>
Цей скрипт встановлює Google Tag Manager (GTM) на вашому веб-сайті. Давайте розглянемо його елементи:

(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXX');: Це самовикликаюча функція, яка передає window, document, 'script', 'dataLayer', і 'GTM-XXXX' в якості аргументів. Це дозволяє уникнути конфліктів та забезпечує чистий простір імен.

w[l]=w[l]||[];: Цей рядок створює об'єкт window.dataLayer, якщо він не існує.

w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});: Додає об'єкт з подією gtm.js та датою запуску в масив window.dataLayer. Це ініціалізує Google Tag Manager.

var f=d.getElementsByTagName(s)[0];: Знаходить перший тег <script> на сторінці.

var j=d.createElement(s);: Створює новий тег <script>.

j.async=true;: Вказує, що скрипт має асинхронний режим завантаження.

j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;: Встановлює URL для завантаження скрипта GTM, додаючи ідентифікатор контейнера ('GTM-XXXX').

f.parentNode.insertBefore(j,f);: Вставляє новий тег <script> перед першим тегом <script> на сторінці, таким чином ініціалізуючи завантаження скрипта GTM.