require('dotenv').config()
const GithubStrategy = require('passport-github2').Strategy
const passport = require('passport')
const { Router } = require("express");

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_CLIENT_URL } = process.env;
const { User, Category } = require('../db');

const router = Router();

passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/api/github/callback"
},
  async function (accessToken, refreshToken, profile, done) {
    // done(null, profile)
    const { _json } = profile
    let user = await User.findOrCreate({
      where: {
        name: _json.login,
        lastName: '',
        email: _json.email ? _json.email : 'ejemplo@mail.com',
        password: _json.node_id,
        profilePicture: _json.avatar_url,
        portfolio: _json.url,
      }
    })
    // user.addCategory(['Recruiter'])
    done(null, user)
  }
));

passport.serializeUser((user, done) => { done(null, user) })
passport.deserializeUser((user, done) => { done(null, user) })

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successful',
      user: req.user
    })
  }
  console.log('REQ USER DEL LOGIN SUCCESS',req.user)
})


router.get('/github', passport.authenticate('github', { scope: ['profile'] }))

router.get('/github/callback', passport.authenticate('github', {
  successRedirect: GITHUB_CLIENT_URL,
  failureRedirect: GITHUB_CLIENT_URL + '/login'
}))


module.exports = router