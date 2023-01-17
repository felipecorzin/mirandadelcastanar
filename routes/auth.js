const { Router } = require('express');
const { check } = require('express-validator');
const { register,login,revalidarToken,
    findAll,findOne,updateUsuario,deleteUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Crear un nuevo usuario
router.post( '/register', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
], register );

// Login de usuario
router.post( '/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
], login );

// Validar y revalidar token
router.get( '/renew', validarJWT , revalidarToken );

// Obtener todos los usuarios
router.get( '/findAll',findAll );
// Obtener un usuario por id
router.get( '/:id',findOne );
// Actualizar un usuario por id
router.put( '/:id',updateUsuario );
// Eliminar un usuario por id
router.delete( '/:id',deleteUsuario );
module.exports = router;