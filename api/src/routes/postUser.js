const { Router } = require("express");
const { User } = require('../db');

const router = Router();

router.post('/usercreate', async (req, res, next) => {
    try {
        const { name,
            lastName,
            email,
            password,
            category,
            profilePicture,
            portfolio,
        } = req.body
        const newUser = await User.create({
            name,
            lastName,
            email,
            password,
            category,
            profilePicture,
            portfolio,
        })
        res.status(200).send('usuario creado')
    }
    catch (error) {
        next(error)
    }

});


module.exports = router;

