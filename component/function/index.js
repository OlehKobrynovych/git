
// визначння позиції елемента
const handlePositionCategory = (id) => {
    setIsOpenSubCategory(true)
    setOpenCategoryId(id)
    const divElement = document.getElementById(`header-${id}`);

    if (divElement) {
        // const { top, left, right, bottom, width, height } = divElement.getBoundingClientRect();
        const { left, right, width } = divElement.getBoundingClientRect();
        const screenWidth = window.innerWidth;
        const distanceToRight = screenWidth - right;
        console.log('left', left)
        setNewLeft(left)
        // if ((left - 150) < 0) {
        //         return
        // }
        // if ((left - 150) > 0 && (distanceToRight - 150) < 0) {
        //     setNewLeft(width + distanceToRight - 370)
        //     setNewTranslatetX(0)
        // }
    }
}


// створення масиву чисел
const data = Array.from({ length: pageSearchParams ? (pageSearchParams + 1)*40 : 40 }, (_, index) => index + 1);


//запис нового значення
setCharacteristicsOptions((prevValue) => {
    let arr = prevValue.map((el, i) => {
        if (el.name === characteristic.name) {
            el = {...el, is_hide_in_filter: is_hide_in_filter, is_new_value_blocked: is_new_value_blocked, is_few_values_allowed: is_few_values_allowed, is_required_input: is_required_input}
            return el;
        }
        return el;
    });

    return [...arr]
})

// взнати ip користувача
const fetchIP = () => {
    return fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            console.log('IP address:', data);
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
            return null; 
        });
  }