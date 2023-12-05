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