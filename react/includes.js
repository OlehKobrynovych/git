Метод includes()визначає, чи містить масив певне значення серед своїх записів, 
повертається trueчи falseвідповідно.

includes(searchElement, fromIndex) // searchElement елемент який шукаємо  
//  fromIndex індекс з якого поченаємо шукати


// [1, 2, 3].includes(2)         // true
// [1, 2, 3].includes(4)         // false
// [1, 2, 3].includes(3, 3)      // false
// [1, 2, 3].includes(3, -1)     // true
// [1, 2, NaN].includes(NaN)     // true
// ["1", "2", "3"].includes(3)   // false
