background-size: 100px 80px;
background-size: contain;   дозволяє маштабувати вонове зображення (background-size: 100%)
background-size: cover;         вставляє картинку на весь екрае, дкшо обтинається
background: url(img_man.jpg) no-repeat center fixed;        для центральнього фіксування картинки
background-origin: border-box;        картинка починається з border
background-origin: content-box;       картинка починається в content, не заходячи на padding
background-clip: padding-box;           картинка починається з border
background-clip: content-box;          картинка починається в content, не заходячи на padding


// фон з косою лінією
.o-guest-layout__diagonal-box:before {
    background: url('/img/guest/landing-bg.png') no-repeat center / cover, linear-gradient(110deg, palette(primary, base) 0%, palette(primary, 100) 30%, palette(primary, 200) 70%, palette(primary, base) 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    content: '';
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 80%);
    z-index: -100;
}


body {
  background: lightblue url("1.gif") bottom right no-repeat;
  background-image: url('1.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;  фонове зображення не буде прокручуватися разом зі сторінкою
  background-size: cover;    фонове зображення буде масштабуватися, щоб охопити всю область вмісту.
                             зберігає співвідношення сторін, і частина фонового зображення може бути обрізана:
}

...................background-image:   встановити більше 1 картинки
#example1 {
  background-image: url(img_flwr.gif), url(paper.gif); 
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
  padding: 15px;
}


// робить ефукт прозорого заблюреного заднього фону
.header {
  background-color: rgba(255,255,255,.6);
  backdrop-filter: blur(5px)
}