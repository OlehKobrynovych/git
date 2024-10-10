import { NOT_DELETED_CATEGORY_ID, NOT_DELETED_SUB_CATEGORY_ID } from '../helpers/Config';
import { setIsPreloader, setSelectCategory } from '../store/homeSlice';

export const validNumber = (value, setValue) => {
    if  (/^\d+$/.test(value)) {
        setValue(value)
    } else {
        setValue('')
    }
}

export const validEmail = (value) => {
  return  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(value);
}

export const fetchGetData = async (url, finallyFun=null) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        return null;
      }
      finally {
        if (finallyFun) {
            finallyFun()
        }
    }
}

// fetchGetData(`${process.env.REACT_APP_BASE_URL}/categories/${id}`)
//             .then(res => {
//                 console.log('GET CreatingCategory', res)
//                 if (res.success && res.data) {
//                     dispatch(setUpdateCategories(res.data))
//                 } else {
//                     console.log('GET CreatingCategory', res)
//                 }
//         })



export const fetchRequest = async ( method, url, data, catchFunc=null, finallyFunc=null) => {
    try {
        const response = await fetch(url, {
          method: method,
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const res = await response.json();
        return res;
    } catch (error) {
        console.error('Error:', error);
        if (catchFunc) {
            catchFunc(error);
        }
      } finally {
        if (finallyFunc) {
          finallyFunc();
        }
      }
}
// const handleDeleteImg = (obj) => {
//   fetchRequest('DELETE', `${process.env.REACT_APP_BASE_URL}/banners/${obj._id}`, {}, () => dispatch(setShowMessageObj({open: true, status: 'error', message: 'Сталася помилка'})))
//       .then(res => {
//           if (res?.success) {
//               setBanners([...banners.filter(el => el._id !== obj._id)])
//               dispatch(setShowMessageObj({open: true, status: 'success', message: 'Дані оновлено'}))
//           } else {
//               console.log('DELETE BannerResult:', res)
//           }
//       })
// }



export const handleCategoriesMap = (cat) => {
  let res = []
  let res2 = cat.map(el => {
      res.push(el)
      if (el.sub_categories?.length) {
          el.sub_categories.map(ell => {
              res.push(ell)
          })
      }
  })
  return res
}

// вивід ціни з пробілами
export const handlePriceReplace = (price) => {
  if (price != null && typeof price !== 'boolean') {
    const newPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return newPrice;
  }
  return '';
};



export const delayedSetIsPreloader = (dispatch) => {
  setTimeout(() => {
    dispatch(setIsPreloader(false));
  }, 400); 
}

export const handleGeoLocation = () => {
  const userLanguage = navigator.language;
  if (userLanguage && userLanguage.includes('uk')) {
    return 'ua';
  } else {
    return 'en';
  }
};
