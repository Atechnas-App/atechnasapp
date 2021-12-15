const { Router } = require("express");
const { Op } = require("sequelize");
const { Review, User} = require("../db");

const router = Router();

router.post('/review/:userId', async (req, res, next) => {
    const {userId} = req.params
    try {
        
        const { 
            coments,
            title,
            qualification,
                   
        } = req.body;
        
        await Review.create(
            {  
                coments: coments,
                userId: userId,
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
      const allReview = await Review.findAll({
        include: User,
      });
      res.status(200).send(allReview);
    } catch (err) {
      next(err);
    }
  });

  router.get("/getUserReview/:id", async (req, res, next) => {
    const {id}= req.params
    try {
      const allReview = await Review.findAll({
        where: {userId: id },
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
        const reviewEliminado = await Review.findOne({
            where:{
                id: id
            }        
        })
        const reviewElim = await reviewEliminado.destroy();
        res.status(200).send('Review eliminada')
    } catch (error) {
        console.log(error)
    }

})


  module.exports = router;