<Teleport>— це вбудований компонент, який дозволяє нам «телепортувати» частину шаблону компонента у вузол DOM,
 який існує поза ієрархією DOM цього компонента.

 якщо модальне вікно потрібно спозиційовати відносно боді, не враховує батьківскі компоненти з позицією релетів

 <button @click="open = true">Open Modal</button>

<Teleport to="body">           // to вказує відносно чого відобразити 
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
