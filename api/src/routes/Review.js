const { Router } = require("express");
const { Op } = require("sequelize");
const { Review, User} = require("../db");

const router = Router();

router.post('/review', async (req, res, next) => {
    try {
        
        const { 
            coments,
            title,
            qualification,
                   
        } = req.body;
        
        await Review.create(
            {  
                coments: coments,
                title: title,
                qualification: qualification,
                }
                
        )
        res.status(200).send('Review Creado')
    
    } catch (error) {
        next(error)
    }
})

router.get("/getReview", async (req, res, next) => {
    try {
      const allReview = await Review.findAndCountAll({
        include: User,
      });
      res.status(200).send(allReview);
    } catch (err) {
      next(err);
    }
  });
  
  router.delete('/deleteReview/:id',async (req,res)=>{
    const {id}= req.params
    try {
        const eliminado = await Review.findOne({
            where:{
                id
            }        
        })
        const cEliminado = await eliminado.destroy();
        res.status(200).send('Review eliminada')
    } catch (error) {
        console.log(error)
    }

})


  module.exports = router;