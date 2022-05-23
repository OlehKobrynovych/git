Використовуйте директиву для підписки на події DOM та виконання JavaScript-коду
 після їх настання v-on.

  v-on Скорочення: @

//   1
<div id="example-1">
  <button v-on:click="counter += 1">+1</button>
  <p>Кнопка выше была нажата {{ counter }} раз</p>
</div>
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

//   2
<div id="example-2">
  <!-- `greet` — это название метода, определённого ниже -->
  <button v-on:click="greet">Поприветствовать</button>
</div>
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // определяйте методы в объекте `methods`
  methods: {
    greet: function (event) {
      // `this` внутри методов указывает на экземпляр Vue
      alert('Привет, ' + this.name + '!')
      // `event` — нативное событие DOM
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})


//   3
<div id="example-3">
  <button v-on:click="say('hi')">Скажи hi</button>
  <button v-on:click="say('what')">Скажи what</button>
</div>
new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})




<!-- полный синтаксис -->
<a v-on:click="doSomething"> ... </a>

<!-- сокращённая запись -->
<a @click="doSomething"> ... </a>

<!-- сокращённая запись с динамическим именем события (2.6.0+) -->
<a @[event]="doSomething"> ... </a>



<!-- можно использовать динамические аргументы для привязки обработчика к динамическому имени события: -->
<a v-on:[eventName]="doSomething"> ... </a>
<a v-on:focus="doSomething"> ... </a>


<!-- Іноді нам також потрібно отримати доступ до вихідної події DOM у вбудованому обробнику операторів. -->
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

methods: {
  warn: function (message, event) {
    // now we have access to the native event
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}

//
<div id="app">
  <button v-on:click="button_click">click</button>
</div>
<script>
  var vm = new Vue({
  el: '#app',
  data: {
  message: 'Tutorialsplane'
  },
  methods: {
    button_click: function (event) {
      alert('Hello ' + this.message + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
</script>

.stop- Викличе event.stopPropagation().
.prevent- Викличе event.preventDefault().
.capture— додасть передплату в режимі capture.
.self- Викличе обробник тільки якщо подія виникла безпосередньо на цьому елементі.
.{keyCode | keyAlias}- Викликає обробник тільки при натисканні певної клавіші.
.native— передплатити нативну подію на кореневому елементі компонента.
.once- Викличе обробник не більше одного разу.
.left- (2.2.0) виклик обробника лише за натисканням лівої кнопки миші.
.right- (2.2.0) виклик обробника лише за натисканням правої кнопки миші.
.middle- (2.2.0) виклик обробника лише за натисканням середньої кнопки миші.
.passive- (2.3.0+) виклик обробника події DOM з опцією { passive: true }.

<!-- событие click не будет всплывать дальше -->
<a v-on:click.stop="doThis"></a>

<!-- событие submit больше не будет перезагружать страницу -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- модификаторы можно объединять в цепочки -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- и использовать без указания метода-обработчика -->
<form v-on:submit.prevent></form>

<!-- можно отслеживать события в режиме capture, т.е. событие, нацеленное -->
<!-- на внутренний элемент, обрабатывается здесь до обработки этим элементом -->
<div v-on:click.capture="doThis">...</div>

<!-- вызов обработчика только в случае наступления события непосредственно -->
<!-- на данном элементе (то есть не на дочернем компоненте) -->
<div v-on:click.self="doThat">...</div>

<!-- Событие click сработает только 1 раз -->
<a v-on:click.once="doThis"></a>


<!-- по умолчанию событие scroll (при прокрутке) произойдёт -->
<!-- незамедлительно, вместо ожидания окончания `onScroll`  -->
<!-- на случай, если там будет `event.preventDefault()`     -->
<div v-on:scroll.passive="onScroll">...</div>
Не используйте вместе .passive и .prevent, потому что .prevent будет проигнорирован и
браузер возможно покажет предупреждение. Помните, что .passive сообщает браузеру,
что вы не хотите предотвращать поведение по умолчанию для события.


<!-- вызвать `vm.submit()` только если `key` будет `Enter` -->
<input v-on:keyup.enter="submit">
<input v-on:keyup.13="submit">
.enter
.tab
.delete (ловит как «Delete», так и «Backspace»)
.esc
.space
.up
.down
.left
.right
.ctrl
.alt
.shift
.meta


<!-- сработает, только когда нажат Ctrl и не нажаты никакие другие клавиши -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- сработает, только когда не нажаты никакие системные модификаторы -->
<button v-on:click.exact="onClick">A</button>



При использовании модификаторов порядок имеет значение, потому что код генерируется в том же порядке.
Поэтому v-on:click.prevent.self будет предотвращать все клики, в то время как v-on:click.self.prevent
будет предотвращать клики только на самом элементе.