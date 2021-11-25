const { Router } = require("express");
const { User,Technology } = require('../db');

const router = Router();

// ESTO SOLO SIRVE MOMENTANEAMENTE PARA QUE CADA UNO SE CREE SU BDD LOCAL !!
router.post('/bulkcreate', async (req, res, next) => {
    try {
        const newUser = await User.bulkCreate(req.body)
        // console.log(newUser)
        res.status(200).send('usuario creado')
    }
    catch (error) {
        console.log(error)
        next(error)
    }

});
router.post('/bulkcreateTechnology', async (req, res, next) => {
    try {
       
        const newTechnology = await User.bulkCreate(req.body)
        console.log(newTechnology)
        res.status(200).send('tecnologias en db')
    }
    catch (error) {
        console.log(error)
        next(error)
    }

});

router.post('/bulkcreateCategory', async (req, res, next) => {
    try {
       
        const newCategory = await User.bulkCreate(req.body)
        console.log(newCategory)
        res.status(200).send('categorias en db')
    }
    catch (error) {
        console.log(error)
        next(error)
    }

});

module.exports = router;
