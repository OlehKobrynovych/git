// Визначити рівень зуму

useEffect(() => {
    
    window.visualViewport.addEventListener('resize', handleZoomChange);

    return () => {
        window.visualViewport.removeEventListener('resize', handleZoomChange);
    };
}, [])


const handleZoomChange = (event) => {
    // Calculate the zoom level based on the window's devicePixelRatio
    const newZoomLevel = event.target.scale;
    // console.log("ZOOM", newZoomLevel);
    if (newZoomLevel > 1) {
        if (swiperRef && swiperRef?.current) {
            // console.log("ZOOM111111111111", swiperRef.current);
            // console.log("swiperRef.current", swiperRef.current);
            swiperRef.current.swiper.allowTouchMove = false
        }
    } else {
        if (swiperRef && swiperRef?.current) {
            // console.log("ZOOM22222222222222222222", newZoomLevel);
            // console.log("swiperRef.current", swiperRef.current);
            swiperRef.current.swiper.allowTouchMove = true
        }
    }
    // setZoomLevel(newZoomLevel);
};