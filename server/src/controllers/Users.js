// https://cheese10yun.github.io/Passport-part1/
// https://github.com/auth0/node-jsonwebtoken

import express from 'express';
import db from '../models';
import bodyParser from 'body-parser';
import loginPassport from '../services/loginPassport';
import tokenPassport from '../services/tokenPassport';

const router = express.Router();
const env = process.env.NODE_ENV || "development";
const config = require('../../config/config.json')[env].jwt;
const jwt = require('jsonwebtoken');


/** middlewares */
router.use(bodyParser.urlencoded({extended: true}));
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token'); //1
  next();
});


const errHandler = (res, err) => {
  res.status(200).send('err:'+err);
}

//login. 토큰 발급
router.post('/login', 
  loginPassport.initialize(), 
  loginPassport.authenticate('local', {}), (req, res) => {

  const user = req.user;
  // issuing token.
  const payload = {
    id: user.userId
  };
  const token = jwt.sign(payload, config.secret, config.options);

  console.log('#token:', token);
  
  res.setHeader('getToken', 'ok')
  res.status(200).send({token});
});

router.get('/checkAuth',
  tokenPassport.initialize(),
  tokenPassport.authenticate('bearer', { session: false }), (req, res) => {
  console.log('authed');
  res.send(req.user);
});



export default router;