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




useEffect(() => {
  if (!openModalForm && isNotFirstRender) {
      document.body.style.overflow = 'auto';
  } 
  if (openModalForm && isNotFirstRender) {
      document.body.style.overflow = 'hidden';
  } 
}, [openModalForm])