const { Router } = require("express");
const { User, Category } = require('../db');
const bcrypt = require('bcrypt')
const passport = require('passport');

const initializePassport = require('./passport-config-local')
initializePassport(
    passport, 
    email => User.findOne({where: {email: email}, raw: true}), 
    id => User.findOne({where: {id: id}, raw: true})
)

const router = Router();

const login = router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/', // esto te redirecciona a localhost:3001/ --> osea donde esta levantado el back
    failureRedirect: '/acaPuedeser',
    failureFlash: true
}))

const register = router.post('/register', checkNotAuthenticated, async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const { name,
            lastName,
            email,
            category,
            profilePicture,
            portfolio,
        } = req.body;
        const newUser = await User.create({
            name,
            lastName,
            email,
            password: hashedPassword,
            profilePicture,
            portfolio,
        })
        let categories = await Category.findAll({
            where: { category: category },
            include: [User]
        })
        newUser.addCategory(categories)
        // acá se puede hacer un res.redirect a la siguiente parte del formulario donde vamos a seguir agregando campos
        res.status(200).send('usuario creado')
    }
    catch (error) {
        res.redirect('/register')
    }

});
const home = router.get('/home', (req, res) =>{
    res.send('logueado !!')
})

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/') // si ya esta logeado que me mande a la Home
    }
    next() 
}

module.exports = { login, register, home }

