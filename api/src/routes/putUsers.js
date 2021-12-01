const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Technology, Category, Language } = require("../db");


const router = Router();

router.put('/profile/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const { 
            company, 
            phone, 
            description, 
            profilePicture, 
            languages, 
            technologies, 
            categories, 
            portfolio, 
            location } = req.body;
        
        await User.update(
            {  company, 
                phone, 
                description, 
                profilePicture, 
                languages, 
                technologies, 
                categories, 
                portfolio, 
                location},
                {where: {id: id},
                include: [{model: Technology},
                {model: Category},
                {model: Language}]}
        )
        res.status(200).send('Usuario modificado')
    
    } catch (error) {
        next(error)
    }
})

module.exports = router;