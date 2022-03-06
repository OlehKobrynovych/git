axios.post('/article/fetch/post/image', { lessons: lessons })
    .then((response) => {
        if (response.data.success) {
            alert('Data create success');
        } else {
            alert('Error');
        }
    })
    .catch((err) => {
        alert('Error');
        console.log('error: ', err);
    })
    .finally(() => {});

//
async function submit() {
    const response = await axios.get('/user?ID=12345');
    if (response.data.success) {
        alert('Data create success');
    } else {
        alert('Error');
    }
}