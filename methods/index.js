https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Метод .substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
var anyString = "Mozilla";

// Отобразит 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));


Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.




Метод padStart()значень String доповнює цей рядок іншим рядком (кілька разів, якщо потрібно), доки отриманий рядок не досягне заданої довжини. Відступ застосовується з початку цього рядка.
const str1 = '5';
console.log(str1.padStart(2, '0'));
// Expected output: "05"


