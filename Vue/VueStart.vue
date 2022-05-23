<template>         //  1 секція відображення компонента
  <div>            // обовязково мусить бути корневий тег

      <div>text: {{asd}}</div>               // щоб відобазити змінну використовують {{}}
      <div>text: {{asd2}} {{asd3}}</div>

      <!-- <input :value='asd2' @change="handleChange" /> -->
      <!-- <input :value='asd2' @change="handleChange($event, 'asd')" /> -->
      <input v-model="asd2" />           // v-model  привязує до змінної asd2 value і відображає її в input
      <div>{{asd2}}</div>


      <!-- if -->
      <div>
          <span>show el: </span>
          <span v-if="true">asdasd</span>  // якщо умова true то відображає span

          <span>hide el: </span>
          <span v-if="false">asdasd</span>
          <span v-else>2222</span>

          <!-- 1. -->
          <!-- <div v-if="type === 'A'">A</div>
          <div v-else-if="type === 'B'">B</div>
          <div v-else-if="type === 'C'">C</div>
          <div v-else>D</div> -->

          <!-- 2. -->
          <h1 v-show="true">Hello!</h1>   // якщо умова true то відображає span
          <h1 v-show="false">Hello!</h1>

      </div>
      <!-- ./if -->


      <!-- for -->
      <ul>
        <!-- цикл для обєктів -->
        <!-- <li v-for="el in jsonplaceholder" :key="el.id">{{el}}</li>    -->

        <!-- цикл для масивів -->
        <!-- <li v-for="el of jsonplaceholder" :key="el.id">{{el.title}}</li> -->
        <!-- <li v-for="(el, index) in jsonplaceholder" :key="el.id">{{index}}: {{el.title}}</li> -->
        <!-- <li v-for="({id, title}, index) in jsonplaceholder" :key="id">{{index}}: {{title}}</li> -->
      </ul>

      <!-- <ul>
          <template v-for="el in jsonplaceholder">
              <li :key="el.id">{{el.title}}</li>
              <li :key="el.id">{{el.id}}</li>
          </template>
      </ul> -->
      <!-- ./for -->


      <!-- computed: -->
      <div>fullName: {{fullName}}</div>

  </div>
</template>




<script>          // 2 секція опису всіх даних і логіки

// import { Datetime } from "vue-datetime";
// import VueTagsInput from '@johmun/vue-tags-input';

export default {
    components: {       //  вказуємо всі імпортовані компоненти
        // Datetime,
        // VueTagsInput,
    },

    props: {                // вказуємо дані які приходять в компонент можна тільки ті які будемо використовувати  
        // id: {
        //     type: Number || String,    // вказуємо їх тип 
        //     required: true,            //  флажки true false  не обовязково
        //     default: () => Math.random()     // вказуємо дефолтне значення
        // },

        // propF: {
        //     validator: function(value) {         // вказуємо валідацію не обовязково
        //       return ['success', 'warning', 'danger'].indexOf(value) !== -1
        //     }
        // }

        // errors1: String,
        // errors2: Number,
        // errors3: Boolean,
        // errors4: Object,
        // errors5: Array,
        // errors6: Function,

        // propA: [String, Number],
        // propB: Number || String,

        // errors7: {
        //     type: Number,      
        //     default: 0,
        // },
        // errors8: {
        //     type: Object,
        //     default: () => ({}),
        // },
        // errors9: {
        //     type: Array,
        //     default: () => [],
        // },
        // errors10: {
        //     type: Function,
        //     default: () => {},
        // },

    },

    data() {             //  створюємо змінні які потрібні для компонента
        return {
            asd: 2,
            asd2: 'asd2',
            asd3: true,
            asd4: [],
            asd5: {},
            asd6: null,
            // asd7: this.errors7,

            asdasd: 'asdasd',

            jsonplaceholder: null,

            intervalId: null,

            obj: {
              name: 'asdasd',
              name2: 'asdasd2',
            },

            f_name: 'Oleh',
            l_name: 'K.',
        };
    },

    beforeCreate() {
      
    },

    created() {
      
    },

    mounted() {         // секція монтування компонента спрацьовує 1 раз при монтуванні (юсефект з [] )
        // this.getDate();

        // this.intervalId = setInterval(this.handleChange, 3000);

        // document.querySelector('.c-datetime').addEventListener('click', this.handleChange);
    },

    beforeDestroy () {          // секція спрацює перед видалення компоненти
        // clearInterval(this.intervalId);
        // document.querySelector('.c-datetime').removeEventListener('click', this.handleChange);
    },

    // updated() {        // 
        // this.asd = this.asd + 1;
        // this.asd = 12;
    // },

    watch: {          // секція відстеження за змінними
        // // 1. 
        // asdasd: {
        //     handler(newAsdasd, prevAsdasd) {
        //         if (newAsdasd && prevAsdasd) {
        //             this.asd = 12;
        //         }
        //     },
        //     deep: true,                     // глибоке стеження, використовується для обєктів
        // },

        // // 2. 
        // 'obj.name': {
        //     handler(newName, prevName) {
        //         if (newName && prevName) {
        //             this.asd = 12;
        //         }
        //     },
        //     deep: true,               // глибоке стеження, використовується для обєктів
        // },
        // 'obj.name2': {
        //     handler(newName, prevName) {
        //         if (newName && prevName) {
        //             this.asd = 12;
        //         }
        //     },
        //     deep: true,                  // глибоке стеження, використовується для обєктів
        // },

        // // 3. 
        // 'asd': 'getDate',
    },

    computed: {           // секція великих обчислень. Дані виконання функції кешуються і змінюються тільки
        fullName() {        // тоді коли змінюються залежності  (useMemo в React)
            return this.f_name + ' ' + this.l_name;
        },
    },
    
    methods: {                     //секція де описуються всі методи
        // handleChange(event) {
        handleChange() {
            // this.asd2 = 'wwwww';
        },

        getDate() {
          // fetch('https://jsonplaceholder.typicode.com/todos')
          //   .then(response => response.json())
          //   .then(json => {
          //     this.jsonplaceholder = json;
          //   })
        },
    }
}
</script>


<style scoped>    // 3 секція стилів   scoped вказує що стилі застосуються тільки до цього компонента
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
