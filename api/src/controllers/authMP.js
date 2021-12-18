const express = require('express')
const router = express.Router();
const mercadopago = require('mercadopago')
const { User } = require('../db')
const axios = require('axios')



router.get('/authMPrealizado', (req, res) => {
    const { code , state } = req.query;
    if (code) {
      let userCredentials = {
        client_secret: process.env.MP_CLIENT_SECRET,
        client_id: process.env.MP_APP_ID,
        grant_type: "authorization_code",
        code,
        redirect_uri: `${process.env.URL_BACK}/api/authMPrealizado`,
      };
     
      axios
        .post("https://api.mercadopago.com/oauth/token", userCredentials)
        .then((cred) => {
            User.update({
                access_token: cred.data.access_token,
                token_type: cred.data.token_type,
                expires_in: cred.data.expires_in,
                scope: cred.data.scope,
                user_id: cred.data.user_id,
                refresh_token: cred.data.refresh_token,
                public_key: cred.data.public_key,
                live_mode: cred.data.live_mode
            },
            {
                where: {
                    id: state
                }
            })
        })
        .catch((err) => console.log(err.message));
    }
    res.redirect(`${process.env.URL_FRONT}/miPerfil/${state}`)
})


// router.get('/authMP/:id', (req, res) =>{ // charlar entre todos la redireccion al perfil
//     res.redirect('https://auth.mercadopago.com.ar/authorization?client_id=7308381246776093&response_type=code&platform_id=mp&state=2c666223-004d-42a3-a008-6e7e8a5a530f&redirect_uri=http://localhost:3001/api/authMPrealizado')
// })

module.exports = router