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
            about, 
            qualification,
            url
        } = req.body;
        
       await Post.create(
            {  
                company: company,
                userId: id, 
                about : about ,
                qualification: qualification, 
                title: title, 
                image: image,
                url: url,}
                // {where: {id: id}}
                
        )
        res.status(200).send('Post Creado')
    
    } catch (error) {
        next(error)
    }
})
  
  module.exports = router;