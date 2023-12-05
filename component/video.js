// дістати картинку з відео
https://noembed.com/
fetch(`http://noembed.com/embed?url=https://www.youtube.com/watch?v=WNeLUngb-Xg`)
    .then((response) => {
        return response.json();
        })
        .then((data) => {
        console.log(data);
        });