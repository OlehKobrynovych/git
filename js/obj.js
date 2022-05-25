// Метод Object.freeze() заморожує об’єкт . Заморожений об'єкт більше не можна змінити; заморожування об’єкта запобігає додаванню до 
// нього нових властивостей, видаленню існуючих властивостей, запобігає зміні перерахування, конфігурації або запису наявних 
// властивостей, а також запобігає зміні значень наявних властивостей. Крім того, заморожування об’єкта також запобігає зміні його 
// прототипу. freeze()повертає той самий об’єкт, який був переданий.


// 1.
const obj = {
    prop: 42
};
  
Object.freeze(obj);
obj.prop = 33;           // Throws an error in strict mode
console.log(obj.prop);   // expected output: 42


////////////////////////////////

... функція, яка має два параметри: ordersі cost. Поверніть усі замовлення, які перевищують вартість.
expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
// ➞ { "a": 3000, "c": 1050 }
expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
// ➞ { "Gucci Fur": 24600 }
expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
// ➞ {}
//kim
function expensiveOrders(orders, cost) {
	let obj = {};
	for ( const [key, value] of Object.entries(orders) ) {
		value >= cost ? obj[key] = value : obj;
	}
	return obj;
}


//
const expensiveOrders = (orders, cost) => Object.fromEntries(
	Object.entries(orders).filter(v => v[1] > cost));
//
function expensiveOrders(orders, cost) {
	return Object.fromEntries(Object.entries(orders).filter(([key, val]) => val > cost))
}
//
function expensiveOrders(orders, cost) {
	Object.keys(orders).forEach(i => {
		if(orders[i] < cost) delete orders[i]
	});
	return orders;
}

////////////////////////////////


...............Обєкт   перетворуєьбся в масив
var person = {name:"John", age:50, city:"New York"};
var myArray = Object.values(person);
console.log(myArray);      // ["John", 50, "New York"]
...
var myArray = Object.keys(person);
console.log(myArray);      // ["name", "age", "city"]

//////////////////////////////


//Object.entries() повертає масив
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
// returns an empty array for any primitive type, since primitives have no own properties
console.log(Object.entries(100)); // [ ]


///////////////////////////////
