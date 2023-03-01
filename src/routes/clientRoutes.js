const { Router } = require('express');
const { clientGet, clientPost } = require('../controllers/clientController');

const router = Router();

// GET
router.get('/', clientGet);

router.get('/solicitud', (req, res) => {
    res.send('Solicitar Tarjeta Mastercard');
});

router.get('*', (req, res) => {
    res.send('404 | Page not found');
    // res.sendFile( __dirname + '../src/public/404.html'); // probar xq no funciona
});

// POST
router.post('/', clientPost);



module.exports = router;