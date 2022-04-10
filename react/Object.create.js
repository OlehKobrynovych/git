Метод Object.create() создаёт новый объект с указанным прототипом и свойствами.

Метод Object.defineProperties()визначає нові або змінює існуючі властивості безпосередньо на 
об'єкті, повертаючи цей об'єкт.


Метод Object.getOwnPropertyDescriptor() // виводить значення поля і так можна перевірити чи воно є гетером чи сетером
Object.getOwnPropertyDescriptors() // виводить всі поля обєкта


// создаём новый объект, чей прототип является новым пустым объектом
// и добавляем простое свойство 'p' со значением 42

o = Object.create({}, { p: { value: 42 } });

// по умолчанию свойства НЕ ЯВЛЯЮТСЯ записываемыми, перечисляемыми или настраиваемыми:

// для определения свойства ES3
o2 = Object.create({}, {
    p: {
      value: 42,       // Значение, ассоциированное со свойством. Может быть любым допустимым значением JavaScript (числом, объектом, функцией и т.д.).
                       //  Значение по умолчанию установлено в undefined.
      writable: true,  // чи можна змінювати значення value
      enumerable: true,  // чи можна відображати value при якомусь циклі або друку
      configurable: true  // чи можна value видаляти
    },
    p2: {
        get () {}     // гетер
        set () {}     // сеттер
    }
})


let obj = {
    get propName() {
      // геттер, срабатывает при чтении obj.propName
    },
  
    set propName(value) {
      // сеттер, срабатывает при записи obj.propName = value
    }
  };


  Например, у нас есть объект user со свойствами name и surname:

let user = {
  name: "John",
  surname: "Smith"
};
А теперь добавим свойство объекта fullName для полного имени, которое в нашем случае "John Smith". Само собой, мы не хотим дублировать уже имеющуюся информацию, так что реализуем его при помощи аксессора:

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith


