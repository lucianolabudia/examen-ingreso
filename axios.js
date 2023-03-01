const axios = require('axios');

const url = 'https://63d2c69e06556a0fdd4440c3.mockapi.io/api/v1/marketing/leads';

axios.get(url)
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});

