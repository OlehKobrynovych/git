<script setup>
import { reactive, ref, onMounted } from 'vue'    

// const count = ref(0)       // приймає все. доступ то значення через count.value
const state = reactive({ count: 0 })    //  reactive приймає тільки масиви і обєкти 
const x = ref(0)
const y = ref(0)

// const props = defineProps(['foo'])
// const props = defineProps({
//   model: Object
// })
// defineProps({
//   title: String,
//   likes: Number
// })

onMounted(() => {
  console.log(`the component is now mounted.`)
})


// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

function increment() {
  state.count++
}

const publishedBooksMessage = computed(() => {    // computed для важких обчислень. не повинно змінювати стейт і робити асинхронних запросів
  return author.books.length > 0 ? 'Yes' : 'No'
})

</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>

//////////

watchПерший аргумент може бути різними типами реактивних «джерел»: це може бути посилання (включаючи обчислені посилання),
реактивний об’єкт, функція отримання або масив із кількох джерел:

const obj = reactive({ count: 0 })

// this won't work because we are passing a number to watch()
watch(obj.count, (count) => {
  console.log(`count is: ${count}`)
})


////////////////////////////////// 

<script setup>
import { defineAsyncComponent } from 'vue'          // defineAsyncComponent лінива загрузка

const AdminPage = defineAsyncComponent(() =>
  import('./components/AdminPageComponent.vue')
)
</script>

<template>
  <AdminPage />
</template>
//////////////////////// 
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>

/////////////////////////////// 

defineProps({
  // Basic type check
  //  (`null` and `undefined` values will allow any type)
  propA: Number,
  // Multiple possible types
  propB: [String, Number],
  // Required string
  propC: {
    type: String,
    required: true
  },
  // Number with a default value
  propD: {
    type: Number,
    default: 100
  },
  // Object with a default value
  propE: {
    type: Object,
    // Object or array defaults must be returned from
    // a factory function. The function receives the raw
    // props received by the component as the argument.
    default(rawProps) {
      return { message: 'hello' }
    }
  },
  // Custom validator function
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // Function with a default value
  propG: {
    type: Function,
    // Unlike object or array default, this is not a factory function - this is a function to serve as a default value
    default() {
      return 'Default function'
    }
  }
})


