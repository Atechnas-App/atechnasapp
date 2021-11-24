const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {usersDB} = require('../controllers')
const userCreate = require('./postUser')
 
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', userCreate)


module.exports = router;
