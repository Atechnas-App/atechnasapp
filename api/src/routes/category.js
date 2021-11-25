const {Router} = require('express');
const {Op}=require('sequelize');
const {User} = require('../db');
const router = Router();

router.get('/category',async (req,res)=>{
    try {
     const { 
         category,
     } = req.body;
        const filtro = await User.findAll({
            where:{
                [Op.or]:[
                    
                    {
                     category:{[Op.like]:`%${category}%`}
                    }
                ]
                
            }
        })
        res.status(200).send(filtro);
    } catch (error) {
        console.log(error);
    } 
 });
 
 
 module.exports = router