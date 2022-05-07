Метод reduce()застосовує функцію reducer до кожного елементу масиву 
(ліворуч-направо), повертаючи одне результуюче значення.

за допомогою reducer можна розгорнути масив масивів 
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
  });
  // flattened равен [0, 1, 2, 3, 4, 5]
  

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
