const { Router } = require('express');
const { check } = require('express-validator');
const { clientGet, clientPost } = require('../controllers/clientController');
const { validateFields } = require('../middlewares/validator');

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
router.post('/', [
    check('name').notEmpty().withMessage('El nombre es obligatorio'),
    check('email').isEmail().withMessage('El email no es válido'),
    check('subject').notEmpty().withMessage('El asunto es obligatorio'),
    check('message').notEmpty().withMessage('El mensaje es obligatorio'),
    validateFields
],clientPost);



module.exports = router;