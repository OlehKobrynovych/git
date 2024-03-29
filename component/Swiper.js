// анімація  слайдера
// https://gsap.com/

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


/* тест скрол слідер*/
.producers-block__top-swiper {
    overflow-x: hidden; /* Додаємо цю властивість для блокування зміщення вправо-вліво */
    /* scroll-snap-type: x mandatory; */
    scroll-snap-type: block;
    /* white-space: nowrap; */
  }
  
  /* Якщо ви вирішите використовувати overflow: hidden, то ця частина може бути зайвою */
  .producers-block__top-slider-wrap {
    scroll-snap-align: start;
  }

/*  */