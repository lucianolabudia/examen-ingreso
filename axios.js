const axios = require('axios');

const baseURL = 'https://63d2c69e06556a0fdd4440c3.mockapi.io/api/v1/marketing/leads';

axios.get(baseURL)
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});

