disabled="disabled"
readonly="readonly"
pointer-events: none;


<!--                 -Усі властивості тексту CSS
color	Встановлення кольору тексту
direction	Визначає напрямок тексту / напрям написання
letter-spacing	Збільшує або зменшує пробіл між символами в тексті
line-height	Встановлює висоту лінії
text-align	Визначає горизонтальне вирівнювання тексту
text-decoration	Вказує декор, доданий до тексту
text-indent	Вказує відступ першого рядка в текстовому блоці
text-shadow	Вказує ефект тіні, доданий до тексту
text-transform	Контролює написання великої літери тексту
text-overflow	Вказує, яким чином повинен передаватися користувачеві переповнений контент, який не відображається
unicode-bidi	Використовується разом із властивістю вказівки для встановлення або повернення, чи слід текст замінити для підтримки декількох мов в одному документі
vertical-align	Встановлює вертикальне вирівнювання елемента
white-space	Вказує, як обробляється пробіл всередині елемента
word-spacing	Збільшує або зменшує проміжок між словами в тексті -->


               <!-- Усі властивості позиціонування CSS
            position Вказує тип позиціонування для елемента
static  розташований відповідно до нормального потоку сторінки:
relative   Встановлення властивостей верхнього, правого, нижнього та лівого сторін відносно розташованого елемента призведе до того, що він буде відрегульований далеко від його нормального положення.
fixed   Елемент розташований відносно вікна перегляду, це означає, що він завжди залишається на тому самому місці, навіть якщо сторінка прокручується.
absolute   Елемент розміщений відносно найближчого предка, розташованого натомість (замість цього розташований відносно області перегляду, як фіксований).
sticky  клейкий Елемент розташований на основі положення прокрутки користувача.
               bottom Встановлює нижній край краю для розташованого вікна
               clip Затискає абсолютно розташований елемент, може обрізати зображення при заданих координатах
               left Встановлює лівий край поля для розміщеного вікна
               right Встановлює правий край поля для розміщеного вікна
               top Встановлює верхній край краю для розташованого вікна
               z-index Встановлює порядок стека елемента, показує чи зображення має бути під текстом чи ні -->


<!--
.............................box-shadow
Замість використання межі ми використовували box-shadow властивість CSS,
щоб зробити спадне меню схожим на "карту".
-->

               <!-- //////////////All CSS Float Properties -->
<!-- box-sizing Визначає, як обчислюються ширина та висота елемента: чи повинні вони включати прокладки та рамки, чи ні
clear Вказує, які елементи можуть плавати біля очищеного елемента та на якій стороні
float Вказує, як елемент повинен плавати
overflow Вказує, що станеться, якщо вміст переповнює поле елемента(додає прокруткуб обрізає.....)
overflow-x Вказує, що робити з лівим / правим ребрами вмісту, якщо він переповнює область вмісту елемента
overflow-y Вказує, що робити з верхніми / нижніми краями вмісту, якщо він переповнює область вмісту елемента -->


                           <!-- Усі псевдокласи CSS
:link	(a:link)	Вибирає всі непроглянуті посилання
:hover	(a:hover)	використовується для вибору елементів при наведенні курсору миші на них
:active	(a:active)	Вибирає активне посилання
:visited	(a:visited)	Вибирає всі відвідані посилання
:checked	(input:checked)	Вибирає кожен перевірений елемент (де є галочки) <input>
:disabled	(input:disabled)	Вибирає кожен відключений елемент <input>
:empty	(p:empty)	Вибирає кожен <p> елемент, у якого немає даних
:enabled	(input:enabled)	Вибирає кожен включений елемент <input>
:first-child	(p:first-child)	Вибирає кожен <p> елемент, який є першою дитиною свого батька
:first-of-type	(p:first-of-type)	Вибирає кожен <p> елемент, який є першим <p> елементом його батьківського
:focus	(input:focus)	Вибирає елемент <input>, який має фокус
:in-range	(input:in-range)	Вибирає <input> елементи зі значенням у визначеному діапазоні
:invalid	(input:invalid)	Вибирає всі елементи <input> з недійсним значенням
:lang(language)	p:lang(it)	Вибирає кожен елемент <p> зі значенням атрибута lang, починаючи з "it"
:last-child	(p:last-child)	Вибирає кожен <p> елемент, який є останньою дитиною свого батька
:last-of-type	(p:last-of-type)	Вибирає кожен <p> елемент, який є останнім <p> елементом його батьківського елемента
:not(selector)	(:not(p))	Вибирає кожен елемент, який не є <p> елементом
:nth-child(n)	(p:nth-child(2))	Вибирає кожен <p> елемент, який є другою дочіркою свого батька
:nth-last-child(n)	(p:nth-last-child(2))	Вибирає кожен <p> елемент, який є другою дитиною свого батька, рахуючи з останньою дитиною
:nth-last-of-type(n)	(p:nth-last-of-type(2))	Вибирає кожен <p> елемент, який є другим <p> елементом його батьківського рахунку, рахуючи з останньою дочірньою
:nth-of-type(n)	(p:nth-of-type(2))	Вибирає кожен <p> елемент, який є другим <p> елементом його батьківського
:only-of-type	(p:only-of-type)	Вибирає кожен <p> елемент, який є єдиним <p> елементом його батьківського елемента
:only-child	(p:only-child)	Вибирає кожен елемент <p>, який є єдиною дитиною свого батька
:optional	(input:optional)	Вибирає <input> елементи без атрибута "обов'язковий"
:out-of-range	(input:out-of-range)	Вибирає <input> елементи зі значенням поза визначеним діапазоном
:read-only	(input:read-only)	Вибирає елементи <input> із вказаним атрибутом "лише для читання"
:read-write	(input:read-write)	Вибирає <input> елементи без атрибута "тільки для читання"
:required	(input:required)	Вибирає <input> елементи із заданим атрибутом "обов'язковий"
:root	root	Вибирає кореневий елемент документа
:target	()#news:target)	Вибирає поточний активний елемент #news (натиснув на URL-адресу, яка містить це ім'я якоря)
:valid	(input:valid)	Вибирає всі елементи <input> з дійсним значенням -->


                         <!-- Усі псевдоелементи CSS
::after	(p::after)	Вставте вміст після кожного елемента <p>
::before	(p::before)	Вставте вміст перед кожним <p> елементом
::first-letter	(p::first-letter)	Вибирає першу букву кожного елемента <p>
::first-line	(p::first-line)	Вибирає перший рядок кожного <p> елемента
::selection	(p::selection)	Вибирає частину елемента, яку вибирає користувач -->

<!-- .clearfix:after {
content: "";
display: table;
clear: both;
}
наступний контент відображатиметься з нового рядка
<div class="clearfix"></div> -->





<!--
..................overflow Властивість має наступні значення:
visible- за замовчуванням. Перелив не обрізається. Вміст відображається поза полем елемента
hidden - Переповнення обрізається, а решта вмісту буде невидимою
scroll - Переповнення обрізається, і додається смуга прокрутки, щоб побачити решту вмісту
auto- Подібно до scroll, але він додає смуги прокрутки лише за потреби
overflow-x Вказує, що робити з лівим / правим ребрами вмісту, якщо він переповнює область вмісту елемента
overflow-y Вказує, що робити з верхніми / нижніми краями вмісту, якщо він переповнює область вмісту елемента -->

<!--
..................display значення вбудованого блоку
Наступний приклад показує різну поведінку
display: inline  відображати елементи списку горизонтально
display: inline-block відображати елементи списку горизонтально, дозволяє сьворити блок із заданими шириною і висотою
display: block відображати елементи списку вертикально, дозволяє сьворити блок із заданими шириною і висотою -->
<!-- display: flex;                     https://www.w3schools.com/css/css3_flexbox.asp                                   -->
<!--
............Комбінатор - це те, що пояснює стосунки між селекторами.
div p     Виділяє всі <p> елементи всередині <div> елементів
div > p   Вибирає всі <p> елементи, де батьків є <div>
div + p   Вибирає всі <p> елементи, які розміщуються одразу після <div> елементів
p ~ ul    Вибирає кожен <ul> елемент, якому передує елемент <p> -->
<!-- ///////////////////////////////////////////////////////// -->


<!-- .................Усі селектори CSS-атрибутів
[attribute]	[target]	Виділяє всі елементи з цільовим атрибутом
[attribute=value]	[target=_blank]	Виділяє всі елементи за допомогою target="_blank"
[attribute~=value]	[title~=flower]	Виділяє всі елементи з атрибутом заголовка, що містить слово "flower"
[attribute|=value]	[lang|=en]	Вибирає всі елементи зі значенням атрибута lang, починаючи з "en"
[attribute^=value]	a[href^="https"]	Вибирає кожен елемент <a>, з якого починається значення атрибута href "https".............значення якого починається на.....
[attribute$=value]	a[href$=".pdf"]	Вибирає кожен елемент <a>, значенням якого є атрибут href ".pdf".....знячення якого закінчується на....
[attribute*=value]	a[href*="w3schools"]	Вибирає кожен елемент <a>, значення атрибута href містить підрядку "w3schools".....значення якого містить де небуть то значення -->

<!-- .....................лічильники......... -->
<!-- counter-reset - Створює або скидає лічильник
counter-increment - Збільшення лічильної величини
content - Вставляє створений вміст
counter()або counters()функція - додає елементу значення лічильника
.......    приклад лічильника для впорядкованого списка
ol {
  counter-reset: section;
  list-style-type: none;
}
li::before {
  counter-increment: section;
  content: counters(section,".") " ";
} -->





///////////////////////////
text-align: left;
text-decoration: line-through;     перекреслює слово
text-transform: uppercase;        всі літери з великої
text-transform: lowercase;        всі літери з малої
text-transform: capitalize;       перші літери в словах з великої
text-indent: 50px;              відступ в абзаці першого рядка
text-shadow: 3px 2px red;      тінь
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;  (text-shadow: 2px 2px 4px #000000;)
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);          на фотографії
vertical-align: middle;         вирівнювання іконки по середині тексту(top, bottom)
font-family: "Times New Roman", Times, serif;
font-family: Arial, Helvetica, sans-serif;
font-size: 100%;      розмір
font-style: italic;        косий шрифт
font-weight: bold;        жирний шрифт
resize: none;          не дозволяє міняти вручну  textarea .....(resize: both;, resize: horizontal;, resize: vertical;)
word-break: keep-all;    слова які не поміщаються переносяться на наступний рядок
word-break: break-all;    слова які не поміщаються обрізаються в тому місці і переносяться на наступний рядок
word-wrap: break-word;   якщо є довге слово то ту частину яка не влізла переносять на наступний рядок
white-space: nowrap;        обрізає по заданій ширині і не переходить на наступний рядок
text-overflow: ellipsis;    в кінці як обрізає ставить три крапки (означає що є продовження)
div:hover {
  overflow: visible;        при наведені буде видно обрізаний текст
}

resize: both;    дозволяє міняти розмір елемента
overflow: auto;    додає прокрутку
outline: 4px solid red;   рама яка знаходиться за рамою border
outline-offset: 15px;     вказує на якій відстані має бути ця рамка від рамки border

object-fit: cover;      це, вирізаємо сторони зображення, зберігаючи пропорції, а також заповнюючи простір, як це: -->

opacity:0.6; прозорість елемента


text-shadow: 2px 2px 4px #000000;
.....................
для кнопки тінь
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);



text-align: justify;   розтягує текст на всю ширину

text-overflow  Властивість CSS визначає, як користувачеві слід надсилати повідомлення
про переповнений вміст, який не відображається. Приклад: overflow: hidden; text-overflow: ellipsis;
word-wrap  Властивість CSS дозволяє розбивати довгі слова та переходити до наступного рядка. Приклад: word-wrap: break-word;
word-break  Властивість CSS визначає правила розбиття рядків. Приклад:  word-break: keep-all;
writing-mode  Властивість CSS визначає, чи розташовані рядки тексту горизонтально чи вертикально. Приклад:   writing-mode: vertical-lr;


..
button {
  opacity: 0.6;
  cursor: not-allowed;        курсор буде забороненим знаком над кнопкою
}
...........
overflow-x:auto;     добавляє прокрутку по Х
........
visibility: hidden;           приховує елемент
display: none;
..........
position: fixed;          фіксує елемент (при прокрутці лишається на свому місці)
  bottom: 0;
  right: 0;
......
position: relative;
position: absolute;
position: -webkit-sticky;
position: sticky;
......
z-index: -1;        відображається під іншим елементом
.........
clip: rect(0px,60px,200px,0px);       відображає тільки визначений фрагмент картинки
.........
opacity: 0.5;          робить елемент прозорим
.........
overflow: visible;
overflow: hidden;       обрізає те що не поміщається
overflow: scroll;      добавляє прокрутку по Х і У
overflow: auto;
overflow-x: hidden;     видаляє прокрутку по Х
overflow-y: scroll;      додає прокрутку по У
.............
float: right;        плаває з права
clear: left;         стає з ліва з нового рядка
..
.clearfix::after {     картинка не буде виходити за рамки div і буде плавати в рамках class="clearfix"
  content: "";
  clear: both;
  display: table;
}
..............width коробки не міняється від padding
* {
  box-sizing: border-box;
}

...............сповільнює аніміцію
-webkit-transition: 0.5s;
 transition: 0.5s;

box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);      тіні


border: 1px solid black;
outline: 1px solid red;
outline-offset: 15px;       дає відстань між border і outline




..........................CSS 2D перетворює
-ms-transform: translate(10px,10px); /* IE 9 */
transform: translate(10px,10px);                  переміщує елемент по Х і У
.....
-ms-transform: rotate(20deg); /* IE 9 */
transform: rotate(20deg);                         переміщує під кутом
............збільшує елемент в 3 рази
-ms-transform: scale(2,3); /* IE 9 */
transform: scale(3,3);
.....
-ms-transform: skew(20deg,10deg); /* IE 9 */
 transform: skew(20deg,10deg);
.........робиться зміщення по іксу(робиться ромб)
-ms-transform: skewX(20deg); /* IE 9 */
transform: skewX(20deg);
...
-ms-transform: matrix(1, -0.3, 0, 1, 0, 0); /* IE 9 */
  transform: matrix(1, -0.3, 0, 1, 0, 0);



  ...............................var
  :root {
    --asd: red;
  }
  div {
    background-color: var(--asd);
  }



  .......всі елементи з права
  body {
  direction: rtl;
  }





  resize: none;
  Використовуйте resize властивість, щоб запобігти зміні розміру текстових областей
  (вимкніть "захоплювач" у правому нижньому куті):