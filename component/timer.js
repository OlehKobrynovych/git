// https://date-fns.org/docs/Getting-Started




// функція спрацьовує при кожному виклику і перезапускає таймер
let [timerId, setTimerId] = useState(null);

const createTimer = () =>  {
    function startTimer() {
        if (timerId !== null) {
            clearTimeout(timerId);
        }

        setTimerId(setTimeout(() => {
            dispatch(setIsScrollSlider(false))
            timerId = null;
        }, 1300));
    }

    return startTimer();
}



// 2 варіант
const handleTimer = () =>  {
    function startTimer() {
        if (timerId !== null) {
            console.log('111111111timerId', timerId)
            function clearTimerSync(timerId) {

                return new Promise(resolve => {
              
                  clearTimeout(timerId);
                  
                  const check = () => {
                    if (!timerId) {
                      resolve();
                    } else {
                      setTimeout(check, 25);  
                    }
                  }
                  
                  setTimeout(check, 25);
              
                });
              
              }
        }

        console.log('222222222timerId', timerId)
        let res = setTimeout(() => {
            console.log('333333333333timerId', res)
            handleGetProducts(false)
            timerId = null;
        }, 500)
        console.log('44444444444444timerId', res)
        setTimerId(res);
    }

    return startTimer();
}