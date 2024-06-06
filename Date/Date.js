Робота з часом Data перетворення часу 
https://momentjs.com/

// https://date-fns.org/v3.6.0/docs/add



// вивід дати
new Date(order.created_at).toLocaleString()
new Date(order.created_at).toLocaleDateString()  //тільки дати
new Date(order.created_at).toLocaleTimeString()  // тільки години

new Date().getTimezoneOffset() //отримати тайм зону 


//  вивід дати без секунд
let date = new Date(str); // ваш timestamp
let day = date.getDate().toString().padStart(2, '0');
let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Додаємо 1, оскільки місяці в JavaScript ідуть з 0 до 11
let year = date.getFullYear();
let hours = date.getHours().toString().padStart(2, '0');
let minutes = date.getMinutes().toString().padStart(2, '0');

return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;


new Date(str).setHours(30) // додати години до дати


// Отримати різницю в хвилинах між часовим поясом клієнта та UTC:
javascriptCopy codeconst timezoneOffsetMinutes = new Date().getTimezoneOffset();
Метод getTimezoneOffset() повертає різницю в хвилинах між місцевим часовим поясом та UTC.





https://date-fns.org/v3.6.0/docs/add
//Додавання років, місяців ....
const result = add(new Date(2014, 8, 1, 10, 19, 50), {
    years: 2,
    months: 9,
    weeks: 1,
    days: 7,
    hours: 5,\\-7
    minutes: 9,
    seconds: 30,
  })
  //=> Thu Jun 15 2017 15:29:20


  //1 перетвренння дати в потрібну часову зону
  // Імпортуйте необхідні функції з бібліотек date-fns і date-fns-tz
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
// Отримання часової зони клієнта
const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// Визначте поточну дату
const date = new Date();
// Конвертуйте дату у відповідну часову зону
const zonedDate = utcToZonedTime(date, clientTimeZone);
// Відформатуйте дату у потрібному форматі
const formattedDate = format(zonedDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: clientTimeZone });
console.log(`Часова зона клієнта: ${clientTimeZone}`);
console.log(`Поточна дата і час: ${formattedDate}`);

// 2 перетвренння дати в потрібну часову зону
const clientDate = new Date();
// Перетворіть дату клієнта в UTC
const utcDate = zonedTimeToUtc(clientDate, Intl.DateTimeFormat().resolvedOptions().timeZone);
// Відформатуйте дату в UTC для відправки на сервер
const formattedUtcDate = format(utcDate, "yyyy-MM-dd'T'HH:mm:ss'Z'");


// Імпортуйте необхідну функцію з бібліотеки date-fns
import { format } from 'date-fns';
// Визначте дату
const date = new Date();
// Отримайте окремо дату та час у потрібному форматі
const formattedDate = format(date, 'yyyy-MM-dd'); // Форматування дати
const formattedTime = format(date, 'HH:mm:ss'); // Форматування часу
console.log(`Дата: ${formattedDate}`);
console.log(`Час: ${formattedTime}`);


// Визначте дату
const date = new Date();
// Отримайте окремі частини дати
const year = getYear(date);
const month = getMonth(date) + 1; // Місяці починаються з 0, тому додаємо 1
const day = getDate(date);
const hours = getHours(date);
const minutes = getMinutes(date);
const seconds = getSeconds(date);


//Порівняння дат
// Порівняйте дві дати та поверніть -1, якщо перша дата стоїть після другої, 1, якщо перша дата передує другій, або 0, якщо дати рівні.
// Порівняйте 11 лютого 1987 року та 10 липня 1989 року у зворотному хронологічному порядку:
const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
//=> 1



// Вивід і форматування дати
https://date-fns.org/v3.6.0/docs/format
const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
//=> '02/11/2014'


// Тривалість між датами
intervalToDuration({
    start: new Date(1929, 0, 15, 12, 0, 0),
    end: new Date(1968, 3, 4, 19, 5, 0)
  })
  // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }


// отримання мілісекунд
const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
//=> 1330515905123

// Додавання мілісекунд до дати
const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
//=> Thu Jul 10 2014 12:45:30.750

// Імпортуйте необхідні функції з бібліотеки date-fns
import { addHours, addMinutes, format } from 'date-fns';
// Визначте початкову дату
const initialDate = new Date();
// Додайте певну кількість годин
const hoursToAdd = 5;
const dateWithAddedHours = addHours(initialDate, hoursToAdd);
// Додайте певну кількість хвилин
const minutesToAdd = 30;
const dateWithAddedMinutes = addMinutes(initialDate, minutesToAdd);
// Відформатуйте та виведіть результат
const formattedDateWithAddedHours = format(dateWithAddedHours, 'yyyy-MM-dd HH:mm:ss');
const formattedDateWithAddedMinutes = format(dateWithAddedMinutes, 'yyyy-MM-dd HH:mm:ss');


// Різниця в мілісекундах
const result = differenceInMilliseconds(
    new Date(2014, 6, 2, 12, 30, 21, 700),
    new Date(2014, 6, 2, 12, 30, 20, 600)
  )
  //=> 1100

// Перетворення дати
const date = new Date(2022, 6, 10)
//=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
  transpose(date, UTCDate)
  //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'


// різниця в даті
const hendleTimeDifference = (date1, date2) => {
    const diffInMilliseconds = Math.abs(new Date(date1) - new Date(date2));
    const seconds = Math.floor((diffInMilliseconds / 1000) % 60);
    const minutes = Math.floor((diffInMilliseconds / 1000 / 60) % 60);
    const hours = Math.floor(diffInMilliseconds / 1000 / 60 / 60);
    const formattedTime = 
      String(hours).padStart(2, '0') + ':' + 
      String(minutes).padStart(2, '0') + ':' + 
      String(seconds).padStart(2, '0');
  
    return formattedTime;
  }



  // ============================================================================
  
  // const createdAtDate = new Date(createAt);
  // const currentDate = new Date();
  // const differenceInDays = differenceInCalendarDays(currentDate, createdAtDate);

  // if (differenceInDays === 0) {
  //   return 'Today';
  // } else if (differenceInDays === 1) {
  //   return 'Yesterday';
  // } else if (differenceInDays <= 7) {
  //   return 'In a week';
  // } else if (differenceInDays <= 14) {
  //   return '2 weeks ago';
  // } else if (differenceInDays <= 21) {
  //   return '3 weeks ago';
  // } else if (differenceInDays <= 28) {
  //   return '4 weeks ago';
  // } else if (differenceInDays <= 31) {
  //   return 'A month ago';
  // } else {
  //   return format(createdAtDate, 'dd.MM.yyyy');
  // }


