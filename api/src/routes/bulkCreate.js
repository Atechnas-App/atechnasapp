const { Router } = require("express");
const { User } = require('../db');

const router = Router();

// ESTO SOLO SIRVE MOMENTANEAMENTE PARA QUE CADA UNO SE CREE SU BDD LOCAL !!
router.post('/bulkcreate', async (req, res, next) => {
    try {
        // const { name,
        //     lastName,
        //     email,
        //     password,
        //     category,
        //     profilePicture,
        //     portfolio,
        // } = req.body;
        // const newUser = await User.bulkCreate({
        //     name,
        //     lastName,
        //     email,
        //     password,
        //     category,
        //     profilePicture,
        //     portfolio,
        // })
        const newUser = await User.bulkCreate(req.body)
        // console.log(newUser)
        res.status(200).send('usuario creado')
    }
    catch (error) {
        console.log(error)
        next(error)
    }

});

module.exports = router;
