import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({    // для vue 2
  state: {
    count: 0
  },
  getters: {                                  // для отримання даних зі стейту
    count: state => {
      return state.count;
    }
  },
  mutations: {                            // для зміни стейту
    increment (state) {
      state.count++
    }
  },
   actions: {                             // для асинхронних запросів
    increment(context) {
      context.commit('increment');
    }
  }
})

///////..................................................................

import { createStore } from 'vuex'
import { createApp } from 'vue'

const store = createStore({         // для vue 3
  state () {
    return {
      count: 1
    }
  }
})
const app = createApp({ /* ваш корневой компонент */ })
app.use(store)





//...................................................

methods: {
  increment() {
    this.$store.commit('increment')                 // визиваємо функцію яка змінить значення в сторі
    console.log(this.$store.state.count)
  }
}

//..........................................................

import { mapGetters } from 'vuex';

computed: {
  count () {
    return this.$store.getters.count      //щоб отримати дані зі стору
  }

 ...mapGetters([                           //щоб отримати дані зі стору
      'count',
      'anotherGetter'
      // ...
    ])

}

................................................................

import { mapMutations } from 'vuex';

 methods: {
    ...mapMutations([
      'increment', // `this.increment()` будет вызывать `this.$store.commit('increment')`

      // mapMutations также поддерживает нагрузку:
      'incrementBy' // `this.incrementBy(amount)` будет вызывать `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // `this.add()` будет вызывать `this.$store.commit('increment')`
    })
  }

store.commit('increment', 10);         // визов мутації при використанні мапМутейшн

this.$store.commit('xxx')            // визов мутації 

...................................................................... 
store.dispatch('incrementAsync', {               // для запуску акшена в компоненті з передачою даних
  amount: 10
});        