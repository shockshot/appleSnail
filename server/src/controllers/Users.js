// https://cheese10yun.github.io/Passport-part1/
// https://github.com/auth0/node-jsonwebtoken

import express from 'express';
import db from '../models';
import bodyParser from 'body-parser';
import passport from '../services/passport';

const router = express.Router();
const env = process.env.NODE_ENV || "development";
const config = require('../../config/config.json')[env].jwt;
const jwt = require('jsonwebtoken');


/** middlewares */
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token'); //1
  next();
});

//init passport
router.use(passport.initialize());


const errHandler = (res, err) => {
  res.status(200).send('err:'+err);
}


router.post('/login', passport.authenticate('local', {
  // successRedirect: '/',
  // failureRedirect: '/',
  // failureFlash: true
}), (req, res) => {

  const user = req.user;
  // issuing token.
  const payload = {
    id: user.userId
  };
  const token = jwt.sign(payload, config.secret, config.options);
  req._token = token;

  console.log('#token:', token);
  
  res.setHeader('getToken', 'ok')
  res.status(200).send({token});
  
});


export default router;