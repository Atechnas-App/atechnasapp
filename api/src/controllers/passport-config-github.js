if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
};
const GithubStrategy = require('passport-github2').Strategy
const passport = require('passport')
const { Router } = require("express");

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_CLIENT_URL } = process.env;
const { User, Category } = require('../db');

const router = Router();
const info = {};
 
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "https://atechnas-api.herokuapp.com/api/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      // done(null, profile)
      const { _json } = profile;

      const usergithub = await User.findOne({
        where: {
          email: _json.email,
        },
      });
      if (usergithub) {
        info.id = usergithub?.dataValues?.id;
        info.name = usergithub?.dataValues?.name;
        info.profilePicture = usergithub?.dataValues?.profilePicture;
      } else {
        const user = await User.create({
          name: !_json.name ? _json.login : _json.name,
          lastName: "",
          email: _json.email ? _json.email : "ejemplo@mail.com",
          password: _json.node_id,
          profilePicture: _json.avatar_url,
          portfolio: _json.html_url,
          description: _json.bio,
        });
        info.id = user?.dataValues?.id;
        info.name = user?.dataValues?.name;
        info.profilePicture = user?.dataValues?.profilePicture;
      }
      done(null, info);
    }
  )
);

 
    
passport.serializeUser((user, done) => { done(null, user) })
passport.deserializeUser((user, done) => { done(null, user) })

router.get('/github', passport.authenticate('github', { scope: ['profile'] }))

router.get("/github/callback",
  passport.authenticate("github", {
    successRedirect: GITHUB_CLIENT_URL,
    failureRedirect: GITHUB_CLIENT_URL + "/login",
  })
);

router.get('/login/success', (req, res) => {
  /* const name = info.name? info.name : 'ejemplo' */
  if (info.name) {
    res.status(200).json({
      success: true,
      message: 'successful',
      user: info
    })
  
  }
 
})

module.exports = router