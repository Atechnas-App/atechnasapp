const { Router } = require("express");
const nodemailer = require('nodemailer');
const { Op } = require("sequelize");
const { User, Publication } = require("../db");
const { MAIL, PASSMAIL } = process.env;
const router = Router();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: MAIL,
        pass: PASSMAIL
    }
});

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
            state,
            price
        })
        const busquedauser = await User.findOne({ where: { id: userid } });
        const mailOptions = {
            from: "Atechnas",
            to: busquedauser.email,
            subject: "nueva publicacion en atechnas",
            text: `Hola Bienvenido a Atechnas, Haz creado una nueva publicacion "${title}", te notificaremos cuando alguien requiera tu trabajo`
        }
        if (!validaPublication) {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(`error al enviar correo: ${error} `);
                } else {
                    console.log(`correo enviado correctamente a : ${busquedauser.email}`);
                }
            })
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
    const { text } = req.body
    const busquedauser = await User.findOne({ where: { id: userid } })
    const validaPublication = await Publication.findOne({ where: { id: idPublication } })
    const usercreador = await User.findOne({ where: { id: validaPublication.createdBy } })
    const mailOptions = {
        from: "Atechnas",
        to: usercreador.email,
        subject: "Alguien quiere trabajar contigo",
        html: `<h1>Hola ${usercreador.name}, </h1> \n<p>A ${busquedauser.name} le interesa trabajar contigo en <b> ${validaPublication.title}</b>, y se encuentra a la espera de tu aprobacion, indicale que puedes trabajar con el o informale el motivo por el cual no puedes en este momento  </p>\n <a href="http://localhost:3000/trabajo/respuesta/${userid}/${idPublication}">Confirma el trabajo</a>\n\n <p>${text}</p>`,
    }
    if (validaPublication) {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(`error al enviar correo: ${error} `);
            } else {
                console.log(`correo enviado correctamente a : ${usercreador.email}`);
            }
        })
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
    const usercreador = await User.findOne({ where: { id: validaPublication.createdBy } })
    const mailOptionsCreate = {
        from: "Atechnas",
        to: usercreador.email,
        subject: "Has decidido no trabajar con " + busquedauser.name,
        html: `<h1>Hola ${usercreador.name}, </h1> \n<p>Has decidido no trabajar en este momento con  <b>${busquedauser.name}</b> en <b> ${validaPublication.title}</b>, esperamos que en un futuro puedan trabajar juntos, puedes ver sus publicaciones en: </p>\n <a href="http://localhost:3000/">${busquedauser.name}</a>`
    }
    const mailOptionsDelete = {
        from: "Atechnas",
        to: busquedauser.email,
        subject: `${usercreador.name}, no puede Trabajar contigo`,
        html: `<h1>Hola ${busquedauser.name}, </h1> \n<p><b>${usercreador.name}</b> no puede trabajar contigo en estos momentos en <b> ${validaPublication.title}</b>, pero esperamos que en un futuro puedan trabajar juntos, puedes ver sus publicaciones en: </p>\n <a href="http://localhost:3000/">${usercreador.name}</a>`
    }
    if (validaPublication) {

        if (validaPublication.createdBy !== busquedauser.id) {
            transporter.sendMail(mailOptionsCreate, (error, info) => {
                if (error) {
                    console.log(`error al enviar correo: ${error} `);
                } else {
                    console.log(`correo enviado correctamente a : ${usercreador.email}`);
                }
            })
            transporter.sendMail(mailOptionsDelete, (error, info) => {
                if (error) {
                    console.log(`error al enviar correo: ${error} `);
                } else {
                    console.log(`correo enviado correctamente a : ${busquedauser.email}`);
                }
            })
            await busquedauser.removePublication(validaPublication);
        }
    } else {
        res.status(404).send('esta publicacion no esta disponible')
    }
    const resultado = await Publication.findOne({ where: { id: idPublication }, include: { all: true } });
    res.status(200).send(resultado)
});

router.put('/aceptPublication/:userid/:idPublication', async (req, res) => {
    const { userid, idPublication } = req.params
    const validaPublication = await Publication.findOne({ where: { id: idPublication }, include: { all: true } })
    const usercreador = await User.findOne({ where: { id: userid } });

    if (validaPublication && userid === validaPublication.createdBy) {

        validaPublication.users.map((e) => {
            if (e.id === validaPublication.createdBy) {
                const mailOptions = {
                    from: "Atechnas",
                    to: e.email,
                    subject: `es hora de empezar`,
                    html: `<h1>Hola ${e.name}, </h1> \n<p>has aceptado trabajar en <b>${validaPublication.title}</b> es hora de ponerte manos a la obra.`
                }
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(`error al enviar correo: ${error} `);
                    } else {
                        console.log(`correo enviado correctamente a : ${usercreador.email}`);
                    }
                })
            } else {

                const mailOptions = {
                    from: "Atechnas",
                    to: e.email,
                    subject: `${usercreador.name}, aceptó Trabajar contigo`,
                    html: `<h1>Hola , </h1> \n<p><b>${usercreador.name}</b> accedió a trabajar contigo en <b> ${validaPublication.title}</b>, en el siguiente link podrás realizar el pago: </p>\n <a href="http://localhost:3000/trabajos/detalle/${idPublication}">Link de pago</a>`
                }
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(`error al enviar correo: ${error} `);
                    } else {
                        console.log(`correo enviado correctamente a : ${usercreador.email}`);
                    }
                })
            }
        })
        await validaPublication.update(
            {
                state:'EnProceso'
            }
        )

    } else {
        res.status(404).send('esta publicacion no esta disponible')
    }
    const resultado = await Publication.findOne({ where: { id: idPublication }, include: { all: true } });
    res.status(200).send(resultado)
});



router.put('/modPublication/:publicationid', async (req, res) => {
    const { publicationid } = req.params;
    const { description, title, image, price, state} = req.body
    const validaPublication = await Publication.findOne({ where: { id: publicationid } })
    const usercreador = await User.findOne({ where: { id: validaPublication.createdBy } })
    const mailOptions = {
        from: "Atechnas",
        to: usercreador.email,
        subject: "Se ha modificado tu publicacion",
        html: `<h1>Hola ${usercreador.name}, </h1> \n<p>Tu publicacion ha sido modificada correctamente.\n te notificaremos si hay novedades en ella.\n Atechnas Team  </p>\n <a href="http://localhost:3000/">Ver Publicacion</a>`
    }
    if (validaPublication) {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(`error al enviar correo: ${error} `);
            } else {
                console.log(`correo enviado correctamente a : ${usercreador.email}`);
            }
        })
        await validaPublication.update({
            title,
            description,
            image,
            price,
            state
        });
    } else {
        res.status(404).send('publicacion no encontrada')
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

router.delete('/deletePublication/:id', async (req, res) => {
    const { id } = req.params
    try {
        const eliminado = await Publication.findOne({
            where: {
                id: id
            }
        })
        const usercreador = await User.findOne({ where: { id: eliminado.createdBy } })
        const mailOptions = {
            from: "Atechnas",
            to: usercreador.email,
            subject: "Se ha eliminado tu publicacion",
            html: `<h1>Hola ${usercreador.name}, </h1> \n<p>Tu publicacion ha sido eliminada.\n Puedes crear nuevas publicaciones en <a href="http://localhost:3000/">Atechnas</a>.\n Atechnas Team </p>`
        }
        if(eliminado){
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(`error al enviar correo: ${error} `);
                } else {
                    console.log(`correo enviado correctamente a : ${usercreador.email}`);
                }
            });
            await eliminado.destroy();
            res.status(200).send('publicacion eliminada')

        }else{
            res.status(400).send('no se encontro publicacion')
        }
    } catch (error) {
        console.log(error)
    }

})




module.exports = router