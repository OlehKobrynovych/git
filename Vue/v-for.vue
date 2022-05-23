v-forдля відображення списку елементів на основі масиву даних. 
Директива має v-forособливий синтаксис запису: item in items, 
де items— вихідний масив, а item— посилання на поточний елемент масиву:

<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, name, index) in object"></div>


<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})



Усередині блоку v-forнам доступні властивості області видимості батька. 
Також v-forє другий опціональний параметр з індексом поточного елемента.

<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Родитель',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})


v-forможна також використовувати для ітерування за властивостями об'єкта:

<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>

new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})


Можна використовувати другий аргумент для отримання імені властивості (ключ об'єкта):

<div v-for="(value, name) in object">
  {{ name }}: {{ value }}
</div>


І третій – для індексів:

<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>



