
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