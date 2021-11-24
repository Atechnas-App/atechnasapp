const { Router } = require("express");
const { User } = require('../db');

const router = Router();

router.get('/getusers', async (req, res, next) => {
    const users = await User.findAll()
    console.log(users)

    res.status(200).send(users)
})

module.exports = router;
