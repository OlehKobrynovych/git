HTML DOM -об'єктна модель документа. 
Використовується для отримання, зміни, додавання або видалення елементів HTML.
Відповідно до об'єктної моделі документа кожен HTML-тег є об'єктом. Вкладені теги є дітьми 
батьківського елемента. Текст, що знаходиться всередині тега, також є об'єктом.
Даже объект document, представляющий весь документ, формально является DOM-узлом.
Доступ до HTML DOM можна отримати за допомогою JavaScript (та інших мов програмування).
        Существует 12 типов узлов. Но на практике мы в основном работаем с 4 из них:
document – «входная точка» в DOM.
узлы-элементы – HTML-теги, основные строительные блоки.
текстовые узлы – содержат текст.
комментарии – иногда в них можно включить информацию, которая не будет показана, но доступна в DOM для чтения JS.

.......можете використовувати такі властивості вузла для навігації між вузлами за допомогою JavaScript:
parentNode
childNodes[nodenumber]       var myTitle = document.getElementById("demo").childNodes[0].nodeValue;
firstChild                  var myTitle = document.getElementById("demo").firstChild.nodeValue;
lastChild
nextSibling
previousSibling


// Файл cookie - це частина даних (пари ключ-значення), яка зберігається на комп'ютері 
// користувача веб-браузером під час перегляду веб-сайту. Файли cookie створені для надійного 
// механізму веб-сайтів запам’ятовувати інформацію, що містить інформацію про стан, 
// або реєструвати активність користувача в режимі перегляду або перевіряти особу користувача.
alert( document.cookie ); // cookie1=value1; cookie2=value2;

имя и значение куки должны быть закодированы.
одно куки вмещает до 4kb данных, разрешается более 20 куки на сайт (зависит от браузера).

path=/, по умолчанию устанавливается текущий путь, делает куки видимым только по указанному пути и ниже.
domain=site.com, по умолчанию куки видно только на текущем домене, если явно указан домен, то куки видно и на поддоменах.
expires или max-age устанавливает дату истечения срока действия, без них куки умрёт при закрытии браузера.
secure делает куки доступным только при использовании HTTPS.
samesite запрещает браузеру отправлять куки с запросами, поступающими извне, помогает предотвратить 
XSRF-атаки.


<link rel="stylesheet" type="text/css" href="styles.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<a target="_blank" href="https://www.google.com/"></a>

d0.className +=' dkim2';
x.classList.toggle('active');
dots[i].className.replace(" active", "");
aa[i].classList.remove('active');
event.currentTarget.className += "active";

onclick="One(); Two(); Three()"
onblur="myFunction()"           коли курсор покидає елемент
onchange="myFunction()"            коли курсор покидає елемент
onselect="myFunction()"          коли виділяється текст спрацьовує
onmousemove="myFunction(event)"   коли мишка перемішається
onmouseout="clearCoor()"           коли мишка залишає елемент
ondblclick="myFunction()"           подійний кпік

<article>стаття</article>
<aside>бічна колонка</aside>

<button type="button" name="Submit" disabled>Submit</button>
<input type="email" name="user_email" required>

Атрибут data- * використовується для зберігання користувальницьких даних
<li onclick="showDetails(this)" id="owl" data-asd="bird">Owl</li>
const asdType = this.getAttribute("data-asd");


<figure>
  <img src="https://www.w3resource.com/images/w3logo6.png" alt="w3resource Logo" width="149" height="52" />
  <figcaption>Official Logo of w3resource.com</figcaption>
</figure>

<map name="Map">
    <area shape="rect" coords="8,5,100,77" href="https://www.w3resource.com/mysql/mysql-tutorials.php" target="_blank" alt="mysql   tutorial" hreflang="en" media="handheld" rel="alternate" download>
    <area shape="circle" coords="155,93,59" href="https://www.w3resource.com/php/php-home.php" target="_blank" alt="php tutorial" hreflang="en" media="handheld" rel="alternate" download>
    <area shape="rect" coords="197,136,306,188" href="https://www.w3resource.com/sql/sql-tutorials.php" alt="sql tutorials" hreflang="en" media="handheld" rel="alternate" download>
</map>

<picture>
    <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
    <source media="(min-width: 465px)" srcset="img_white_flower.jpg">
    <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>

  <!-- сценарій виконується, коли сторінка закінчила розбір -->
<script defer src="https:/async-example.js"></script>
  <!-- сценарій виконується одночасно із загрузкою сторінки -->
<script async src="https:/async-example.js"></script>


<table border="1">
  <caption>Names</caption>
  <colgroup>
    <col span="2" style="background-color:red">      міняє колір для двох перших стовпчиків
    <col style="background-color:yellow">            міняє колір для наступного третього стовпчика
  </colgroup>
  <tr>
    <td rowspan="2">$100</td>             обєднює рядки
    <td>January</td>
    <td>January</td>
  </tr>
  <tr>
    <td>January</td>
    <td colspan="2">Sum: $180</td>       обєднює стовпці
  </tr>
</table>


..................................................css
У CSS є чотири різні комбінатори:
............Комбінатор - це те, що пояснює стосунки між селекторами.
div p     Виділяє всі <p> елементи всередині <div> елементів
div > p   Вибирає всі <p> елементи, де батьків є <div>
div + p   Вибирає всі <p> елементи, які розміщуються одразу після <div> елементів
p ~ ul    Вибирає кожен <ul> елемент, якому передує елемент <p> -->

a:link - нормальне, невідоме посилання
a:visited - посилання, яке відвідував користувач
a:hover - посилання, коли користувач мишає над ним
a:active - посилання в момент його натискання 

letter-spacing	Збільшує або зменшує пробіл між символами в тексті
line-height	Встановлює висоту лінії
text-align	Визначає горизонтальне вирівнювання тексту
text-decoration	Вказує декор, доданий до тексту
text-shadow	Вказує ефект тіні, доданий до тексту
text-transform	Контролює написання великої літери тексту
text-overflow	Вказує, яким чином повинен передаватися користувачеві переповнений контент, який не 
відображається
vertical-align	Встановлює вертикальне вирівнювання елемента

static  розташований відповідно до нормального потоку сторінки:
relative   фів
fixed   Елемент розташований відносно вікна перегляду, це означає, що він завжди залишається на тому самому місці, навіть якщо сторінка прокручується.
absolute   Елемент розміщений відносно найближчого предка, розташованого натомість (замість цього розташований відносно області перегляду, як фіксований).
sticky  клейкий Елемент розташований на основі положення прокрутки користувача.


псевдоелементи CSS
p::after	Вставте вміст після кожного елемента <p>
p::before	Вставте вміст перед кожним <p> елементом
p::first-letter	Selects the first letter of every <p> element
p::first-line	Selects the first line of every <p> element
p::selection  виділений елемент

Усі селектори CSS-атрибутів
a[href^="https"]	Вибирає кожен елемент <a>, значення якого починається на.....
a[href$=".pdf"]	Вибирає кожен елемент <a>, знячення якого закінчується на....
a[href*="w3schools"]	Вибирає кожен елемент <a>, значення якого містить де небуть то значення


resize: both;    дозволяє міняти розмір елемента
opacity:0.6;     прозорість елемента
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);  для кнопки тінь

body {
  background: lightblue url("1.gif") bottom right no-repeat;
  background-image: url('1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;  фонове зображення не буде прокручуватися разом зі сторінкою
  background-size: cover;    фонове зображення буде масштабуватися, щоб охопити всю область вмісту.
                             зберігає співвідношення сторін, і частина фонового зображення може бути обрізана:
}

background-image: linear-gradient(90deg, red 10%, green 85%, blue 90%);


//...................................flex
display: flex;
flex-direction: row;   розміщує еоробки з ліва на право
justify-content: flex-end;
justify-content: space-around;
justify-content: space-between;

align-items: center;     для вирівнювання гнучких елементів по вертикалі.
align-content: flex-start;    використовується для вирівнювання гнучких ліній.
align-content: space-between;   використовується для вирівнювання гнучких ліній.

align-self: center;     можна використовувати для вирівнювання для одного з елементів з групи
align-self: flex-start;    вирівнювання по горизонталі для окремих елементів
align-self: flex-end;
align-self: baseline;
align-self: stretch;

flex: 2;  робить елемент в два рази більшим за інші
flex: 25%;
flex: 0 0 200px;   елемент flex не піддається розтягуванню (0), не зменшується (0), а початкова довжина 200 пікселів:

flex-wrap: wrap;   визначає , чи повинен гнучкі елементи переноситися чи ні.
flex-wrap: nowrap;

order: -1;   переставляє box2 на місце box1
...................




..................grid
display: grid;
grid-template: minmax(100px, auto) 1fr minmax(70px, auto) / 1fr;
grid-template-areas:
'header header header header header header'
'menu main main main right right'
'menu footer footer footer footer footer';
grid-area: header;
grid-area: menu;

grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));  /*клітинки будуть переходити на наступний рядок*/
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));  /*будуть розтягуватися при потребі і клітинки будуть переходити на наступний рядок*/

grid-column: 3 / 5;      /*комірка починається з 3 і закінчуєьбся перед 5 коміркою  */
grid-column: 3 / span 2;

order: -1;  /*буде на самому початку*/

//відстань між комірками
grid-gap: 50px 100px;
grid-column-gap: 50px;

justify-items: end;
align-items: center;
.................


//error placeholder
input:invalid:not(:placeholder-shown) + [data-validation-text] {
	color: red !important;
	display: block;
}



............міняємо властивості через змінні css
// ./style.css
:root {
  --color: #2E343F;
  --position: 0;
  --raduius: 0;
}

.box {
  transform: translateX(var(--position));
  background: var(--color);
  border-radius: var(--radius);
}

// ./main.js
const root = document.documentElement;
function changeValue(id, value) {
  const suffix = (id != 'color' ? '%' : '');
  root.style.setProperty(`--${id}`, value + suffix);
  console.log(value + suffix)
}





















.......................sass / less
//_variables.scss
$green: #26bc8c;   //sass
@green: #26bc8c;   //less

.logo {
  background-color: rgba($green, .3);

  &:hover {
    color: red;
  }
}

////////////Mixins
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box { @include transform(rotate(30deg)); }


//
@mixin skills {
  width: 100%;
  height: 3px;
  background-color: #d8d8d8;
  position: relative;
  margin-bottom: 16px;
}

.skills-1 {
  @include skills;
}


















.................................................ajax 
AJAX асинхронний JavaScript і XML
набір технологій взаємодії клієнта і сервера
//AJAX — підхід до побудови користувацьких інтерфейсів веб-програми, за яких вебсторінка, 
//не перезавантажуючись, у фоновому режимі надсилає запити на сервер і сама звідти довантажує потрібні 
//користувачу дані.

REST (Representational State Transfer) - є архітектурним стилем, використовує HTTP як протокол передачі 
даних для запитів і відповідей. Запит: GET, POST, PUT, DELETE.

fetch(url, {
  method: 'POST', // или 'PUT'
  body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(result => /* обрабатываем результат */)


//2.
  (async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    ...
  })();



  ................get axios
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// ..................POST axios
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });






















.......................SQL 
SELECT - витягує дані з бази даних
UPDATE - оновлення даних у базі даних
DELETE - видаляє дані з бази даних
INSERT INTO - вставляє нові дані в базу даних
CREATE ДАНІ - створює нову базу даних
ALTER DATABASE - змінює базу даних
CREATE TABLE - створює нову таблицю
ALTER TABLE - змінює таблицю
DROP TABLE - видаляє таблицю
CREATE INDEX - створює індекс (ключ пошуку)
DROP INDEX - видаляє індекс

SELECT * FROM Products WHERE Price BETWEEN 50 AND 60;         в заданих межах
SELECT * FROM Customers WHERE City LIKE 's%';     шукає з буквою  's'

SELECT  Country, CustomerName FROM Customers
ORDER BY                       СОРТУЄ
Country ASC,                   ПО ЗРОСТАННЮ
CustomerName DESC;             ПО СПАДАННЮ

//використовується для вставки нових записів у таблицю.
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

//використовується для зміни існуючих записів у таблиці.
UPDATE table_name
SET ContactName='Alfred Schmidt', City='Frankfurt'
WHERE CustomerID=1;

//використовується для видалення існуючих записів у таблиці.
DELETE FROM table_name WHERE condition;


















............................git 
// розподілена система керування версіями файлів та спільної роботи.
//для виходу з редатора
:wq

.gitignore
git init
git status

//1.
git add . 
//Якщо додали файли в стадію очікування, але передумали і не хочете додавати деякі з них
git rm -cached asd.html

//2.
git commit -m "Коментарі"
//Якщо ви випадково помилково ввели повідомлення про фіксацію, ви можете змінити його, використовуючи.
git commit --amend - m "new message"

//Oтримаєте список всіх коммітов що були зроблені у проекті
git log --oneline --all --graph

//3.
//Щоб відправити файли
git push -u origin master

//Щоб перейти до гілки або комміта
git checkout id
//для повернення до поточної версії проекту
git checkout master

//Для створення гілки
git branch name
//Щоб переглянути список гілок
git branch -a

//Для об'єднання гілок, де name це гілку, яку ви хочете приєднати до головної гілки.
git merge name

//Для того, щоб зв'язати створений нами локальний репозитарій з віддаленим:
git remote add origin https://github.com/project.git

//Як запросити зміни з віддаленого сховища
//1. автоматично зливає коммітов, не даючи вам спочатку переглянути їх
git pull
git pull origin master
//2. Однак він не зливає їх в поточну гілку, a зберігає їх в локальному репозиторії.
git fetch
// Щоб злити коммітов в основну гілку, потрібно використовувати
git merge

//для відміни індексації файла якщо він був за комітений
git revert HEAD --no-edit

git reset HEAD text.txt

//для приєднання голови гілки
git reset --hard commit_ID
git reset --hard master

//Я на гілці asd i зливаю свої коміти
git rebase origin/master
//якщо є конфлікти, то виправляю і
git add .
git rebase --continue
git push
git push --force
// i на github.com нажимаємо ребуйс мардж






























...............................................js 
"use strict";

string
number
boolean
bigint
object
function
null
undefined
Symbol

Infinity
-Infinity
NaN



typeof(x)
typeof x;

console.log(Number.isNaN(NaN))//true
console.log(Number.isFinite(-Infinity))//true

(123).toString();
String(value)
Number(x)
Boolean(10 > 9);

//spread оператор 
const dayOff = new Date(...day);

try       Оператор дозволяє перевірити блок коду на наявність помилок.
catch     Оператор дозволяє обробляти помилку.
throw     Оператор дозволяє створювати призначені для користувача помилки.
finally   Оператор дозволяє виконати код, після того, як спробувати зловити, незалежно від результату.

console.time(total);
myff(a, b);
console.timeEnd(total);

e.preventDefault();







....................Array.isArray([]); // true
arr.push('asd');
arr.pop();
arr.shift();
arr.unshift('asd');

let arr = str.split(', ');   розбиває рядок на масив заданим роздільником
let str = arr.join(';');   Створюється рядок із заданим роздільником

arr.slice(1, 3);                 копіює
arr.splice(1, 0, 'asd', 'asd2');       index, del, el, el ...., el
arr.concat('asd', 'asd2');


arr.indexOf(item, from)- шукає, item починаючи з індексу from, і повертає індекс там, де його було знайдено, інакше -1.
arr.lastIndexOf(item, from) - те саме, але шукає справа наліво.
arr.includes(item, from)- шукає, item починаючи з індексу from, повертає, true якщо знайдений.

arr.map(function(item, index, array) {....});
arr.reduce((accumulator, item, index, array) => {accumulator + item}, [initial]);
arr.forEach((item, index, array) => alert(`${item} is at index ${index} in ${array}`););

replace(/old/i,"new")     Метод замінює вказане значення з іншим значенням в рядку:
/^(Bang){1,2}!/.test(v)        true or false
RegExp(`${s}`,'gi').test(e)
search()      Метод використовує вираз для пошуку відповідності, і повертає позицію матчу.
/e/.exec()      шукає і повертає сам елемент, індекс елемента і цілі елементи
/e/.exec("The best");   //"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
"The rain in SPAIN mainly".match(/ain/g);              шукає всі слова в стрічці

arr.filter(function(item, index, array) {item.id < 3});
find()            Метод повертає значення першого елемента масиву , який проходить тестову функцію.
findIndex()       Метод повертає індекс першого елемента масиву , який проходить тестову функцію.
every()           Перевірка масиву , якщо всі значення масиву пройдуть тест.(true, false)
some()            Перевірка мвсиву , якщо зоч одне значення масиву пройде тест.(true, false)

[1, 2, [9, 10]].flat(Infinity);    // [1, 2, 9, 10]
[1, 2, , 4, , 5].flat();           // [1, 2, 4, 5]


// Повторіть той самий пункт кілька разів
Array(3).fill('edabit');   // ➞ ["edabit", "edabit", "edabit"]
Array(5).fill(13);   // ➞ [13, 13, 13, 13, 13]

arr.fill(value[, start[, end]])  заповнює (змінює) всі елементи масиву з початкового індексу
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]


'аsd'.repeat(2);  // 'asdasd'  - створює новий рядок, що містить вказану кількість об'єднаних разом копій рядка

arr.sort();                                  для сортування масиівв
arr.sort((a, b) => a - b);      для чисел в масиві
arr.sort((a, b) => b - a);      для сортування від більшого до меншого
arr.sort((a, b) => a.localeCompare(b) );  Для алфавітів краще використовувати

arr.reverse();


Array.from('fooo');       // ["f", "o", "o", "o"]
Array.from('foo', el => el + 1);   // ["f1", "o1", "o1"]

var id = setInterval(myff, 10);
clearInterval(id);

let timerId = setTimeout(myff, 10);
clearTimeout(timerId);


// єдиний спосіб глибокого клонування масиву - це використання JSON.parse(JSON.stringify(arr)).
// Однак, не використовуйте, якщо ваш масив може включати функції, оскільки він повернеться null.
1)   5.79ms -> clone(arr => Object.values(arr));
2)   7.23ms -> clone(arr => [].concat(arr));
3)   9.13ms -> clone(arr => arr.slice());
4)  24.04ms -> clone(arr => { const a = []; for (let val of arr) { a.push(val); } return a; });
5)  30.02ms -> clone(arr => [...arr]);
6)  39.72ms -> clone(arr => JSON.parse(JSON.stringify(arr)));
7)  99.80ms -> clone(arr => arr.map(i => i));
8) 259.29ms -> clone(arr => Object.assign([], arr));
9) Maximum call stack size exceeded -> clone(arr => Array.of(...arr));




var myJSON = JSON.stringify(myObj);          об’єкті JavaScript, ви можете перетворити у JSON та надіслати його на сервер:
var myObj = JSON.parse(myJSON);              формат JSON, перетворити у об’єкт JavaScript:
..............для дати і функцій (сам написав)
var text = '{"name":"John", "age":"function() {return 30;}", "city":"New York", "birth":"1986-12-14"}';
var obj = JSON.parse(text, function(k, v) {
  if (k == "age") {
    return v = eval("(" + v + ")");
  }
  if (k == "birth") {
    return new Date(v);
  }
  else
  {
    return v;
  }
});


obj.age = eval("(" + obj.age + ")");


parseFloat('3.14suff');   // 3.14    Розбирає рядок і повертає число з плаваючою точкою
parseInt('42px', 10);     // 42       Розбирає рядок і повертає ціле число
toExponential ()      Повертає рядок з числом, округленим і записаним, використовуючи експоненціальні позначення.
toFixed ()            Повертає рядок із числом, округленим і записаним із заданою кількістю десяткових знаків.
toPrecision ()        Повертає рядок із номером, записаним із заданою довжиною

Math.round(x) повертає значення х округлення до найближчого цілого числа:
Math.trunc(13.37);    // 13   повертає цілу частину числа шляхом видалення - дробові числа.
Math.ceil(7.004);  // 8     завжди округлює число до наступного найбільшого цілого числа.
Math.floor(x)повертає значення х округляється вниз до найближчого цілого числа:
Math.pow(x, y) повертає значення x до сили y:
Math.sqrt(x) повертає квадратний корінь x:
Math.abs(x) повертає абсолютне (позитивне) значення x:
Math.sin(x) повертає синус (значення між -1 та 1) кута x (заданий у радіанах).
Math.min()і Math.max()може бути використаний для пошуку найнижчого або найвищого значення у списку аргументів:
Math.random() повертає випадкове число між 0 (включно) та 1 (виключно):
Math.floor(Math.random() * 10);        для повернення випадкових цілих чисел.

for - кілька разів перебирає блок коду
for/in - циклічні властивості об'єкта
for/of - циклічні значення через ітерабельний об'єкт
while - цикли через блок коду, коли задана умова є істинною
do/while - також проходить цикл через блок коду, коли вказана умова є істинною


// Будь-який об’єкт JavaScript може бути перетворений в масив, використовуючи:
// kim        [Object.keys(obj), Object.values(obj)]
Object.keys(object)
Object.values(обєкт)     

//перетворює обєкт в масив
Object.entries({ 0: 'a', 1: 'b', 2: 'c' });     // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
Object.entries('foo'));                // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
//перетворює масив у обєкт
Object.fromEntris(arr);


//Object.assign(dest,source1,{}), он копирует все перечисляемые свойства из одного или нескольких объектов в объект dest.
let dest={};
Object.assign(dest,{prop:'val'},{prop2:'val2'})// {prop:'val',prop2:'val2'}


.....................................Prototype
В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом, либо null.
.........prototype   Властивість JavaScript дозволяє додавати нові властивості до конструкторів об'єктів:
Person.prototype.nationality = "English";
........prototype    Властивість JavaScript також дозволяє додавати нові методи до конструкторів об'єктів:
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};


__proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]

let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk взят из прототипа
rabbit.walk(); // Animal walk



..................................Call (), Apply () і Bind ()
використовуються в JavaScript для того, щоб запозичити методи і виставляти значення this.
використовють в плані виставлення значення this у функцій, для створення і
виконання варіативних функцій і для запозичення методів і функцій.
....call()    За допомогою методу можна написати метод, який можна використовувати на різних об'єктах.
...................Різниця полягає в:
call()Метод приймає аргументи окремо .
apply()Метод приймає аргументи як масив .
Параметри в bind() ідентичні call(), але bind() не викликається відразу ж. Замість цього, bind() 
повертає функцію з контекстом this, який вже пов'язаний. Через це bind() корисний тоді, коли ми 
не знаємо всі аргументи наперед.

let obj = {
  name: 'igor',
  last: 'kob'
};

let fun = {
  fullName: function(city, country) {
    return this.name + ' ' + this.last + ' ' + city + ' ' + country;
  }
};
console.log(fun.fullName.call(obj, 'lviv', 'ukraine'));      // igor kob lviv ukraine
console.log(fun.fullName.apply(obj, ['lviv', 'ukraine']));   // igor kob lviv ukraine
let bind2 = fun.fullName.bind(obj, 'lviv')
console.log(bind2);                                         // ƒ(city, country) { return this.name + ' ' + this.last + ' ' + city + ' ' + country;}
console.log(bind2('ukraine'));                              // igor kob lviv ukraine



This— це ключове слово, що використовується в JavaScript, яке має особливе значення, що залежить 
від контексту, в якому воно застосовується.
this- це поточний об'єкт при виклику «через точку» і новий об'єкт при конструюванні через new.


delete person.age;   видаляє елемент з обєкта



.....................................Date()
var d = new Date();
d.getFullYear();             рік
d.getMonth() + 1;            місяць
d.getDate();                день
d.getHours();
d.getMinutes();
d.getSeconds();
d.toLocaleTimeString();


..............................class 
//це розширюваний шаблон коду для створення об'єктів, який встановлює в них початкові властивості 
і методи.
class - це "особливі функції"

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {           клас під назвою "Модель", який успадкує методи від класу "Автомобіль":
  constructor(brand, mod) {
    super(brand);                      отримуємо доступ до батьківських властивостей та методів.
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");




............................Додаємо новий метод
 class NewClass {
  // Додаємо дві властивості класу, classPropOne і classPropTwo
  constructor(classPropOne, classPropTwo) {
   this.classPropOne = classPropOne;
   this.classPropTwo = classPropTwo;
  }
  // Додаємо метод класу з ім'ям someClassMethod
  someClassMethod() {
   return this.classPropOne;
  }
 }
 .....
 // Додаємо новий метод з ім'ям newClassMethod в клас NewClass
 NewClass.prototype.newClassMethod = function() {
  return this.classPropOne + ' та ' + this.classPropTwo;
 }
 // Створюємо примірник NewClass під назвою foo
 let foo = new NewClass('foo', 'bar');
 console.log(foo.newClassMethod()); // Вивід: 'foo та bar'




...........................
event.clientX;    показує координати при перемішені мишки















..............................RegExp
^ - Відповідає початку введення.
$ - Відповідає в кінці введення.
\b - обозначает границу слова,
\B — не границу слова,
\d - Відповідає будь-якій цифрі (арабською цифрою). Еквівалентно [0-9].
\D - Відповідає будь-якому символу, який не є цифрою (арабською цифрою). Еквівалентно [^ 0-9]
\w - Відповідає будь-якому буквено-цифровому символу з основного латинського алфавіту, включаючи підкреслення. Еквівалентно [A-Za-z0-9_]. 
\W - Відповідає будь-якому символу, який не є символом слова, з основного латинського алфавіту. Еквівалентно [^ A-Za-z0-9_].
\s - Збігає один пробіл із пробілом, включаючи пробіл, вкладку, канал форми, канал рядків та інші пробіли Unicode.
\S - Відповідає одному символу, відмінному від пробілу.

/ /g -	Глобальний пошук.	RegExp.prototype.global
/ /i -	Пошуковий нечутливий пошук.	RegExp.prototype.ignoreCase
/ /m -	Багаторядковий пошук.	RegExp.prototype.multiline

\bJava\b - в строке “Java and JavaScript” найдутся первые 4 символа,
\bJava\B — символы c 10-го по 13-й (в составе слова “JavaScript”).
?	- {0,1}	Ноль или одно вхождение
*	- {0,}	Ноль или более
+	- {1,}	Одно или более
(\w)\1\2  - соответствуют строки “aaaa”, “abab”, но не соответствует “aabb”.


/(\.js|\.jsx)$/
/^\d{5}$/         // "32554" ➞ true   повинні бути точно 5-ти el і містити лише цифри
/([0-9]+)×([0-9]+)/     // 1440×900 pixels
/x(?=y)/            //відповідає "x", тільки якщо за "x" йде "y"
/(?<=y)x/          //відповідає "x", тільки якщо за "x" йде "y"
/х(?!у)/           //відповідає "x", лише якщо за "x" не має "y"
/(?<!y)х/         //відповідає "x", лише якщо за "x" не має "y"

// Для десяткових чисел з однією десятковою комою
/^[0-9]+\.?[0-9]*$/

/^[^C]/.     фільтрує всі слова де на початку є велика буква С
/[^C]/.      фільтрує всі слова де є велика буква С

/a.*c/      ("abccount") ➞ true      будь-якою кількістю символів (включаючи нуль) між ними.

// /\d+(?!\.)/ відповідає номеру лише в тому випадку, якщо за ним не стоїть десяткова крапка.
/\d+(?!\.)/.exec('3.141 '); // відповідає "141", але не "3.

/(?<!-)\d+/      //відповідає номеру, лише якщо йому не передує знак мінус.
/(?<!-)\d+/.exec('3 ') //відповідає "3".
/(?<!-)\d+/.exec('-3 ') //збіг не знайдено, оскільки число передує знаку мінус.

// x(?=y) - відповідає x лише тоді, коли за x дорівнює y.
var regex = /Red(?=Apple)/;
console.log(regex.test('RedApple'));   // true



















...................................Map 
Map - це колекція ключ / значення, як і Object. Але основна відмінність в тому, 
що Map дозволяє використовувати ключі будь-якого типу.
const m = new Map()

let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

// Ви можете додати об'єкти на карту, використовуючи set метод:
m.set('color', 'red')
m.set('age', 2)

// І ви можете дістати елементи з карти, використовуючи get:
const color = m.get('color')
const age = m.get('age')

// Видалення об’єкта з карти за допомогою ключа
m.delete('color')

// Видаліть усі елементи з карти
m.clear()

// Перевірте, чи карта містить елемент за ключем
const hasColor = m.has('color')

// Знайдіть кількість об’єктів на карті
const size = m.size

// Ви можете ініціалізувати карту з набором значень:
const m = new Map([['color', 'red'], ['owner', 'Flavio'], ['age', 2]])

// Ітерація над ключем карти, парами значень
for (const [k, v] of m) {
  console.log(k, v)
}

// Перетворіть ключі карти в масив
const a = [...m.keys()]
// Перетворення значень карти в масив
const a = [...m.values()]



............................// Set 
Об'єкт Set - це особливий вид колекції: «безліч» значень (без ключів),
де кожне значення може з'являтися тільки один раз.

[ ...new Set([1, 2, 3, 1, 2, 3]) ]    // [1, 2, 3]  -  У наборі зберігаються лише унікальні елементи

// це сукупність об'єктів або примітивних типів (рядків, чисел або булевих значень), 
// і ви можете сприймати його як Карту, де значення використовуються як ключі карти, 
// при цьому значення карти завжди є булевим істинним.

const s = new Set()

// Додавання предметів до набору
s.add('one')
s.add('two')
// У наборі зберігаються лише унікальні елементи, тому виклик s.add('one')кілька разів не додасть нових елементів.
// Не можна одночасно додавати до набору кілька елементів. Вам потрібно телефонувати add()кілька разів.

// Перевірте, чи є деталь у наборі
s.has('one') //true
s.has('three') //false

// Видаліть елемент із Set
s.delete('one')

// Визначте кількість предметів у наборі
s.size

// Видаліть усі елементи з набору
s.clear()

// Ітерація елементів у наборі
for (const k of s.keys()) {
  console.log(k)
}
for (const k of s.values()) {
  console.log(k)
}

// Ви також можете використовувати метод forEach () на наборі:
s.forEach(v => console.log(v))

// Ви можете ініціалізувати Set з набором значень:
const s = new Set([1, 2, 3, 4])
// Перетворити на масив
// Перетворіть клавіші Set в масив
const a = [...s.keys()]
// or
const a = [...s.values()]









...............................Promise
надають зручний спосіб організації асинхронного коду.
це спеціальний об'єкт в JavaScript, який пов'язує «створюючий» і «споживаючий» коди разом. 
«Створює» код може виконуватися скільки буде потрібно, щоб отримати результат, 
а промис робить результат доступним для коду, який підписаний на нього, коли результат готовий.

Promiseможе находиться в трьох состояниях:

ожидание (очень очікування) : початкове стан, не виконано і не відклонен.pending
виконано (виконано) : операція завершена успішно.fulfilled
відклонено (відхилено) : операція завершена з помилкою

У об'єкта promise, що повертається конструктором new Promise, є внутрішні властивості:
1. state( «Стан») - спочатку "pending"( «очікування»), потім змінюється на "fulfilled"( «виконано успішно») 
при виклику resolveабо на "rejected"( «виконано з помилкою») при виклику reject.
2. result( «Результат») - спочатку undefined, далі змінюється на value при виклику resolve(value) 
або на error при виклику reject(error)

Функція, передана в конструкцію new Promise, називається виконавець (executor). 
Коли Promise створюється, вона запускається автоматично. Вона повинна містити код, 
який коли-небудь створить результат.

Сполучною ланкою між кодом виконавцем і функціями-споживачами є методіи .then, .catch і .finally.
Перший аргумент методу .then- функція, яка виконується, коли промис переходить в стан «виконано успішно», і отримує результат.
Другий аргумент .then - функція, яка виконується, коли промис переходить в стан «виконано з помилкою», і отримує помилку.

1. Початковий промис успішно виконується
2. Потім викликається обробник в .then
3. і так далі.


У класі Promise є 5 статичних методів.
Promise.all(promises)- очікує виконання всіх Проміс і повертає масив з результатами. Якщо будь-який 
із зазначених Проміс поверне помилку, то результатом роботи Promise.allбуде ця помилка,
 результати інших Проміс будуть ігноруватися.
Promise.allSettled(promises) (Розміщений недавно) - чекає, поки всі Проміс завершаться і повертає їх 
результати у вигляді масиву з об'єктами, у кожного об'єкта два властивості:
state: "fulfilled", Якщо виконано успішно або "rejected", якщо помилка,
value- результат, якщо успішно або reason- помилка, якщо немає.
Promise.race(promises) - очікує перший виконаний промис, який стає його результатом, інші ігноруються.
Promise.resolve(value)- повертає успішно виконати промис з результатом value.
Promise.reject(error)- повертає промис з помилкою error.


const sleep = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

sleep(2000).then(() => console.log('2s'))
sleep(5000).then(() => console.log('5s'))

// 2.)
  Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('Коли виконаються всі проміси тоді буде виведений цей текст')
  })

// 3.)
  Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Проміси будуть виконуватися попорядку')
  })





..........................................Async/await
спеціальний синтаксис для роботи з Промісами.

async - ця функція завжди повертає промис. 
Наприклад, ця функція поверне виконаний промис з результатом 1:
async function f() {
  return 1;
}

f().then(alert); // 1


await - змусить інтерпретатор JavaScript чекати до тих пір, поки промис праворуч від await не виконається. 
Після чого воно поверне його результат, і виконання коду продовжиться.

У цьому прикладі промис успішно виконається через 1 секунду:
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  alert(result); // "готово!"
}

f();





// Очищення всіх інтервалів і таймаутів  setTimeout
 // Get a reference to the last interval + 1
 const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

 // Clear any timeout/interval up to that id
 for (let i = 1; i < interval_id; i++) {
 window.clearInterval(i);
 }

















  ..............................React 
React — відкрита JavaScript бібліотека для створення інтерфейсів користувача, 
яка покликана вирішувати проблеми часткового оновлення вмісту веб-сторінки, у SPA програмах.

React дозволяє розробникам створювати великі веб-застосунки, які використовують дані, 
котрі змінюються з часом, без перезавантаження сторінки. Його мета полягає в тому, щоб бути швидким, 
простим, масштабованим.

SPA - маленька напівпорожня HTML сторінка, в яку приходить багато JS.
Цей JS працює на клієнта і створюємо динамічно потрібну сторінку.
Навіть якщо ми перемикається на інший розділ сайту - новий HTML не завантажується.
JS ловить зміна url, відправляє AJAX запит на сервер, повертається JSON з даними
і по ним JS малює потрібний HTML.

функція зворотного виклику - це функція, яка передається в іншу функцію
як аргумент. Потім цю функцію можна викликати під час виконання функції вищого
порядку (аргументом якої є).
Оскільки в JavaScript функції є об'єктами, функції можуть передаватися як аргументи.
 
компонент вищого порядку (HOC) - це функція, яка приймає компонент і повертає новий компонент.

Чиста функція - це функція яка приймає пропси і повертає jsx розмітку.
Функція, яка не має побічних ефектів (не змінює зовнішні ресурси), і її вихід визначається лише 
аргументами. Ви можете викликати цю функцію 1 мільйон разів, і з огляду на однаковий набір аргументів, 
результат буде завжди однаковим.

Побічний ефект - це коли функція взаємодіє з якоюсь іншою функцією або об’єктом поза нею. Взаємодія з 
мережею, файловою системою чи інтерфейсом - це всі побічні ефекти.


1. immutability (имьютабельность, неизменяемость) - входные данные, пришедшие в функцию, 
эта функция не должна менять (речь про объекты и массивы, так как по ссылке они передаются, 
поэтому делаем копию)
2. отсутствие side-effects (пункт 1 связан с этим, а так же использование глобальных переменных, 
их модификация, асинхронные операции и что-то может быть ещё)
3. детерменированность\идемпотентность  -  сколько бы раз на вход чистой функции не подавали одно и тоже, 
на выходе чистой функции должен быть один и тот же результат
4. чистая функция должна вернуть (return) что-либо)))


два минуса, первое что весь рендер происходит на клиенте а не на сервере,
а второе что у реакта нет SEO оптимизации и для этого есть решения


Декларативний підхід - це коли ви говорите машині, що вам потрібно зробити, і дозволяєте їй розібратися 
в деталях. React вважається декларативним, оскільки ви міркуєте про абстракції, а не безпосередньо 
редагуєте DOM. Кожна мова програмування високого рівня є більш декларативною, ніж мова програмування 
низького рівня, така як Assembler. JavaScript є більш декларативним, ніж C.



useState(), useEffect(), useReducer(), useRef(), useMemo, useCallback, useContext(), useReducer, 
useHistory, useLocation, useParams, 
useDispatch, useSelector, 



// useState - використовується для управління локальним станом у функціональних компонентах
useState() - повертає масив із двома значеннями:
поточний стан - поточне значення цього стану
установник стану - функція, яку ми можемо використовувати для оновлення значення цього стану



// функція редуктора приймає стан і дію як вхідні дані і повертає новий стан на основі цієї інформації 
//як вихід. Крім того, він має гілку для кожного типу дії.
switch (action.type) {
  case 'increment':
    return { count: state.count + 1 }
  case 'decrement':
    return { count: state.count - 1 }
  default:
    throw new Error()
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (<button onClick={() => dispatch({ type: 'increment' })}>OK</button>




// useEffect-хук для побічних ефектів, які зазвичай використовуються для взаємодії з браузером,
// DOM API або зовнішнім API, для отримання даних.
// Oскільки інтервал також очищається після кожного візуалізації, нам також потрібно
// встановити інтервал у нашому циклі оновлення.
// потрібно очищати память
React.useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
}, [type]);







// Мемоізація - це свого роду кешування - зокрема, збереження результатів дорогого розрахунку 
// та повторне використання цих результатів, якщо ми побачимо ті самі введені дані пізніше.

//ця функція перевизначається лише в тому випадку, якщо будь-яка її залежність у масиві залежностей змінюється:
const filteredUsers = React.useMemo(() =>
  users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  }),[search]
);
const handleRemove = React.useCallback(
  (id) => setUsers(users.filter((user) => user.id !== id)),
  [users]
);


.................................useRef
//забезпечує прямий доступ до DOM-вузлів або компонентів React.
function TextInputWithFocusButton() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputEl.current.focus()
  }
  return (<input ref={inputEl} type="text" />




const TodoContext = createContext ( null ) ;
// 2.
<TodoContext.Provider value={dispatchTodos}>
    <TodoList dispatch={dispatchTodos} todos={filteredTodos} />
</TodoContext.Provider>
// 3.
const dispatch = useContext(TodoContext);
//33.
<TodoContext.Consumer>
        <p style={{ color }}>Hello World</p>
</TodoContext.Consumer>






примусовий рендерінг, використовуйте метод forceUpdate.

Що таке піднімання стану в React?
Зазвичай деякі компоненти повинні реагувати на ті самі події або зміни стану, тому існує певний спосіб 
повідомити весь цей компонент, коли щось змінилося. Рекомендований спосіб зробити це підняття стану 
вгору. Це означає, що спільний стан слід підняти до найближчого спільного предка. Цей метод, заснований 
на тому, повинен мати єдине "джерело істини" для будь-яких даних, які змінюються в додатку React.


StrictMode - це інструмент для виявлення потенційних проблем у програмі. StrictMode виявляє: компоненти 
з небезпечними життєвими циклами, використання API застарілих рядків, несподівані побічні ефекти, 
застарілий контекст API. 








//1.                      class
  class App extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        hits: [],
        isLoading: false,
        error: null,
      };

      this.handleChange = this.handleChange.bind(this);
    }
   
  handleChange(event) {
    this.setState({value: event.target.value});
  }

// Метод виконується після того, як вивід компонента був відрендерений у DOM.
    componentDidMount() {
      fetch(API + DEFAULT_QUERY)
        .then(response => response.json())
        .then(data => this.setState({ hits: data.hits }));
    }

    async componentDidMount() {
      this.setState({ isLoading: true });
   
      try {
        const result = await axios.get(API + DEFAULT_QUERY);
   
        this.setState({
          hits: result.data.hits,
          isLoading: false
        });
      } catch (error) {
        this.setState({
          error,
          isLoading: false
        });
      }
    }

    // викликається відразу після оновлення. Цей метод не викликається під час першого рендеру.
  componentDidUpdate() {
    console.log('start: componentDidUpdate()');
  }

    // виконується тоді, коли компонент демонтується:
    componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }


 // викликається перед рендерингом при отриманні нових пропсів і стану
  shouldComponentUpdate() {
    console.log('start: shouldComponentUpdate()');
    return true;
  }
   
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }

    render() {
      return {
        // Чтобы передать параметры обработчику событий, оберните его в стрелочную функцию:
        <button onClick={() => this.handleClick(id)} />
        // Это действие равносильно использованию .bind:
        <button onClick={this.handleClick.bind(this, id)} />
        
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      }
    }
  }
   
  export default App;




//2.
  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };



  const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);
   
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData,
    });
   
    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' });
   
        try {
          const result = await axios(url);
   
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        } catch (error) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      };
   
      fetchData();
    }, [url]);
   
    ...
  
    return [state, setUrl];
  };
  


//3.
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
 
      const result = await axios(url);
 
      setData(result.data);
      setIsLoading(false);
    };
 
    fetchData();
  }, [url]);






//img
import logo from './logo.png';
function Header() {
  return ( 
    <div styles={{ backgroundImage:`url(${car})` }} className={show ? "modal" : classes.asd}>
      <nav className={`${classes.nav} ${classes.active}`}></nav>
      <img src={logo} alt="Logo" />
      {!show && <button onClick={openModal}>Show modal</button>}
    </div>
  )
}
// використовуючи метод абсолютної URL-адреси
<div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})`}}>


// json
import Users from "./users.json";
export default function App() {
  return (
    <div className="App">
      <h1>Users list</h1>
      {Users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}




// setter
localStorage.setItem('myData', data);
// getter
localStorage.getItem('myData');
// remove
localStorage.removeItem('myData');
// remove all
localStorage.clear();     

// Save data to sessionStorage
sessionStorage.setItem('key', 'value');
// Get saved data from sessionStorage
sessionStorage.getItem('key');
// Remove saved data from sessionStorage
sessionStorage.removeItem('key');
// Remove all saved data from sessionStorage
sessionStorage.clear();




// ми можемо вказати щоб віртуал дом створувався тільки тоді коли були змінені пропси і стейт
1. 
class Asd extends React.PureComponent {
  ...
}

// 2. shouldComponentUpdate - метод життєвого циклу який вирішує чи перемальовувати компоненту.
// Якщо вхідні пропси відрізняються то буде true, і компонента перемалюється
class Asd extends React.Component {
  shouldComponentUpdate(nextProps, naxtState) {
    return nextProps != this.props || nextState != this.state;
  }
  render() {
    return <Qwe />
  }
}

// 3. React.memo() - для функціональних компонент HOC (High Order Component)
const List = React.memo(({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
});





// Встановлення значення за замовчуванням для реквізиту в React
Welcome.defaultProps = {
  name: "Boss"
}



Asd.propTypes = {
  asd: PropTypes.array,
  asd2: PropTypes.arrayOf(PropTypes.object).isRequired,
  asd2: PropTypes.arrayOf(PropTypes.string),
  asd3: PropTypes.object.isRequired,
  asd4: PropTypes.number,
  myff: PropTypes.func.isRequired,

  message:   PropTypes.string.isRequired,
  style:     PropTypes.object.isRequired,
  isMetric:  PropTypes.bool.isRequired,
  miles:     PropTypes.number.isRequired,
  milesToKM: PropTypes.func.isRequired,
  races:     PropTypes.array.isRequired
}



////////////////////React.lazy()
// може допомогти поступово завантажити тільки те, що
// необхідно користувачеві в цей момент. Це може значно покращити продуктивність
// додатку i уникнули завантаження коду, який може ніколи не знадобитись користувачеві
// та скоротили об’єм коду, що необхідний на початку завантаження додатку.

const TodoList = React.lazy(() => import('./routes/TodoList'))
const NewTodo = React.lazy(() => import('./routes/NewTodo'))

const App = () => (
  <Router>
    <React.Suspense fallback={<p>Завантаження...</p>}>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/new" component={NewTodo} />
      </Switch>
    </React.Suspense>
  </Router>
)







useHistory - дає доступ до history прикладу
useLocation - повертає location об'єкт, який представляє поточний URL
useParams - повертає об'єкт пар ключ / значення параметрів URL. Використовуйте його для доступу 
match.params до поточного <Route>.
useRouteMatch - щоб відповідати поточної URL таким же чином , що <Route>. Це в основному корисно 
  для отримання доступу до даних збігу без фактичного надання a <Route>.

let match = useRouteMatch();  
let { topicId } = useParams();
<Router>
  <Link to="/">Home</Link>
  <Link to="/topics">Topics</Link>
  <NavLink to="profile" activeClassName={classes.active} className={classes.nav_link}>Profile</NavLink>
  <NavLink to="messages" activeClassName={classes.active} className={classes.nav_link} >Messages</NavLink>
  <Link to={`${match.url}/components`}>Components</Link>

  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/topics">
      <Topics />
    </Route>
    <Route path={`${match.path}/:topicId`}>
      <Topic />
    </Route>
  </Switch>
</Router> 







const Button = styled.button`
  font-size: 16px;
  border-radius: 3px;
  display: flex !important;
  flex-basis: calc(33.333% - 20px);
  animation: ${rotate} 2s linear infinite;
  padding: ${props => props.size};
  color: ${props => (props.primary ? 'violet' : 'palevioletred')};

  ${props => props.selected
      ? css`
          border-bottom: 1px solid #000;
          font-weight: bold;
        `
      : null};

  &:active,
  &:focus {
    text-align: left;
  }

  @media screen and (max-width: 800px) {
    color: black;
  }
`;































//......................................Redux
//це шаблон і бібліотека для управління та оновлення стану програми,

1. Єдине джерело істини
2. Держава доступна лише для читання
3. Зміни внесені за допомогою чистих функцій

State - описує стан програми в певний момент часу, а UI відображає на основі цього стану
Дії - є звичайними об'єктами з type полем і описують "що сталося" в додатку
Редуктори - це функції, які обчислюють нове значення стану на основі попереднього стану + дії

Екшени - це структури, які передають дані з нашої програми в стор.
Вони є єдиними джерелами інформації для стору. Ви відправляєте їх в стор,
використовуючи метод store.dispatch ().

Редюсер (reducer) - це чиста функція, яка приймає старий state і action,
якщо потрібно то вона змінює старий state (але працює з копією старого state)
і повертає копію зміненого старого state,
або незмінний старий state якщо ми його не змінювали


Стор (Store) - це об'єкт, який з'єднує ці частини разом. Стор бере на себе такі завдання:
містить стан додатка (application state);
надає доступ до стану за допомогою getState();
може випускати оновлення стану за допомогою dispatch(action);
Обробляє скасування реєстрації слухачів за допомогою функції, що повертається subscribe(listener).

window.state = state;


//.................applyMiddleware
// Проміжне програмне забезпечення - спосіб розширення Redux за допомогою спеціальних 
// функціональних можливостей. Проміжне програмне забезпечення дозволяє обгортати dispatch метод магазину 
// для задоволення та отримання прибутку.
// Суть middleware функций, взять входные данные, добавить что-то и передать дальше.


// Thunks є рекомендованим проміжним програмним забезпеченням для основної логіки побічних ефектів Redux, 
// включаючи складну синхронну логіку, яка потребує доступу до сховища, та просту асинхронну логіку, 
// як запити AJAX.

// Проміжне програмне забезпечення thunk повертає функцію замість дії. Оскільки ми маємо справу з 
// асинхронним викликом, ми можемо відкласти функцію відправки за допомогою проміжного програмного забезпечення. 
// Більше того, внутрішня функція дає нам доступ до функцій магазину dispatch та getState.


Чиста функція - це функція яка приймає пропси і повертає jsx розмітку.


Побічний ефект - це будь-яка зміна стану або поведінки, яку можна побачити поза поверненням значення 
з функції . Деякі найпоширеніші види побічних ефектів:
    Запис значення на консоль
    Збереження файлу
    Встановлення асинхронного таймера
    Виконання запиту AJAX HTTP
    Зміна деякого стану, що існує поза функцією, або мутація аргументів функції
    Створення випадкових чисел або унікальних випадкових ідентифікаторів (таких як Math.random() 
    або Date.now())



// function*       saga
// Генератори - це особливий тип функцій, що має можливість призупиняти себе і відновлюватись згодом, 
// дозволяючи тим часом запускати інший код.
import { takeEvery } from 'redux-saga/effects'
// Коли проміжне програмне забезпечення виконує handleNewMessageсагу, воно зупиняється на yield takeEvery інструкції 
// і чекає ( звичайно, асинхронно ), поки ADD_MESSAGEдія не буде надіслана . 
// Потім він запускає зворотний виклик, і сага може відновитись .
const handleNewMessage = function* handleNewMessage(params) {
  const socket = new WebSocket('ws://localhost:8989')
  yield takeEvery('ADD_MESSAGE', (action) => {
    socket.send(JSON.stringify(action))
  })
}
export default handleNewMessage






//connect - підключає наш компонент до магазину
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
//
mapStateToProps - використовується для вибору тієї частини даних із сховища,
яка потрібна підключеному компоненту.
//
mapDispatchToProps - використовується для відправлення дій у магазин.



//index.js
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

///Redux/store.js
import findUserReduce from "./findUser_reduce";
import mytestPages_reduce from "./mytestPages_reduce";

let rootReducer = combineReducers({
  findUser: findUserReduce,
  mytestPages: mytestPages_reduce,
});

let store = createStore(rootReducer);

export default store;

///Redux/mytestPages_reduce.js
const MYTESTADD = 'MYTESTADD';
const MYTESTCHANGE = 'MYTESTCHANGE';

const initialstate = {
  mytestText: '',
  mytestArr: [
    {id: 1, name: 'Admin', text: 'my text loren'},
    {id: 2, name: 'Admin', text: 'my text loren'},
    {id: 3, name: 'Admin', text: 'my text loren'},
  ]
};

const mytestPages_reduce = (state = initialstate, action) => {
  switch (action.type) {
    case MYTESTCHANGE:
      return {
        ...state,
        mytestText: action.text
      }
    case MYTESTADD:
      return {
        ...state,
        mytestText: '',
        mytestArr: [...state.mytestArr, {id: state.mytestArr.length + 1, name: 'Admin', text: state.mytestText}]
      }
    default:
      return state;
  }
}

export const mytestChangeActionCreater = (text) => ({type: MYTESTCHANGE, text: text});







// Дозволяє витягувати дані із стану магазину Redux за допомогою функції вибору.
// Селектори - це функції, які отримують Redux state як аргумент і повертають деякі дані
import { useSelector } from 'react-redux'
export const CounterComponent = () => {
  const counter = useSelector(state => state.counter)
  return <div>{counter}</div>



// Цей хук повертає посилання на dispatch функцію з магазину Redux.
import { useDispatch } from 'react-redux'
export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()
  return (
      <button onClick={() => dispatch({ type: 'increment-counter' })}>Increment counter</button>





// якщо ми натиснемо Go to home кнопку, користувач буде програмно переходити до /home маршруту
import { useHistory } from "react-router-dom";
function HomeButton() {
  const history = useHistory();
  function handleClick() {
    history.push("/home");
  }
  return (
    <button type="button" onClick={handleClick}>Go to home</button>

