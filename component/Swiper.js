// заміна кнопок свайпера на свої 

const swiperRef = useRef(null);

const handlePrevSleder = () => {
    // if (swiper__1Ref.current && swiper__1Ref.current.swiper) {
    //     swiper__1Ref.current.swiper.slidePrev(); 
    // }
    if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext(); 
    }
}

const handleNextSleder = () => {
    // if (swiper__1Ref.current && swiper__1Ref.current.swiper) {
        //     swiper__1Ref.current.swiper.slideNext(); 
    // }
    if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev(); 
    }
}