//   2.                          fetch
https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers


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