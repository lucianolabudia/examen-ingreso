const { response } = require('express');


// Axios
const axios = require('axios');
const baseURL = process.env.URL_API;

// Método GET de API propia
const clientGet = (req, res = response) => {
    // Solicitud GET utilizando axios a la URL especificada en la variable baseURL
    axios.get(baseURL + '/')
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

    // Prueba del GET
    // res.json({
    //     msg: 'get API - controller'
    // });
}

// Método POST de API propia
const clientPost = async (req, res) => {
    
    const body = req.body;
    
    // CONSULTAR POR CREACION DE BASE DE DATOS
    // // Verificar si el correo electrónico ya existe
    // const existingUser = await User.findOne({ email: body.email });
    // if (existingUser) {
    //     res.status(400).send({ error: 'El correo electrónico ya está registrado' });
    //     return;
    // }

    // // Crear un nuevo usuario
    // const newUser = new User(body);
    // await newUser.save();

    // res.send(newUser);

    axios.post(baseURL + '/', body)
    .then( (result) => {
        console.log(result.data);
        res.send(result.data);
    }).catch( (error) => {
        if (error.response) {
            const { status,statusText } = error.response;
            console.log(error);
            console.log(status, statusText);
            res.status(status).send(error);
        } else {
            res.status(400).send(error);
        }
    });


    // Prueba del POST
    // res.json({
    //     msg: 'post API - controller'
    // });
}

module.exports = {
    clientGet,
    clientPost
}