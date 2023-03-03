const { response } = require('express');

// Axios
const axios = require('axios');
const baseURL = process.env.URL_API;

// Método GET de API propia
const clientGet = (req, res = response) => {
    // Solicitud GET utilizando axios a la URL especificada en la variable baseURL
    axios.get(baseURL+'/')
    .then( (result) => {
        // Si la solicitud fue exitosa se imprimime en consola los datos obtenidos
        console.log(result.data);
        // Se envia los datos en la respuesta de la API
        res.send(result.data);
    }).catch( (error) => {
        // Si se produce un error en la solicitud GET de axios
        if (error.response) {
            // Si el error proviene de una respuesta de error de la API externa, se obtiene el estado y el texto de estado del error
            const { status,statusText } = error.response;
            console.log(error);
            console.log(status, statusText);
            // Se envia el error con el mismo estado de la respuesta de error de la API externa
            res.status(status).send(error);
        } else {
            // Si el error no proviene de una respuesta de error de la API externa, se envia el error con un estado 400 (solicitud incorrecta)
            res.status(400).send(error);
        }
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