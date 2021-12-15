
const { Router } = require("express");
const { User, Category, Post, Language, Technology } = require('../db');

const router = Router();


router.post('/newProfile/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const { 
            title,
            image, 
            about, 
            price,
            paused
        } = req.body;
       await Post.create(
            {  
                title: title,
                image: image, 
                about: about, 
                price: price,
                paused: paused,
                userId: id, 
                }                
        )
        res.status(200).send('Post Creado')
    
    } catch (error) {
        next(error)
    }
})
  
  module.exports = router;