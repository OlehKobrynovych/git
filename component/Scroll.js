// Прибрати скрол на safari
https://habr.com/ru/articles/332872/
const [modalScrollPosition, setModalScrollPosition] = useState(0);

export const disabledScroll = (setModalScrollPosition=null) => {
    if (setModalScrollPosition) {
      setModalScrollPosition(window.scrollY);
      document.body.style.cssText = `
          overflow: hidden;
          position: fixed;
          top: -${window.scrollY}px;
          left: 0;
          width: 100vw;
          padding-right: ${window.innerWidth - document.body.offsetWidth}px
        `;
          // height: 100vh;
      document.documentElement.style.scrollBehavior = 'unset';
    }
}

export const enabledScroll = (modalScrollPosition) => {
  document.body.style.cssText = '';
  window.scroll({top: modalScrollPosition})
  document.documentElement.style.scrollBehavior = '';
}

// -------------------------------------------------------
// повісити на html
  // overscroll-behavior-y: none;
// -------------------------------------------------------




// повішати функцію на прослуховування
useEffect(() => {

  window.addEventListener("resize", handleResize);

  return () => {
      window.removeEventListener("resize", handleResize)
  };
}, [])

const handleResize = () => {
  if (window.innerWidth >= 960) {
      handleCloseModal()
  }
};


// зміна вигляду для повзунка прокрутки
// .creating-category__text-tab--wrap::-webkit-scrollbar {
//     height: 1px;
//     background: #898989;
// }



// забороно скролу заднього фону при відкритих модалках
useEffect(() => {
  // if (!isOpenProductInfo && isNotFirstRender) {
  //     if (formWrap.current) {
  //         formWrap.current.scrollIntoView({ behavior: 'auto' });
  //     }
  // } 
  if ((!isOpenProductInfo || !isVariationsInfo) && isNotFirstRender) {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = '';
      const html = document.querySelector('html');
      if (html) {
          html.style.overflow = 'auto';
      }
  } 
  if ((isOpenProductInfo || isVariationsInfo) && isNotFirstRender) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'relative';
      document.body.style.touchAction = 'none';
      document.body.style.msTouchAction = 'none';
      const html = document.querySelector('html');
      if (html) {
          html.style.overflow = 'hidden';
      }
  } 
 
  if (isOpenMenuVariations && isNotFirstRender) {
      document.body.style.paddingRight = '0';
  } 
// }, [isOpenProductInfo])
},)



const isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
const isIOS = /(iPhone|iPod|iPad)/i.test(navigator.platform);


useEffect(() => {
  if (!openModalForm && isNotFirstRender) {
      document.body.style.overflow = 'auto';
  } 
  if (openModalForm && isNotFirstRender) {
      document.body.style.overflow = 'hidden';
  } 
}, [openModalForm])



// поява Header при скролі на телефоні не використовується
const currentScrollPos = window.pageYOffset;
const navbar = document.getElementById('navbar');
if (navbar) {
   if (window.innerWidth < 640) {
       if (prevScrollpos.current > currentScrollPos) {
         navbar.style.top = '0';
       } else {
           if (window.pageYOffset > 85) {
               navbar.style.top = '-607px';
               console.log('windowWidth: ', windowWidth)
           }
       }
   } 

   prevScrollpos.current = currentScrollPos;
}



// window.addEventListener("touchmove", handleSlideChangeTransitionStart2, { passive: false });
        // window.addEventListener("touchstart", handleSlideChangeTransitionStart2, { passive: false });
        // window.addEventListener('scroll', handleScroll, { passive: true });
        // window.visualViewport.addEventListener('resize', handleZoomChange);




  // відслідковування руху мишкі і скрол елемента в протилежному напрямку
  const zoomWrapRef = useRef(null);

  const handleMouseMove = (e) => {
    const zoomWrap = zoomWrapRef.current;
    if (!zoomWrap) return;

    const deltaY = e.nativeEvent.movementY;

    if (deltaY !== 0) {
      // Визначаємо напрямок руху курсора та скролимо в протилежному напрямку
      zoomWrap.scrollTop -= deltaY;
    }
  };

  <div className={`product-view__modal-zoom-wrap`} 
      id="zoomWrapId"
      ref={zoomWrapRef}
      onMouseMove={handleMouseMove}
      style={{ marginLeft: isZoom ? `${window.innerWidth - document.body.offsetWidth}px !important` : null }}
  >
   контент 
  </div>



// ---------------------------------------------
// скрол в попередню точку після повернення  на попередню сторінку
const [previousPathname, setPreviousPathname] = useState(location.pathname);

window.addEventListener('popstate', handlePopState);


useEffect(() => {
  dispatch(setScrollPositionBeforeView({[previousPathname]: windowScrollY}))
  setPreviousPathname(location.pathname);
}, [location.pathname]);

const handlePopState = () => {
  setTimeout(() => {
      window.scroll({top: scrollPositionBeforeView[location.pathname]})
  }, 200)
};