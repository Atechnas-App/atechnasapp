const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {usersDB} = require('../controllers')
const userCreate = require('./postUser')
const bulkCreate = require('./bulkCreate')
const getUsers = require('./getUsers')
 
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/api', userCreate)
router.use('/api', bulkCreate)
router.use('/api', getUsers)



module.exports = router;
