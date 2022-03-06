React useMemoHook повертає збережене значення.Подумайте про запам’ятовування як кешування
 значення, щоб його не потрібно було перераховувати.Хук запускається лише тоді , useMemoколи одна з 
 його залежностей оновлюється.Це може підвищити продуктивність.Гачки і гачки схожі useMemo. 
 useCallbackОсновна відмінність полягає в тому, що useMemoповертає запам’ятовуване значення і 
 useCallbackповертає запам’ятовуване функцію. Ви можете дізнатися більше про useCallbackвикористання
  зворотного виклику .

  useMemoХук можна використовувати для запобігання безглуздому запуску дорогих ресурсомістких функцій .
  Щоб вирішити цю проблему з продуктивністю, ми можемо використовувати useMemoхук для запам’ятовування 
  expensiveCalculationфункції. Це призведе до запуску функції лише тоді, коли це необхідно.

  Ми можемо обернути дорогий виклик функції за допомогою useMemo.
  
  Хук useMemoприймає другий параметр для оголошення залежностей. Дорога функція буде працювати лише
   тоді, коли її залежності змінилися.

  import { useState, useMemo } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

ReactDOM.render(<App />, document.getElementById('root'));




/useMemo - гак може бути використаний для оптимізації витрат при обчисленні компоненти функції .
// функція виконується лише коли зміна стану є у search. Він не запускається, якщо стан змінюється для text,
// оскільки це не залежність для цієї функції фільтра і, отже, не залежність у масиві залежностей для хука useMemo.
import React from 'react';

const users = [
  { id: 'a', name: 'Robin' },
  { id: 'b', name: 'Dennis' },
];

const App = () => {
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  // const filteredUsers = users.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredUsers = React.useMemo(() =>
      users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),[search]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default App;
