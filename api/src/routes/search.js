const {Router} = require('express');
const {Op}=require('sequelize');
const {User} = require('../db');
const router = Router();

router.get('/search',async (req,res)=>{
   try {
    const { name,
        lastName,
        email,
        category,
    } = req.body;
       const filtro = await User.findAll({
           where:{
               [Op.or]:[
                   {
                    name:{[Op.like]:`%${name}%`}
                   },
                   {
                    lastName:{[Op.like]:`%${lastName}%`}
                   },
                   {
                    email:{[Op.like]:`%${email}%`}
                   },
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