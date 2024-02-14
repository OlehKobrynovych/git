inputmode           // атрибут використовується в input and textarea щоб підказати бравзеру яку клавіатуру використовувати при спробі введення

accept  // атрибут в input type=file дозволяє відображати тільки ті типи файлів які потрібно accept='image/*, .gif, .web'

// забороняє роботам які роблять індексацію переходити за посиланням
<a rel="nofollow" />

// стилізація інпута react
const asd = useRef(null)

.hidden {
    width: 0;
    height: 0;
    opasiti: 0
}

const click = () => {
    asd.current.click()
}

<input className'hidden'  ref={asd} />
<button onClick={click}></button>