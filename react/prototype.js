//.....................................Prototype
В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом, либо null.
.........prototype   Властивість JavaScript дозволяє додавати нові властивості до конструкторів об'єктів:
Person.prototype.nationality = "English";
........prototype    Властивість JavaScript також дозволяє додавати нові методи до конструкторів об'єктів:
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};


Метод hasOwnProperty позволяет проверять является ли данное свойство собственным свойством объекта или же оно взято из прототипа.



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