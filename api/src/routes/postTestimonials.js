const { Router } = require("express");
const { Testimonial } = require('../db');

const router = Router();

router.post('/testimonial', async (req, res, next) => {
    try {
        
        const { 
            details,
            image,
            
        } = req.body;
        
        await Testimonial.create(
            {  
                details: details,
                image: image, 

                }
                
        )
        res.status(200).send('Testimonio Creado')
    
    } catch (error) {
        next(error)
    }
})
  
  module.exports = router;