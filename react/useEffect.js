
//...............................useEffect()
// useEffect() - Подібно до componentDidMount та componentDidUpdate:

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

    useEffect(() => {               // працює на кожному рендері
        document.title = `Ви натиснули ${count} разів`;
        // document.title = 'Ви натиснули ' + count + 'разів';
    });

    useEffect(() => {               // працює лише раз
        document.title = `Ви натиснули ${count} разів`;
    }, []);


    useEffect(() => {              // працює при зміні count
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


Деякі ефекти вимагають очищення, щоб зменшити витік пам’яті.
Тайм-аути, підписки, прослуховувачі подій та інші ефекти, які більше не потрібні, слід видалити.
Ми робимо це, включаючи функцію повернення в кінці useEffectHook.

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

ReactDOM.render(<Timer />, document.getElementById("root"));



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
