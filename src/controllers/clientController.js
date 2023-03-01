const { response } = require('express');


const clientGet = (req, res = response) => {

    res.json({
        msg: 'get API - controller'
    });
}

const clientPost = (req, res) => {

    res.json({
        msg: 'post API - controller'
    });
}

module.exports = {
    clientGet,
    clientPost
}