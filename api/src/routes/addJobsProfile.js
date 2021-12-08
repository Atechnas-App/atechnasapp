const { Router } = require("express");
const { User, Category, Post, Language, Technology } = require('../db');

const router = Router();


router.post('/newProfile/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const {
            title,
            image, 
            description,
           price,
        } = req.body;
        console.log(id)
       await Post.create(
            {
                userId: id, 
                title: title, 
                image: image,
                description : description,
                price: price,}
                // {where: {id: id}}
                
        )
        res.status(200).send('Post Creado')
    
    } catch (error) {
        next(error)
    }
})
  
  module.exports = router;