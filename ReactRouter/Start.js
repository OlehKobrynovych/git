https://www.youtube.com/watch?v=0mNV4VaI6w0
// версія 6+



Щоб отримати параметр запиту з наведеної вище URL-адреси, ми можемо використовувати хук 
useLocation() у маршрутизаторі React v5.


import React from 'react';
import {useLocation} from "react-router-dom";

export default function Items() {


 const search = useLocation().search;
 const name = new URLSearchParams(search).get('name');

  return (
    <div>
      <h1>Items page</h1>

     <p>{name}</p>
   </div>
  );
}


У наведеному вище коді ми спочатку імпортували useLocation()хук з react-router-domпакета та 
викликали його всередині Itemsфункціонального компонента, а потім аналізували дані параметрів 
запиту за допомогою new URLSearchParams().get()методу.
У маршрутизаторі react v4 ми можемо отримати доступ до даних параметрів запиту з URL-адреси, 
використовуючи props.location.searchвластивість.

import React from 'react';

export default function Items(props) {


 const search = props.location.search;
 const name = new URLSearchParams(search).get('name');

  return (
    <div>
      <h1>Items page</h1>

     <p>{name}</p>
   </div>
  );
}
Якщо ви передаєте кілька параметрів запиту до URL-адреси за допомогою 
&оператора (і). localhost:3000/items?name=pen&id=12


import React from 'react';
import {useLocation} from "react-router-dom";

export default function Items() {

  const search = useLocation().search;

 const name = new URLSearchParams(search).get('name');
 const id = new URLSearchParams(search).get('id');

  return (
    <div>
      <h1>Items page</h1>

     <p>{id}</p>
     <p>{name}</p>
   </div>
  );
}


// повернення на зад
const navigate = useNavigate();

const handleGoBack = () => {
  navigate(-1);
};



// щоб посилання можна булоб відкрити в новому вікні
const handleNavLinkClick = (event) => {
  // Перевіряємо, чи було натиснуто праву кнопку миші
  if (event.button === 2) {
    // Якщо так, залишаємо браузер обробляти подію, щоб відкрити посилання в новому вікні
    return;
  } else {
    // В іншому випадку, перештовхуємо користувача на нову сторінку
    navigate(`vendor/${vendorAlias2}`);
  }
};

<NavLink to={`vendor/${vendorAlias1}`} className="main-btn-2" onClick={handleNavLinkClick}>Детальніше</NavLink>