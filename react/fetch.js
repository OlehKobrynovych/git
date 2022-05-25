//   2.                          fetch
https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers


fetch(url, options)
  .then(response => response.json())
  .then(result => /* обрабатываем результат */)


//   Методы для получения тела ответа:
//   response.text() – возвращает ответ как обычный текст,
//   response.json() – преобразовывает ответ в JSON-объект,
//   response.formData() – возвращает ответ как объект FormData (кодировка form/multipart, см. следующую главу),
//   response.blob() – возвращает объект как Blob (бинарные данные с типом),
//   response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневые бинарные данные),



// Пример отправки POST запроса:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }


//
fetch('/article/fetch/post/image', {
    method: 'POST',
    body: user
})
// .then(response => response.json())
.then(response => {
    let data = response.json();

    if (data.status === 200) {
        // setData(data.value);
        alert('Data create success');
    } else {
        alert('Error');
    }
})
// .then(result => alert(JSON.stringify(result, null, 2)))

//                      fetch - asinc/await
async function submit() {
    let response = await fetch('/article/fetch/post/user', {
        method: 'POST',
        body: JSON.stringify(user)
});

let res = await response.json();

    if (res.data.success) {
        alert('Data create success');
    } else {
        alert('Error');
    }
}