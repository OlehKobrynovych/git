


// .............GET
const axios = require('axios');

// 1.
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
});

//
async function submit() {
    const response = await axios.get('/user?ID=12345');
    if (response.data.success) {
        alert('Data create success');
    } else {
        alert('Error');
    }
}

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }



// ..................POST

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
});


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
