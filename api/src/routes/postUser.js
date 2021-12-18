const { Router } = require("express");
const { User, Category, Technology, Language } = require("../db");
const bcrypt = require("bcrypt");
const passport = require("passport");

const initializePassport = require("../controllers/passport-config-local");
initializePassport(
  passport,
  (email) => User.findOne({ where: { email: email }, raw: true }),
  (id) => User.findOne({ where: { id: id }, raw: true })
);

const router = Router();

const login = router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.send(info.message); }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      return res.send(user);
    });
  })(req, res, next);
});


const register = router.post(
  "/register",
  checkNotAuthenticated,
  async (req, res, next) => {
    try {
     /*  console.log(req.body); */
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const {
        name,
        lastName,
        email,
        category,
        // languages,
        // technology,
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
      });
      let categories = await Category.findAll({
        where: { category: category },
        include: [User],
      });
      // let languagesDb = await Language.findAll({
      //   where: { languages },
      //   include: [User],
      // });
      // let technologyDb = await Technology.findAll({
      //   where: { technology },
      //   include: [User],
      // });
      newUser.addCategory(categories);
      // newUser.addLanguage(languagesDb);
      // newUser.addTechnology(technologyDb);
      /* console.log("creado", newUser.toJSON()); */
      // acá se puede hacer un res.redirect a la siguiente parte del formulario donde vamos a seguir agregando campos
      res.status(200).send("usuario creadoo");
    } catch (error) {
      console.log(error.message);
      res.send(error.message);
    }
  }
);


function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/"); // si ya esta logeado que me mande a la Home
  }
  next();
}

module.exports = { login, register };
