https://pqina.nl/blog/how-to-prevent-scrolling-the-page-on-ios-safari/


// Прибрати зум при кліку на інпут в якого розмір шрифта менше за 16 пікселів
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
body {
    -webkit-text-size-adjust: 100%;
}
// ще один з варіантів
.input-wrapper {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%; 
    -moz-text-size-adjust: 100%;  
    transform: scale(1);  
  }