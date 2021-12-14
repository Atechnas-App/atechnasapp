if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
};

const express = require('express');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(flash());
server.use(session({
  secret: process.env.SESSION_SECRET, // si estoy en produccion que cambiar. Averiguar que hay que poner aqui si estoy en produccion 
  resave: false,
  saveUninitialized: false
}));
server.use(passport.initialize());
server.use(passport.session());
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send({message});
});

module.exports = server;
