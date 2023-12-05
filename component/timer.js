
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