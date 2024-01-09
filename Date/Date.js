// вивід дати
new Date(order.created_at).toLocaleString()


//  вивід дати без секунд
let date = new Date(str); // ваш timestamp
let day = date.getDate().toString().padStart(2, '0');
let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Додаємо 1, оскільки місяці в JavaScript ідуть з 0 до 11
let year = date.getFullYear();
let hours = date.getHours().toString().padStart(2, '0');
let minutes = date.getMinutes().toString().padStart(2, '0');

return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;