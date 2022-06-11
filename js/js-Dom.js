Метод Element.matches() вернёт true или false, в зависимости от того, соответствует ли элемент указанному css-селектору.
вертає true якщо в діва є відповідний клас

var coll = document.querySelectorAll("div");
for (var i = 0, len = coll.length; i < len; i++) {
  if (coll[i].matches(".someClass")) {
    alert(coll[i].id+": Я выжил!");
  }else{
    coll[i].remove();
  }

//////////////////////////////////////////////////////
  Метод Element.remove() удаляет элемент из DOM-дерева, в котором он находится.

  var el = document.getElementById('div-02');
el.remove(); // Удалит элемент div с идентификатором 'div-02'



///////////////////////////////////////////////////////////////
Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует 
заданному CSS-селектору или null, если таковых элементов вообще нет.



/////////////////////////////////////////////////////////////////////////
Метод Element.append() вставляет узлы или строки с текстом в конец Element. Строки с текстом вставляются как текстовое содержимое.

Отличия от метода Node.appendChild():

Метод Element.append() позволяет вставлять строки с текстом, в то время как Node.appendChild() работает только с узлами.
При вызове метод Element.append() ничего не возвращает, в то время как Node.appendChild() возвращает вставленный узел.
С помощью Element.append() можно вставить сразу несколько узлов или строк текста, в то время как Node.appendChild() 
умеет вставлять по одной сущности за раз.

let div = document.createElement("div")
let p = document.createElement("p")
div.append(p)

console.log(div.childNodes) // NodeList [ <p> ]

// ----------
let div = document.createElement("div")
div.append("Какой-то текст")

console.log(div.textContent) // "Какой-то текст"

// ---------
let div = document.createElement("div")
let p = document.createElement("p")
div.append("Какой-то текст", p)

console.log(div.childNodes) // NodeList [ #text "Какой-то текст", <p> ]


//////////////////////////////////////////////////////////////
Метод Element.after()вставляє набір Nodeабо рядок об’єктів у дочірній список Elementбатьківського елемента 
відразу після Element. Рядкові об'єкти вставляються як еквівалентні Textвузли.


let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span, "Text");

console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"
