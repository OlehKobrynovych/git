//...............................................js 
"use strict";         // суворий режим

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

console.log(Number.isNaN(NaN))           //true
console.log(Number.isFinite(-Infinity))  //true

(12).toString(2);  // перетворить 12 в 2йковій систкмі
(123).toString();
String(123);
123 + '';

Number('123');
+'123';

Boolean(10 > 9);

//spread оператор 
const dayOff = new Date(...day);

try       // Оператор дозволяє перевірити блок коду на наявність помилок.
catch     // Оператор дозволяє обробляти помилку.
throw     // Оператор дозволяє створювати призначені для користувача помилки.
finally   // Оператор дозволяє виконати код, після того, як спробувати зловити, незалежно від результату.


console.time(total);
myff(a, b);
console.timeEnd(total);


e.preventDefault();




//...................................Array

const arr = [1,2,3,4,5,'asd'];

// перевірка чи елемент є масивом
[1,2,3,4,5,'asd'].isArray();  // true
arr.isArray();
Array.isArray(arr);

// 
arr.push('asd');   // додае елемент в кінець масиву
arr.pop();        // видаляє або витягує остаттнє значення масиву
arr.shift();      // видаляє або витягує перше значення масиву
arr.unshift('asd'); // додає елемент на початок масиву
 
let arr1 = ['item1', 'item2', 'item3'];

//arr1.push('asd');
//arr1 = [...arr1, 'asd'];

// arr1.unshift('asd');
// arr1 = ['asd', ...arr1];




// .........................split()
let str = "asd, wer erg, tytrht";
let arr = str.split(', ');  // розбиває рядок на масив заданим роздільником:  arr = ['asd', 'wer erg', 'tytrht']

const str = 'Hello World. How are you doing?';
const arr = myString.split(' ', 3);    // розділяє по пробілах в рядку і повертає перші 3 знайдені розбиття.
// "Hello World. How are you doing?"
// arr = ["Hello", "World.", "How"];




//.............................join()
let str = arr.join(';');     // Створюється рядок із заданим роздільником: str = 'asd;wer erg;tytrht'; 
 
let arr = ['Wind', 'Water', 'Fire'];
arr.join();      // 'Wind,Water,Fire'
arr.join(', ');  // 'Wind, Water, Fire'
arr.join(' + '); // 'Wind + Water + Fire'
arr.join('');    // 'WindWaterFire'


//
let arr = ['Wind', 'Water', 'Fire'];
let str = '';

str = arr.join(' ');   
// arr = ["Wind", "Water", "Fire"];
// str = "Wind Water Fire";





// .....................slice()
arr.slice(1, 3);     // копіює : let arr2 = arr.slice(start, end); не враховуючи end

// let arr1 = ['item1', 'item2', 'item3'];
// arr1 = arr1.slice(0, -1);    // arr1 = ["item1", "item2"];  "-1" - рахує з кінця масиву
// arr1 = arr1.slice(0, 2);     // arr1 = ["item1", "item2"];

// let arr = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// let arr2 = arr.slice(1, 3)
// // arr = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// // arr2 = ['Orange','Lemon']



// .....................splice()
arr.splice(1, 0, 'asd', 'asd2');    // видаляє, додає, витягує:  arr.slice(index, del, el, el ...., el) 
// var arr = ['angel', 'clown', 'trumpet', 'sturgeon'];
// var arr2 = arr.splice(0, 2, 'parrot', 'anemone', 'blue');
// // arr = ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// // arr2 = ["angel", "clown"]



//...................concat()
arr.concat('asd', 'asd2');  // створує новий масив на основі інших
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];
// const arr3 = arr1.concat(arr2);  
// // arr3 = ["a", "b", "c", "d", "e", "f"]
// const arr3 = [].concat(arr1, arr2, arr4);
 



// [...arr]     // витягує елементи з масиву arr і записує їх в новий масив
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);    // arr3 = ['a', 'b', 'c', 'd', 'e', 'f']
const arr3 = [...arr1, ...arr2];   // arr3 = ['a', 'b', 'c', 'd', 'e', 'f']
const arr3 = [arr1, arr2];    // arr3 = [['a', 'b', 'c'], ['d', 'e', 'f']]

const arr1 = ['a', 'b', 'c'];
const arr2 = [...arr1];    // arr2 = ['a', 'b', 'c'];


// 
arr.indexOf(el, startIndex);   // шукає, el починаючи з індексу startIndex, і повертає індекс 
//першого знайденого елемента, якщо не знайдено то поверне '-1' 
arr.lastIndexOf(el, startIndex);   // те саме, але шукає справа наліво. 
arr.includes(el, startIndex);      // шукає, el починаючи з індексу startIndex, повертає, true 
//якщо знайдений і false якщо не знайде. 
 
// [1, 2, 3].includes(2)         // true
// [1, 2, 3].includes(4)         // false
// [1, 2, 3].includes(3, 3)      // false
// [1, 2, 3].includes(3, -1)     // true
// [1, 2, NaN].includes(NaN)     // true
// ["1", "2", "3"].includes(3)   // false


// .......................... map()
arr.map(function(el, index, array) {....});    // map() Метод створює новий масив, заповнений 
//результатами виклику наданої функції для кожного елемента в масиві
arr.map((el, index, array) => {....}); 

const arr1 = [1, 4, 9, 16];

const arr2 = arr1.map((el, index, arr) => { 
  if (index === 1) {
    el = arr[index+1] + 1;
  } else {
  	el = el * 2;
  }
  return el;
});
// arr2 = [2, 10, 18, 32];


// .......................... reduce()
arr.reduce((accumulator, el, index, array) => { return accumulator += el;}, [initial]);  
 // initial - початкове значення акомулятора 
// const sumArr1 = arr1.reduce((acc, el, index, arr) => {}, acc);
// const sumArr1 = arr1.reduce((acc, el, index, arr) => {}, 0);
// const sumArr1 = arr1.reduce((acc, el, index, arr) => {});
// const sumArr1 = arr1.reduce((acc, el) => acc += el);

const arr1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4

//const sumArr1 = arr1.reduce((acc, el, index, arr) => acc += el, 0);

const sumArr1 = arr1.reduce((acc, el, index, arr) => {
    if (el === 2) {
      acc += 0; 
    } else {
      acc += el;
    }
	return acc;
}, 0);
// sumArr1 = 8;

const sumArr1 = arr1.reduce((acc, el, index, arr) => {
    if (el === 2) {
      return acc += 0; 
    } 
    return acc += el;
}, 0);
// sumArr1 = 8;


// .............................forEach()
arr.forEach(function(el, index, array) {....});    // Метод forEach() виконує задану функцію один 
// для кожного елемента в масі.
arr.forEach((el, index, array) => {....}); 

arr.forEach((el, index, array) => alert(`${el} is at index ${index} in ${array}`)); 
arr.forEach((el, index, array) => alert(el + ' is at index ' + index + ' in ' + array)); 

const arr1 = ['item1', 'item2', 'item3'];
let arr2 = [];

arr1.forEach((el, index, arr) => {
    arr2.push(el + 'asd');
    // arr2 = [...arr2, el + 'asd'];
    // arr2.unshift(el + 'asd');
    // arr2 = [el + 'asd', ...arr2];
})
// arr1 = ["item1", "item2", "item3"];
// arr2 = ['item1asd', 'item2asd', 'item3asd'];

// аналогічно функції arr1.forEach()
// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i] + 'asd');
// }



//    .......................for - цикл
const arr1 = ['item1', 'item2', 'item3'];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  if (i === 1) {
	break;                // припиняє виконняння цику
  }
  arr2.push(arr1[i] + 'asd');
}
// arr1 = ["item1", "item2", "item3"];
// arr2 = ['item1asd'];



//
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;              // припиняє дану ітерацію і переходить до наступної ітерації циклу
  }
  text = text + i;
}
// text = "012456789";

 

// ...........................replace()
replace(/old/i,"new")     // Метод замінює вказане значення з іншим значенням в рядку: 
// /old/i  де і модифікатор регулярного виразу(шаблон покуку)
let p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
p = p.replace('dog', 'monkey');
// p = "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"




// ........................test()
/asd/.test(str);      // test() виконує пошук відповідності між регулярним виразом і вказаним рядком.
// Повертає true або false.

/asd/gi.test(str); 
RegExp(`${s}`,'gi').test(str); 

const str = 'table asdfootball';

/asd/.test(str);   // true 
/asd2/.test(str);   // false 





// ...............................search()
str.search(regex);      // Метод використовує вираз для пошуку елементу, і повертає індекс елементу 
str.search(/asd/ig);    // g - глобальний пошук, і - нечутливий до регістру
str.search('asd');

//
const str = 'The fox dog. asd?';
const regex = /[^\w\s]/ig;     // шукаємо будь-який символ, який не є символом слова чи 
//пробілом (шукаємо крапку)

let index = str.search(regex);   
// index = 11;

let el = str[str.search(regex)];
let el = str[index];
let el = str[11];
// el = '.';




//...........................exec()
/e/.exec();     //  шукає і повертає сам елемент, індекс елемента і цілі елементи 
/e/.exec("The best");   //"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input; 

//
let str = 'qwe asd sdgs asd !';

let arr = /(asd)/.exec(str);
// let arr = /(asd)/.exec('qwe asd sdgs asd !');

console.log(arr);           // ["asd", "asd"]
console.log(arr.index);     // 4
console.log(arr.input);     // "qwe asd sdgs asd !"

console.log(arr[1]);       // "asd"







// ....................match()
"The rain in SPAIN mainly".match(/ain/g);    //  шукає всі слова в стрічці 
 
const str = 'The quick brown fox jumps over foxthe lazy dog. It barked.';

const regex = /[A-Z]/g;

const arr = str.match(regex);
console.log(arr);             // ["T", "I"]


//
let str = 'The quick brown fox jumps over foxthe lazy dog. It barked.';

let regex = /fox/;
// let regex = 'fox';

let arr = str.match(regex);

console.log(arr);            // ["fox"]
console.log(arr.index);      // 16
console.log(arr.input);      // "The quick brown fox jumps over foxthe lazy dog. It barked."






// ......................filter()
arr.filter((el, index, array) => el.id < 3);  // Метод створює новий масив з усіма елементами , які проходять умову

//
const arr1 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const arr2 = arr1.filter((el, index, arr) => el.length > 6);

console.log(arr2);   // ["exuberant", "destruction", "present"]




// ......................find()
arr1.find((el, index, arr) => el > 10);     // Метод повертає значення першого елемента масиву , 
//який проходить тестову функцію. 

const arr1 = [5, 12, 8, 130, 44];

const rez = arr1.find(el => el > 10);

console.log(rez);  // 12



// ....................findIndex()
arr1.findIndex((el, index, arr) => el > 10);  // Метод повертає індекс першого елемента масиву , який проходить тестову функцію. 

const arr1 = [5, 12, 8, 130, 44];

const rez = arr1.findIndex(el => el > 13);

console.log(rez);  // 3




//.....................every()
arr1.every((el, index, arr) => el < 40);     // Перевіряє масив, якщо всі значення масиву 
//пройдуть тест то поверне true, якщо ні то поверне false 

//
const arr1 = [1, 30, 39, 29, 10, 13];
let rez = arr1.every(el => el < 40);
console.log(rez);   // true

//
const arr1 = [1, 30, 39, 29, 10, 13];
let rez = arr1.every(el => el < 20);
console.log(rez);   // false




// .........................some()
arr1.some((el, index, arr) => el > 1);      // Перевірка мвсиву , якщо хоч одне значення масиву пройде тест тоді true, інакше false 
 
//
const arr1 = [2, 30, 39, 29, 10, 13];
let rez = arr1.some(el => el > 1);
console.log(rez);   // true

//
const arr1 = [1, 30, 39, 29, 10, 13];
let rez = arr1.some(el => el > 40);
console.log(rez);   // false



//...........................flat()
arr.flat();   // повертає новий масив, у якому всі елементи вставлених підмасивів були 
//рекурсивно "піднятими" на заданий рівень глибини.

let arr = [1, 2, , 4, , 5].flat();    // [1, 2, 4, 5] - видаляє пусті елементи

let arr1 = [1, 2, [3, 4]];
arr1 = arr1.flat();     // [1, 2, 3, 4]

let arr2 = [1, 2, [3, 4, [5, 6]]];
arr2 = arr2.flat();    // [1, 2, 3, 4, [5, 6]]

let arr3 = [1, 2, [3, 4, [5, 6]]];
arr3 = arr3.flat(2);     // [1, 2, 3, 4, 5, 6]

let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4 = arr4.flat(Infinity);    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]







//...........................fill()
arr.fill(value, start, end); // змінює всі елементи в масиві на статичні значення, від початкового 
// індексу (за замовчуванням 0) до кінцевого індексу (за замовчуванням array.length). 
// Він повертає змінений масив.
arr.fill(value[, start[, end]])  // заповнює (змінює) всі елементи масиву з початкового індексу start, 
//до індексу end

const arr1 = [1, 2, 3, 4];
arr1.fill(0, 1, 4);  // [1, 0, 0, 0]

const arr1 = [1, 2, 3, 4];
arr1.fill('asd', 2, 4);  // [1, 2, "asd", "asd"]

Array(3).fill('edabit');   // ➞ ["edabit", "edabit", "edabit"]    // Повторіть той самий пункт кілька разів 
Array(5).fill(13);   // ➞ [13, 13, 13, 13, 13] 




// ........................repeat()
'аsd'.repeat(2);  // 'asdasd'  - створює новий рядок, що містить вказану кількість об'єднаних 
//разом копій рядка 
 
'абв'.repeat(0);    // ''
'абв'.repeat(1);    // 'абв'
'абв'.repeat(2);    // 'абвабв'
'абв'.repeat(3.5);  // 'абвабвабв' количество будет преобразовано в целое число






//...........................sort()
arr.sort();                    // для сортування масиівв 
arr.sort((a, b) => a - b);     // для чисел в масиві 
arr.sort((a, b) => b - a);     // для сортування від більшого до меншого 
arr.sort((a, b) => a.localeCompare(b) );  // Для алфавітів краще використовувати 
 
//
const arr1 = ['March', 'AJan', 'bFeb', 'Dec'];
arr1.sort();                             // ["AJan", "Dec", "March", "bFeb"]
arr.sort((a, b) => a.localeCompare(b) ); // ["AJan", "bFeb", "Dec", "March"]


//
const arr2 = [1, 30, 4, 11, 21, 100000];
arr2.sort();                    // [1, 100000, 11, 21, 30, 4]
arr2.sort((a, b) => a - b);     // [1, 4, 11, 21, 30, 100000]
arr2.sort((a, b) => b - a);     // [100000, 30, 21, 11, 4, 1]




//.............................reverse()
arr.reverse();    // розвертає масив, перший елемент масиву стає останнім, а останній елемент масиву стає першим.
 
const arr1 = ['one', 'two', 'three'];
arr1.reverse();   // ["three", "two", "one"]




// ..........................from()
// метод створює новий масив з масивів або подібного до масиву елементів що ітерується, неглибоко скопійований 
Array.from('fooo');                 // ["f", "o", "o", "o"] 
Array.from('foo', el => el + 1);    // ["f1", "o1", "o1"] 
Array.from([1, 2, 3]);              // [1, 2, 3]
Array.from([1, 2, 3], x => x + x);  // [2, 4, 6]





// .....................setInterval()
let id = setInterval(() => {}, 1000);  // викликає функцію через задані інтервали (у мілісекундах).
clearInterval(id);   // clearInterval() - зупинити виконання, очищає таймер встановлений setInterval()
 


//......................setTimeout()
let id = setTimeout(() => {}, 2000);  // викликає функцію через заданий час один раз (у мілісекундах).
clearTimeout(id);     // clearTimeout() - зупинити виконання, очищає таймер встановлений setTimeout()
 


 
// єдиний спосіб глибокого клонування масиву - це використання JSON.parse(JSON.stringify(arr)). 
// Однак, не використовуйте, якщо ваш масив може включати функції, оскільки він повернеться null. 
1)   5.79ms -> arr = Object.values(arr); 
2)   7.23ms -> arr = [].concat(arr); 
3)   9.13ms -> arr = arr.slice(); 
4)  24.04ms -> arr = const a = []; for (let val of arr) { a.push(val); }; 
5)  30.02ms -> arr = [...arr]; 
6)  39.72ms -> arr = JSON.parse(JSON.stringify(arr));    
7)  99.80ms -> arr = arr.map(el => el); 
8) 259.29ms -> arr = Object.assign([], arr); 
9) Maximum call stack size exceeded -> clone(arr => Array.of(...arr)); 
 
 
 
 
// ................................JSON
var myJSON = JSON.stringify(myObj);     // об’єкті JavaScript, ви можете перетворити у JSON та надіслати його на сервер: 
var myObj = JSON.parse(myJSON);         // формат JSON, перетворити у об’єкт JavaScript: 

//для дати і функцій (сам написав) 
var text = '{"name":"John", "age":"function() {return 30;}", "city":"New York", "birth":"1986-12-14"}'; 

var obj = JSON.parse(text, (k, v) => { 
    if (k == "age") { 
        return v = eval("(" + v + ")"); 
    } 
    if (k == "birth") { 
        return new Date(v); 
    } else { 
        return v; 
    } 
}); 
 
 



//..............................Number
parseFloat('3.14suff');   // 3.14    Розбирає рядок і повертає число з плаваючою точкою 
parseInt('42.45px', 10);     // 42       Розбирає рядок і повертає ціле число 
toExponential()      // Повертає рядок з числом, округленим і записаним, використовуючи експоненціальні позначення. 
toFixed()            // Повертає рядок із числом, округленим і записаним із заданою кількістю десяткових знаків. 
toPrecision()        // Повертає рядок із номером, записаним із заданою довжиною 
 
Math.round(x) // повертає значення х округлення до найближчого цілого числа: 
Math.trunc(13.37);    // 13   повертає цілу частину числа шляхом видалення - дробові числа. 
Math.ceil(7.004);  // 8     завжди округлює число до наступного найбільшого цілого числа. 
Math.floor(x)  // повертає значення х округляється вниз до найближчого цілого числа: 
Math.pow(x, y) // повертає значення x в степені y: 
Math.sqrt(x)  // повертає квадратний корінь x: 
Math.abs(x)  // повертає абсолютне (позитивне) значення x: 
Math.sin(x)  // повертає синус (значення між -1 та 1) кута x (заданий у радіанах). 
Math.min() і Math.max() // може бути використаний для пошуку найнижчого або найвищого значення у списку аргументів: 
Math.random()  // повертає випадкове число між 0 (включно) та 1 (виключно): 
Math.floor(Math.random() * 10);    // для повернення випадкових цілих чисел. 
 


//........................цикли
// .........................for - кілька разів перебирає блок коду 
for (var i = 0; i < 9; i++) {
  console.log(i);
}


//......................for/in - цикл для об'єкта 
const object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  console.log(`${key}: ${object[key]}`);     
}
// "a: 1"
// "b: 2"
// "c: 3"


//.........................for/of - для масивів або ітерабельних об'єктів 
const arr1 = ['a', 'b', 'c'];

for (const el of arr1) {
  console.log(el);
}
// "a"
// "b"
// "c"


//...........................while - цикли через блок коду, коли задана умова є істинною 
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}


// ...........................do/while - також проходить цикл через блок коду, коли вказана умова є істинною 
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);     // "12345"








//...........................................Object


// Будь-який об’єкт JavaScript може бути перетворений в масив, використовуючи: 
// [Object.keys(obj), Object.values(obj)] 

//...........................Object.keys(obj) 
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));   // ['0', '1', '2']

// Массивоподобный объект
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj));   // ['0', '1', '2']

var obj = { asd1: 'a', asd2: 'b', asd3: 'c' };
console.log(Object.keys(obj));  // ["asd1", "asd2", "asd3"]


//............................Object.values(obj)   
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));   // ["somestring", 42, false]




//...............................Object.entries - перетворює обєкт в масив 
Object.entries({ 0: 'a', 1: 'b', 2: 'c' });     // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ] 
Object.entries('foo');                          // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ] 

const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
// "a: somestring"
// "b: 42"




//...............................Object.fromEntris(arr) - перетворює масив у обєкт
const arr1 = [['foo', 'bar'], ['baz', 42]];

const obj = Object.fromEntries(arr1);

console.log(obj);  // { foo: "bar", baz: 42 }



 
//................................Object.assign()
Object.assign(obj, obj1, obj2, obj3);    // він копіює всі властивості, з одного або декількох 
//  об'єктів в об'єкт obj

//
let obj = {}; 
Object.assign(obj, {prop:'val'}, {prop2:'val2'}) // obj = {prop:'val',prop2:'val2'};

//
var o1 = { a: 1 };
var o2 = { b: 2, a: 2 };     // повторні значення ключів затерається
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }











//.....................................Prototype
В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом, 
либо null.
.........prototype   Властивість JavaScript дозволяє додавати нові властивості до конструкторів 
об'єктів:
Person.prototype.nationality = "English";
........prototype    Властивість JavaScript також дозволяє додавати нові методи до конструкторів 
об'єктів:
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




//..................................Call (), Apply () і Bind ()
використовуються в JavaScript для того, щоб запозичити методи і виставляти значення this.
використовють в плані виставлення значення this у функцій, для створення і
виконання варіативних функцій і для запозичення методів і функцій.
....call()    За допомогою методу можна написати метод, який можна використовувати на різних об'єктах.
...................Різниця полягає в:
call()Метод приймає аргументи окремо .
apply()Метод приймає аргументи як масив .
Параметри в bind() ідентичні call(), але bind() не викликається відразу ж. Замість цього, bind() 
повертає функцію з контекстом this, який вже пов'язаний. Через це bind() корисний тоді, коли ми не 
знаємо всі аргументи наперед.

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




//.....................................Date()
var d = new Date();
d.getFullYear();            // рік
d.getMonth() + 1;           // місяць
d.getDate();                // день
d.getHours();
d.getMinutes();
d.getSeconds();
d.toLocaleTimeString();

// https://momentjs.com - бібліотека для роботи з датами






//...................................this
// this - це поточний об'єкт при виклику «через точку» і новий об'єкт при конструюванні через new.

// 1. поточний об'єкт
let obj = {
  name: 'igor',
  last: 'kob',
  fullName: function() {
    return this.name + ' ' + this.last;
  }
};

// 2. Конструктори, створення об'єктів через "new"
function User(name) {
  // this = {};  (неявно)
  this.name = name;
  this.isAdmin = false;
  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
  // return this;  (неявно)
}

let user = new User("Вася");

user = {
  name: "Вася",
  isAdmin: false,
  sayHi: function() { ... }
};

alert(user.name); // Вася
alert(user.isAdmin); // false
user.sayHi();




//
delete person.age;  // видаляє елемент з обєкта








//..............................class 
// це розширюваний шаблон коду для створення об'єктів, який встановлює в них початкові властивості і методи.
class         // це "особливі функції"

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {                  // клас під назвою "Модель", який успадкує методи від класу "Автомобіль":
  constructor(brand, mod) {
    super(brand);                          // отримуємо доступ до батьківських властивостей та методів.
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let mycar = new Model("Ford", "Mustang");

mycar = {
  carname: "Ford",
  model: "Mustang",
  present: function() { ... },
  show: function() { ... }
};



//............................Додаємо новий метод
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

// Додаємо новий метод з ім'ям newClassMethod в клас NewClass
NewClass.prototype.newClassMethod = function() {
  return this.classPropOne + ' та ' + this.classPropTwo;
}

// Створюємо примірник NewClass під назвою foo
let foo = new NewClass('foo', 'bar');

foo = {
    classPropOne: "foo",
    classPropTwo: "bar",
    someClassMethod: function() { ... },
    newClassMethod: function() { ... }
};

console.log(foo.newClassMethod()); // Вивід: 'foo та bar'




//...........................
event.clientX;      // показує координати при перемішені мишки

















//..............................RegExp
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











//...................................Map 
// https://learn.javascript.ru/map-set
Map - це колекція ключ / значення, як і Object. Але основна відмінність в тому, 
що Map дозволяє використовувати ключі будь-якого типу.

//
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);


//
const m = new Map();

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





//............................Set 
// https://learn.javascript.ru/map-set
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












//...............................Promise
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
Об'єкт  Promise використовується для відкладених та асинхронних обчислень.
в Promise можна передавати і синхронні функції вони виконуватимуться відразу 

надають зручний спосіб організації асинхронного коду.
це спеціальний об'єкт в JavaScript, який пов'язує «створюючий» і «споживаючий» коди разом. 
«Створює» код може виконуватися скільки буде потрібно, щоб отримати результат, 
а промис робить результат доступним для коду, який підписаний на нього, коли результат готовий.

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
із зазначених Проміс поверне помилку, то результатом роботи Promise.allбуде ця помилка, результати 
інших Проміс будуть ігноруватися.
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







//..........................................Async/await
спеціальний синтаксис для роботи з Промісами.

async - ця функція завжди повертає промис. 
Наприклад, ця функція поверне виконаний промис з результатом 1:
async function f() {
  return 1;
}

f().then(alert); // 1


await - змусить інтерпретатор JavaScript чекати до тих пір, поки промис праворуч від await не 
виконається. 
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