const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')


function initialize(passport, getUserByEmail, getUserById){
    const authenticateUser = async (email, password, done) => {
        const user = await getUserByEmail(email)
        if (user == null){
            return done(null, false, {message: 'No existe usuario con ese email'}) // 1er parametro: un error, por ej error de servidor; 2do parametro: retorna el usuario encontrado; 3er p: un mensaje
        }
        try{
            if (await bcrypt.compare(password, user.password)){
                return done(null, user) // ahora si retorno el usuario porque la verificacion del pw dio true :)
            } else{
                return done(null, false, {message: 'Contraseña incorrecta'})
            }
        } catch(e){
            return done(e)
        }
    }
    passport.use( new LocalStrategy({ usernameField: 'email'}, // el usernameField es el campo que tengo en el login, que por defecto viene como "username" pero ahora seteo como "email", xq es la forma de logearme
    authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id)) // serializar la session del user mediante el ID
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize