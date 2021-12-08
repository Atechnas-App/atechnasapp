const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const bulkCreate = require('./bulkCreate')
const getUsers = require('./getUsers')
const search = require('./search')
const filterByCategory = require('./categoryFilter')
const filterByTechnology = require('./TechnologyFilter')
const getUserId = require('./getUsersDetails')
const newJobs = require('./addJobsProfile')
const filterByQualification = require('./qualificationFilter')
const deletePost = require('./deletePost')
const newTestimonial = require('./postTestimonials')
const getTestimonial = require('./getTestimonial')
const filterSearch = require('./filtersSearch')
const getLanguages = require('./getLanguage')
const getJobs = require("./getPostJobs")
const putUsers = require('./putUsers')
const postTeams = require('./createTeam')
const { login, register } = require('./postUser')
const githubLog = require('../controllers/passport-config-github')
const mp = require("../routes/mercadopago")

 
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/api', bulkCreate)
router.use('/api', getJobs)
router.use('/api', getTestimonial)
router.use('/api', newTestimonial)
router.use('/api', getLanguages)
router.use('/api', getUsers)
router.use('/api', getUserId)
router.use('/api', newJobs)
router.use('/api', search)
router.use('/api', filterByCategory)
router.use('/api', filterByTechnology)
router.use('/api', filterByQualification)
router.use('/api', filterSearch)
// router.use('/api', search)
router.use('/api', login)
router.use('/api', register)
router.use('/api', deletePost)
router.use('/api', putUsers)
router.use('/api', postTeams)
router.use('/api', githubLog)
router.use('/api', mp)








module.exports = router;
