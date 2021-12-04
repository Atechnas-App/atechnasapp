const { Router } = require("express");
const { User, Category, Post, Language, Technology } = require('../db');

const router = Router();


router.post('/newProfile/:id', async (req, res, next) => {
    try {
        const {id} = req.query;
        const { 
            company,
            title,
            image, 
            description, 
            qualification, 
        } = req.body;
        
       await Post.create(
            {  
                company: company,
                userId: id, 
                description:description,
                qualification: qualification, 
                title: title, 
                image: image}
                // {where: {id: id}}
                
        )
        res.status(200).send('Post Creado')
    
    } catch (error) {
        next(error)
    }
})
  
  module.exports = router;