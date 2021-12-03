const { Router } = require("express");
const { Testimonial } = require('../db');

const router = Router();

router.post('/testimonial', async (req, res, next) => {
    try {
        
        const { 
            details,
            image,
            name,
            company
            
        } = req.body;
        
        await Testimonial.create(
            {  
                details: details,
                image: image,
                name: name,
                company: company, 

                }
                
        )
        res.status(200).send('Testimonio Creado')
    
    } catch (error) {
        next(error)
    }
})
  
  module.exports = router;