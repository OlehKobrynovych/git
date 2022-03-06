//
event.preventDefault()
event.stopPropagation()





//
setInterval()
clearInterval(this.timerID);

setTimeout()
clearTimeout(this.timerID);

btn.addEventListener("click", () => {}, options);
btn.removeEventListener('click', () => {}, options);

// приклад class сomponent
class Clock extends React.Component {
// class Clock extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    //   clearTimeout(this.timerID);
    //   btn.removeEventListener('click', () => {}, options);
    }

    shouldComponentUpdate(nextProps, naxtState) {
        return nextProps != this.props || nextState != this.state;
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Привіт, світе!</h1>
          <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );








//
{arr.length > 0 ? 'asd' : 'asd2'}

{arr.length > 0 && 'asd'}







// map()
<ul>
    { ['asd', 'asd2', 'asd3'].map((el, index) => <li key={index}>{el}</li>) }
</ul>

//
function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Привіт, світе', content: 'Ласкаво просимо до вивчення React!'},
    {id: 2, title: 'Установка', content: 'React можна встановити через npm.'}
  ];

  ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
  );






// children react

// 1.
// file1
const html1 = <h1>asd asd</h1>
<FancyBorder color="blue" color2="blue2" html1={html1} />
<FancyBorder color="blue" color2="blue2" html1={html1}></FancyBorder>
// file2
{props.html1}

// file1
<FancyBorder color="blue" color2="blue2">
    <h1>asd asd</h1>
</FancyBorder>
// file2
{props.children}

// 2. function children react 
// Викликати numTimes разів дочірню функцію зворотнього виклику для створення повторюваних компонентів
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }
  
  function ListOfTenThings() {
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>Це елемент {index} у списку</div>}
      </Repeat>
    );
  }



// react import
import OtherComponent from './OtherComponent';
// react lazy import
import React from 'react';
const OtherComponent = React.lazy(() => import('./OtherComponent'));
// react lazy import
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));

//
import React, { lazy, Suspense } from 'react';
const OtherComponent = lazy(() => import('./OtherComponent'));  // ледаче завантаження компонента

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Завантаження...</div>}>      // дозволяє нам показати резервний контент (наприклад, індикатор завантаження), поки ми чекаємо на завантаження ледачого компонента.
        <OtherComponent />
      </Suspense>
    </div>
  );
}

//
import React, { Suspense } from 'react';
const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Завантаження...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}


//
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Завантаження...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);












// життєвий цикл компонента
class MyClass extends React.Component {
    componentDidMount() {                            // створення компоненти
      let value = this.context;
      /* perform a side-effect at mount using the value of MyContext */
    }
    componentDidUpdate() {                           // оновлення компоненти
      let value = this.context;
      /* ... */
    }
    componentWillUnmount() {                         // видалення компоненти
      let value = this.context;
      /* ... */
    }
    render() {                                       // відображення компоненти
      let value = this.context;
      /* render something based on the value of MyContext */
    }
  }











// ...................................................createContext
const ThemeContext = React.createContext('light');

const UserContext = React.createContext({
  name: 'Guest',
});

class App extends React.Component {
  render() {
    const {signedInUser, theme} = this.props;

    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}







//......................ref
import FancyButton from './FancyButton';

const ref1 = React.createRef();
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










//..................................<></>
<React.Fragment key={el.id}>
    {/* //... */}
</React.Fragment>

//
<>
    {/* //... */}
</>

//
function Glossary(props) {
    return (
      <dl>
        {props.items.map(item => (
          <React.Fragment key={item.id}> // Без атрибута `key`, React видасть попередження про його відсутність
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
}







//......................................portals
https://uk.reactjs.org/docs/portals.html









//.........................................PropTypes
// https://uk.reactjs.org/docs/typechecking-with-proptypes.html
import React from 'react';
import PropTypes from 'prop-types';

const Asddd = (props) =>{
// const Asddd = ({asd, asd2, asd3,...}) =>{
    return (
        <ul style={styles.ul}>
            {props.arr.map((el, index) => {
                return <Li {...props} el={el} index={index}/>
            })}
        </ul>
    )
}

// Задає типізацію даних з пропсів:
Asddd.propTypes = {
    name: PropTypes.string,                                  // 'asd'
    asd4: PropTypes.number,                                  // 12345
    asd: PropTypes.array,                                  // ['asd',2,4,'asfe']
    asd2: PropTypes.arrayOf(PropTypes.object).isRequired,  // [{name: 'asd'}, {name: 'asd'}, {name: 'asd'}]
    asd2: PropTypes.arrayOf(PropTypes.string),             // // ['asd', 'asfe']
    asd3: PropTypes.object.isRequired,
    myff: PropTypes.func.isRequired,
    
    message:   PropTypes.string.isRequired,
    style:     PropTypes.object.isRequired,
    isMetric:  PropTypes.bool.isRequired,
    miles:     PropTypes.number.isRequired,
    milesToKM: PropTypes.func.isRequired,
    races:     PropTypes.array.isRequired,

    children: PropTypes.element.isRequired
}

// Задає значення пропсів за замовчуванням:
Greeting.defaultProps = {
    name: 'asdasd',
    asd4: 123,
};

export default Asddd;










//........................memo()
//React.memo - може бути використаний для оптимізації поведінки візуалізації ваших компоненти функції
//Відображається лише новий елемент. Усі попередні елементи у списку залишаються незмінними
// і, таким чином, не відображаються повторно. Зараз відображаються лише ті компоненти, на
// які впливають зміни стану.
import React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([
    { id: 'a', name: 'Robin' },
    { id: 'b', name: 'Dennis' },
  ]);

  return (
    <div>
      <List1 list={users} />
      <List2 list={users} />
    </div>
  );
};


const List1 = React.memo(({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ul>
  );
});

const List2 = ({ list }) => {
    return (
        <ul>
          {list.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </ul>
    );
};


//.........................useMemo()
//useMemo - гак може бути використаний для оптимізації витрат при обчисленні компоненти функції .
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






//..................................useCallback()
// useCallback Hook використовується для запам'ятовування функцій. Це вже невеликий приріст продуктивності, 
// коли функції передаються іншим компонентам, не турбуючись про повторну ініціалізацію функції для кожного 
// повторного відтворення батьківського компонента. Однак, як ви вже бачили, ReaC's useCallback Hook починає 
// світитись, коли використовується разом із нагадувальним API React.

// Передайте вбудовану функцію зворотнього виклику і масив залежностей. useCallback поверне мемоізовану 
// версію функції зворотнього виклику, котра змінюється лише тоді, коли одна з її залежностей змінюється. 
// Це корисно при передачі фукцій зворотнього виклику до оптимізоваих дочірніх компонентів, що покладаються 
// на рівність посилань задля уникнення непотрібних рендерів (наприклад, shouldComponentUpdate).

// useCallback(fn, deps) є еквівалентом useMemo(() => fn, deps).

const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b],
  );
  
  
  // 2.
  // Ми можемо використовувати useCallback для запам'ятовування функції , а це означає, що ця функція 
  // перевизначається лише в тому випадку, якщо будь-яка її залежність у масиві залежностей змінюється:
  // Якщо usersстан змінюється шляхом додавання або вилучення елемента зі списку, функція обробника 
  // перевизначається, а дочірні компоненти повинні рендерити.
  import React from 'react';
  import { v4 as uuidv4 } from 'uuid';
   
  const App = () => {
    const [users, setUsers] = React.useState([
      { id: 'a', name: 'Robin' },
      { id: 'b', name: 'Dennis' },
    ]);
   
    const [text, setText] = React.useState('');
   
    const handleText = (event) => {
      setText(event.target.value);
    };
   
    const handleAddUser = ()  =>{
      setUsers(users.concat({ id: uuidv4(), name: text }));
    };
   
    // const handleRemove = (id) => {
    //   setUsers(users.filter((user) => user.id !== id));
    // };
    const handleRemove = React.useCallback(
      (id) => setUsers(users.filter((user) => user.id !== id)),
      [users]
    );
   
    return (
      <div>
        <input type="text" value={text} onChange={handleText} />
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
   
        <List list={users} onRemove={handleRemove} />
      </div>
    );
  };
   
  // const List = ({ list, onRemove }) => {
  const List = React.memo(({ list, onRemove }) => {
    return (
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} onRemove={onRemove} />
        ))}
      </ul>
    );
  };
  });
   
  // const ListItem = ({ item, onRemove }) => {
  const ListItem = React.memo(({ item, onRemove }) => {  
    return (
      <li>
        {item.name}
        <button type="button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </li>
    );
  };
  });
   
  export default App;









//.......................Ajax
// method: get, post, put, delete...

//   1.                      XMLHttpRequest
  function loadDoc() {
    var xhttp;

    if (window.XMLHttpRequest) {
      // code for modern browsers
      xhttp = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };

    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }




//   2.                          fetch
//
fetch('/article/fetch/post/image', {
        method: 'POST',
        body: user
    })
    // .then(response => response.json())
    .then(response => {
        let data = response.json();

        if (data.status === 200) {
            // setData(data.value);
            alert('Data create success');
        } else {
            alert('Error');
        }
    })
    // .then(result => alert(JSON.stringify(result, null, 2)))

//                      fetch - asinc/await
async function submit() {
    let response = await fetch('/article/fetch/post/user', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    
    let res = await response.json();

    if (res.data.success) {
        alert('Data create success');
    } else {
        alert('Error');
    }
}



// 3.
axios.post('/article/fetch/post/image', { lessons: lessons })
    .then((response) => {
        if (response.data.success) {
            alert('Data create success');
        } else {
            alert('Error');
        }
    })
    .catch((err) => {
        alert('Error');
        console.log('error: ', err);
    })
    .finally(() => {});

//
async function submit() {
    const response = await axios.get('/user?ID=12345');
    if (response.data.success) {
        alert('Data create success');
    } else {
        alert('Error');
    }
}






//...............................useEffect()
// useEffect() - Подібно до componentDidMount та componentDidUpdate:

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Ви натиснули ${count} разів`;
        // document.title = 'Ви натиснули ' + count + 'разів';
    });

    useEffect(() => {
        document.title = `Ви натиснули ${count} разів`;
    }, []);


    useEffect(() => {
        document.title = `Ви натиснули ${count} разів`;
    }, [count]);

    useEffect(() => {
        document.title = `Ви натиснули ${count} разів`;
    }, [count, count2]);

    return (
        <div>
            <p>Ви натиснули {count} разів</p>

            <button onClick={() => setCount(count + 1)}>
            Натисни мене
            </button>
        </div>
    );
}

//
useEffect(() => {
    axios.get('/article/fetch/post/image')
      .then((response) => {
          if (response.data.success) {
              alert('Data create success');
              setName(response.data.name);
          } else {
              alert('Error');
          }
      })
      .catch((err) => {
          alert('Error');
          console.log('error: ', err);
      })
      .finally(() => {});
}, []);


//
useEffect(() => {
    const timeout = setTimeout(() => {
       setCount(1);
     }, 3000);
 
    return () => clearTimeout(timeout);
},[]);


// useEffect() - Подібно до componentDidMount та componentDidUpdate:
class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
      document.title = `Ви натиснули ${this.state.count} разів`;
    }
    componentDidUpdate() {
      document.title = `Ви натиснули ${this.state.count} разів`;
    }
  
    render() {
      return (
        <div>
          <p>Ви натиснули {this.state.count} разів</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Натисни мене
          </button>
        </div>
      );
    }
  }


//
    componentDidMount() {
        axios.get('/article/fetch/post/image')
            .then((response) => {
                if (response.data.success) {
                    alert('Data create success');
                    setName(response.data.name);
                } else {
                    alert('Error');
                }
            })
            .catch((err) => {
                alert('Error');
                console.log('error: ', err);
            })
            .finally(() => {});
    }


    //
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
      //   clearTimeout(this.timerID);
      //   btn.removeEventListener('click', () => {}, options);
      }






// ............................useContext()
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = React.createContext(themes.light);
  
  function App() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }





//...............................useReducer()
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}



//...................useMemo(), useCallback()
const handleRemove = useMemo((id) => {
    setUsers(users.filter((user) => user.id !== id))
}, [users]);

const handleRemove = useCallback((id) => {
    setUsers(users.filter((user) => user.id !== id))
}, [users]);