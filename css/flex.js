display: flex;

Інформація про Flex флекс
https://yoksel.github.io/flex-cheatsheet/#section-flex-values




// 
.c-card__users {
    display: flex;
    gap: 1rem;
}

.c-card__user {
    display: flex;
    flex: 1 1 calc((100% / 3) - 2rem);
    flex-direction: column;
}




flex-direction: row;   розміщує еоробки з ліва на право
flex-direction: column;    розміщує в стовпчик
flex-direction: row-reverse;
flex-direction: column-reverse;

justify-content: center;    вирівнює гнучкі елементи в центрі контейнера по горизонталі:
justify-content: flex-start;
justify-content: flex-end;
justify-content: space-around;
justify-content: space-between;

align-items: center;     для вирівнювання гнучких елементів по вертикалі.

align-content: flex-start;    використовується для вирівнювання гнучких ліній.
align-content: space-between;   використовується для вирівнювання гнучких ліній.

align-self: center;     можна використовувати для вирівнювання для одного з елементів з групи
align-self: flex-start;    вирівнювання по горизонталі для окремих елементів
align-self: flex-end;
align-self: baseline;
align-self: stretch;

flex: 2;  робить елемент в два рази більшим за інші
flex: 25%;
flex: 0 0 200px;   елемент flex не піддається розтягуванню (0), не зменшується (0), а початкова довжина 200 пікселів:

flex-wrap: wrap;   визначає , чи повинен гнучкі елементи переноситися чи ні.
flex-wrap: nowrap;

order: -1;   переставляє box2 на місце box1






<style>
.row {
  display: flex;
  flex-wrap: wrap;
}
.column {
  flex: 25%;
  padding: 20px;
}
@media screen and (max-width: 992px) {
  .column {
    flex: 50%;
  }
}
@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
</style>
<div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>

  <div class="column" style="background-color:#bbb;">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
</div>