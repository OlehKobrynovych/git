щоб передати дані з батьківськкого компонента через декілька дочірніх можна використати provide

export default {
  data() {
    return {
      message: 'hello!'
    }
  },
  provide() {
    // use function syntax so that we can access `this`
    return {
      message: this.message
    }
  }
}

щоб отримати в дочірньому потрібно inject

export default {
  inject: ['message'],
  created() {
    console.log(this.message) // injected value
  }
}

спосіб не реактивний дані не викличуть рендер

Щоб зробити ін’єкції реактивно пов’язаними з постачальником, нам потрібно надати обчислювану властивість за допомогою функції computed() :

import { computed } from 'vue'

export default {
  data() {
    return {
      message: 'hello!'
    }
  },
  provide() {
    return {
      // explicitly provide a computed property
      message: computed(() => this.message)
    }
  }
}