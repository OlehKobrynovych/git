https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Метод .substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
var anyString = "Mozilla";

// Отобразит 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));