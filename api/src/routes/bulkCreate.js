const { Router } = require("express");
const { User,Technology,Category,Language } = require('../db');
const bcrypt = require('bcrypt')
// const passport = require('passport');
// const initializePassport = require('./passport-config-local')
// initializePassport(
//     passport, 
//     email => User.findOne({where: {email: email}, raw: true}), 
//     id => User.findOne({where: {id: id}, raw: true})
// )



const router = Router();

// ESTO SOLO SIRVE MOMENTANEAMENTE PARA QUE CADA UNO SE CREE SU BDD LOCAL !!
router.post('/bulkcreateUsers', async (req, res, next) => {
    try {
        // const hashedPassword = await bcrypt.hash(req.body.password, 10)
        // const { name,
        //     lastName,
        //     email,
        //     password,
        //     category,
        //     profilePicture,
        //     languages,
        //     technology,
        // } = req.body;
        
        const newUser = await User.bulkCreate(req.body)
        let categoriesDb = await Category.findAll({
            where: { category : req.body.category},
            // include: [User]
        })
        let languagesDb = await Language.findAll({
            where: { languages :req.body.languages },
            // include: [User]
        })
        let technologyDb = await Technology.findAll({
            where: { technology : req.body.technology },
            // include: [User]
        })
        newUser.addCategory(categoriesDb);
        newUser.addLanguage(languagesDb);
        newUser.addTechnology(technologyDb);
        // acá se puede hacer un res.redirect a la siguiente parte del formulario donde vamos a seguir agregando campos
       /*  console.log(newUser.map(c => c.toJSON())) */

        res.status(200).send('usuario creado')
    }
    catch (error) {
        console.log(error.message)
        // next(error)
    }

});
router.post('/bulkcreateTechnology', async (req, res, next) => {
    try {
       
        const newTechnology = await Technology.bulkCreate(req.body)
        /* console.log(newTechnology.map(c => c.toJSON())) */
        res.status(200).send('technologies en db')
    }
    catch (error) {
        console.log(error.message)
        next(error)
    }

});

router.post('/bulkcreateCategory', async (req, res, next) => {
    try {
    //    const {category} = await req.body
        const newCategory = await Category.bulkCreate(req.body)
        console.log(newCategory.map(c => c.toJSON()))
        res.status(200).send('categorias en db')
    }
    catch (error) {
        console.log(error.message)
        next(error)
    }

});
router.post('/bulkcreateLanguages', async (req, res, next) => {
    try {
    //    const {category} = await req.body
        const newLanguage = await Language.bulkCreate(req.body)
        /* console.log(newLanguage.map(c => c.toJSON())) */
        res.status(200).send('Languages en db')
    }
    catch (error) {
        console.log(error.message)
        next(error)
    }

});


module.exports = router;
