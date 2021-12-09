const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Publication } = require("../db");
const router = Router();

router.post('/newPublication', async (req, res) => {
    try {
        const { title, description, image, userid ,price,state} = req.body;
        const validaPublication = await Publication.findOne({ where: { title: title } })
        const createPublication = await Publication.create({
            title,
            description,
            image,
            createdBy: userid,
            price,
            state
        })
        const busquedauser = await User.findOne({ where: { id: userid } })
        if (!validaPublication) {
            await busquedauser.addPublication(createPublication);
        } else {
            res.status(404).send('el nombre del equipo ya se encuentra en uso')
        }
        const resultado = await Publication.findOne({ where: { title: title }, include: { all: true } });
        res.status(200).send(resultado);
    } catch (error) {
        console.log(error);
    }
});

router.put('/addPublication', async (req, res) => {
    const { userid, idPublication } = req.body
    const busquedauser = await User.findOne({ where: { id: userid } })
    const validaPublication = await Publication.findOne({ where: { id: idPublication } })
    if (validaPublication) {
        await busquedauser.addPublication(validaPublication);
    } else {
        res.status(404).send('esta publicacion no esta disponible')
    }
    const resultado = await Publication.findOne({ where: { id: idPublication }, include: { all: true } });
    res.status(200).send(resultado)
});

router.put('/removePublication', async (req, res) => {
    const { userid, idPublication } = req.body
    const busquedauser = await User.findOne({ where: { id: userid } })
    const validaPublication = await Publication.findOne({ where: { id: idPublication } })
    if (validaPublication) {
        
        if(validaPublication.createdBy !== busquedauser.id){
            await busquedauser.removePublication(validaPublication);
        }
    } else {
        res.status(404).send('esta publicacion no esta disponible')
    }
    const resultado = await Publication.findOne({ where: { id: idPublication }, include: { all: true } });
    res.status(200).send(resultado)
});


router.put('/modPublication', async (req, res) => {
    const { nameTeam, description, newNameTeam, newImage } = req.body
    const validaTeam = await Publication.findOne({ where: { name: nameTeam } })
    console.log()
    if (validaTeam) {
        await Publication.update({
            name: newNameTeam,
            description: description,
            image: newImage
        }, {
            where: { id: validaTeam.dataValues.id }
        });
    } else {
        res.status(404).send('el equipo de trabjo no se encuentra')
    }
    const resultado = await Publication.findOne({ where: { id: validaTeam.dataValues.id }, include: { all: true } });
    res.status(200).send(resultado)
});

router.get('/Publications', async (req, res) => {
    try {
        const allPublications = await Publication.findAll({
            include: { all: true }
        });
        res.status(200).send(allPublications)
    } catch (error) {
        console.log(error)
    }
})




module.exports = router