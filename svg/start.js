<svg width='100' heigth='200' viewBox='0 0 400 400'>  //viewBox='0 0 400 400' ----- 0 0 відступ від верхнього краю svg  ---- 400 400 висота і ширина 

</svg>


import { ReactComponent as Logo } from './images/Logo.svg'     // при імпорті картинка стає компонентом і тоді можна міняти її колір через клас в css
<Logo className="asd" fill='red' strke='yellow' width='200' />   // stroke -обводка


// інлайн стилі fill-opasit: 0.50  i  stroke-opacity: .6   прозорість заливки і обводки


<text x='100' y='200' class='asd' >asdasdad</text>   // щоб відоьразити текст в svg.   x i y обовязково початок координат



////////////////////////////////////////////////
<g id='asd'>                 // тег <g></g> використовується для групування 
    <line></line>
    <cirkle></cirkle>
</g>

<use x='150' y='200' class='asdasda' xlink:href='#asd' />

////////////////////////////////////////////////
<def>                 // тег <def></def> використовується для групування не відображає згруповувані елементи
    <line id='asd'></line>
</def>

<use x='150' y='200' class='asdasda' xlink:href='#asd' />

/////////////////////////////////////////////////////
<symbol>   // щось подібне до <g></g> i <def></def>

</symbol>


// щоб взнати довжину паса в svg
// var path = document.querySelector('.path');
// var length = path.getTotalLength();