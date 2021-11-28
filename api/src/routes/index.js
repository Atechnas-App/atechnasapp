const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const bulkCreate = require('./bulkCreate')
const getUsers = require('./getUsers')
const search = require('./search')
const filterByCategory = require('./categoryFilter')
const filterByTechnology = require('./TechnologyFilter')

const filterByQualification = require('./qualificationFilter')


const { login, register, home } = require('./postUser')

 
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/api', bulkCreate)
router.use('/api', getUsers)

router.use('/api', search)
router.use('/api', filterByCategory)
router.use('/api', filterByTechnology)

router.use('/api', filterByQualification)
router.use('/api', login)
router.use('/api', register)
router.use('/api', home)








module.exports = router;
