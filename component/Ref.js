
const resultRef = useRef(null);

setProductWrapWidth(productWrapRef.current.clientWidth) //довжина контейнера

const handleMouseEnter = () => {
    const element = resultRef.current;
    if (element) {
        const rect = element.getBoundingClientRect();
        // console.log('window.innerWidth', window.innerWidth);
        // console.log('rect.right', rect.right);
        setdistanceToRight(window.innerWidth - rect.right < 220 ? 240 - (window.innerWidth - rect.right) : 0)
    }
}



// плавний скрол через ref
const handleScroll = () => {
    scrollBtn.current.scrollIntoView({ behavior: 'smooth' });
    // scrollBtn.current.scrollIntoView({ behavior: 'auto' });
};