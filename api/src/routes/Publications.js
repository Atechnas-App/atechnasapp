const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Publication } = require("../db");
const router = Router();

router.get('/PublicationsUser/:userid', async (req, res) => {
    try {
        const { userid } = req.params
        const publications = await Publication.findAll({
            where: {
                createdBy: userid
            },
            include: {
                all: true
            }
        })
        res.status(200).send(publications)
    } catch (error) {
        console.log(error)
    }
})

router.post('/newPublication/:userid', async (req, res) => {
    try {
        const { userid } = req.params
        const { title, description, image, price, state } = req.body;
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
            res.status(404).send('trabajo en proceso')
        }
        const resultado = await Publication.findOne({ where: { title: title }, include: { all: true } });
        res.status(200).send(resultado);
    } catch (error) {
        console.log(error);
    }
});

router.put('/addPublication/:userid/:idPublication', async (req, res) => {
    const { userid, idPublication } = req.params
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

router.put('/removePublication/:userid/:idPublication', async (req, res) => {
    const { userid, idPublication } = req.params
    const busquedauser = await User.findOne({ where: { id: userid } })
    const validaPublication = await Publication.findOne({ where: { id: idPublication } })
    if (validaPublication) {

        if (validaPublication.createdBy !== busquedauser.id) {
            await busquedauser.removePublication(validaPublication);
        }
    } else {
        res.status(404).send('esta publicacion no esta disponible')
    }
    const resultado = await Publication.findOne({ where: { id: idPublication }, include: { all: true } });
    res.status(200).send(resultado)
});


router.put('/modPublication/:publicationid', async (req, res) => {
    const { publicationid } = req.params;
    const { description, title, image, price, pause } = req.body
    const validaPublication = await Publication.findOne({ where: { id: publicationid } })
    if (validaPublication) {
        await validaPublication.update({
            title,
            description,
            image,
            price,
            // paused
        });
    } else {
        res.status(404).send('publicacion no esncontrada')
    }
    res.status(200).send(validaPublication)
});

router.get('/Publications/:idPublication', async (req, res) => {
    try {
        const { idPublication } = req.params
            const respublication = await Publication.findOne({
                where: {
                    id: idPublication
                },
                include: {
                    all: true
                }
            })
            res.status(200).send(respublication)
    } catch (error) {
        console.log(error)
    }
})
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

router.delete('/deletePublication/:id',async (req,res)=>{
    const {id}= req.params
    try {
        const eliminado = await Publication.findOne({
            where:{
                id
            }        
        })
        const cEliminado = await eliminado.destroy();
        res.status(200).send('publicacion eliminada')
    } catch (error) {
        console.log(error)
    }

})




module.exports = router