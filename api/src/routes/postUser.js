const { Router } = require("express");
const {User}= require('../db');

const router = Router();

router.post('/usercreate',async (req,res)=>{
    try{

        const{name,
            lastName,
            email,
            password,
            company,
            phone,
            category,
            desciption,
            profilePicture,
            keyWords,
            qualification,
            portfolio,
            location,
            languages,
            team,
            review,
            message,
            post 
        } = req.body 
        const newUser = await User.create({
            name,
            lastName,
            email,
            password,
            company,
            phone,
            category,
            desciption,
            profilePicture,
            keyWords,
            qualification,
            portfolio,
            location,
            premium            
        })
        res.status(200).send('usuario creado')
    }
    catch(error){

    }
    
});


module.exports=router;

