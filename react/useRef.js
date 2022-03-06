//.....................
Хук useRefдозволяє зберігати значення між візуалізації.
Його можна використовувати для збереження змінюваного значення, яке не спричиняє повторне відтворення 
під час оновлення.
Його можна використовувати для безпосереднього доступу до елемента DOM.


Використовуйте useRefдля відстеження візуалізації програми.

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));



//  У React ми можемо додати refатрибут до елемента, щоб отримати до нього доступ безпосередньо в DOM

import { useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


// useRefдля відстеження значень попереднього стану:


import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));





import FancyButton from './FancyButton';

const ref1 = React.createRef();  //створює посилання, яке може бути додане до елемента React через ref атрибут.
// ref1.current.focus()

<input ref={ref1} />;

//......................useRef
function TextInputWithFocusButton() {
    const inputEl = useRef();

    const onButtonClick = () => {
      inputEl.current.focus()
    }

    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
      </>
    )
}



// 1.
function TextInputWithFocusButton() {
    const inputEl = useRef(null)
    const onButtonClick = () => {
      // `current` указывает на смонтированный элемент `input`
      inputEl.current.focus()
    }
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>
          Установить фокус на поле ввода
        </button>
      </>
    )
  }
  
  
  // 2.
  import React from 'react';
  
  function App() {
    const [value, setValue] = React.useState('initial');
    const renderCount = React.useRef(1);
    const inputRef = React.useRef(null);
    const inputValueRef = React.useRef('');
  
  
    React.useEffect(() => {
      renderCount.current++
      console.log(inputRef.current.value);
    });
  
    React.useEffect(() => {
      inputValueRef.current = value;
    }, [value]);
  
    return (
      <div>
         <h1>{renderCount.current}</h1>
         <input type='text' 
                onChange={e => setValue(e.target.value)} 
                value={value} 
                ref={inputRef}  
              />
     {/* при натисканні на кнопку, фокус переміститься в input */}
          <button onClick={() => inputRef.current.focus()}>Focus</button>
  
  {/* при вводі в інпуті , інформація буде виводитися тут */}
        <div>{inputValueRef.current}</div>
        
      </div>
    );
  }
  
  export default App;
  





// щоб передати ref в дочірній компонент використовують forwardedRef
const ref = React.createRef();

<FancyButton ref={ref}>Click me!</FancyButton>;



// React.forwardRef створює React-компонент, що передає атрибут ref, який він отримав, 
// іншому компоненту, розташованому нижче у дереві. 
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
));
  



// 
function logProps(Component) {
    class LogProps extends React.Component {
      componentDidUpdate(prevProps) {
        console.log('old props:', prevProps);
        console.log('new props:', this.props);
      }
  
      render() {
        const {forwardedRef, ...rest} = this.props;
  
        // Передаємо в якості рефа проп "forwardedRef"
        return <Component ref={forwardedRef} {...rest} />;
      }
    }
  
    // Зауважте, другий параметр "ref" переданий від React.forwardRef.
    // Ми можемо передати його в LogProps, як звичайний проп, наприклад: "forwardedRef",
    // А потім прив'язати його до компоненту.
    return React.forwardRef((props, ref) => {
      return <LogProps {...props} forwardedRef={ref} />;
    });
}
