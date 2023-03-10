const axios = require('axios');

const baseURL = process.env.PORT;

axios.get(baseURL)
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});

