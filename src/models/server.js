const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000

        // Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( bodyParser.json() );

        // Habilitar lectura de datos de formulario
        this.app.use( bodyParser.urlencoded({extended: true}));        

        // Servir el contenido estatico
        this.app.use( express.static('src/public') );
    }

    routes() {

        this.app.use('/solicitud', require('../routes/clientRoutes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        });
    }
}

module.exports = Server;