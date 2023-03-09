const { check, validationResult } = require('express-validator');

const validateFields = ( req, res, next ) => {
    // Se ejecutan las validaciones utilizando la función `validationResult()`
    const errors = validationResult(req);
    // Si hay errores de validacion, se devuelve una respuesta de error con los errores encontrados
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }   
    
    next();
}

module.exports = {
    validateFields
}