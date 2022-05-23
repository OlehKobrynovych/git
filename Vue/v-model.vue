 Можна використовувати директиву v-modelдля двонаправленого зв'язування даних з 
 елементами форм input, textarea і select. Спосіб оновлення елемента автоматично 
 вибирається залежно від типу елемента.
 
 
 
 v-model  Використовується лише з:

<input>
<select>
<textarea>
компонентами


Модифікатори:

.lazy— підписатися на події change, а неinput
.number— наводити коректний введений рядок до числа
.trim— видаляти пробіли на початку та наприкінці введеного рядка


// За замовчуванням v-model синхронізує введення з даними після кожної inputподії (за винятком складу IME, як зазначено вище ). Ви можете додати lazyмодифікатор замість синхронізації після change подій:
// Директива v-model за замовчуванням оновлює властивості даних при кожному натисканні клавіші, додаючи .lazyмодифікатор, який оновлює дані лише після changeспрацювання події.
<input v-model.lazy="msg">

// Якщо ви хочете, щоб введення користувача автоматично вводилося як число, ви можете додати numberмодифікатор до v-modelкерованих входів:
// Це часто буває корисним, оскільки навіть при type="number"цьому значення елементів введення HTML завжди повертає рядок. Якщо значення неможливо проаналізувати parseFloat(), повертається початкове значення.
<input v-model.number="age" type="number">

// Якщо ви хочете, щоб пробіли введення даних користувача автоматично обрізалися, ви можете додати trimмодифікатор до своїх v-modelкерованих входів:
// використовується для видалення пробілів на початку і в кінці.
<input v-model.trim="msg">


<!-- 1. Кілька прапорців, прив'язаних до одного масиву: -->
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>

data: {
  checkedNames: [];
}

<!-- 11. -->
<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>

<!-- 111.  -->
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>

  data: {
    selected: '';
  }


<!-- 1111.  -->
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>

  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }


<!-- 2. -->
<input v-model="message" placeholder="edit me">
<!-- 22. Багаторядковий текст -->
<textarea v-model="message" placeholder="add multiple lines"></textarea>