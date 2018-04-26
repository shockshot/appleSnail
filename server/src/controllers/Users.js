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

//////////////////////////////////////////////////////
// /api/users/login
// ID, PW 토큰 발급
//////////////////////////////////////////////////////
router.post('/login', 
  loginPassport.init, loginPassport.auth, 
  (req, res) => {

  const user = req.user;
  // issuing token.
  const payload = {
    id: user.userId
  };
  const token = jwt.sign(payload, config.secret, config.options);

  console.log('#token:', token);
  
  res.setHeader('Authorization', 'Bearer '+token);
  res.status(200).send({token});
});



//////////////////////////////////////////////////////
// /api/users/checkAuth
// 토큰 확인
//////////////////////////////////////////////////////
router.get('/checkAuth',
  tokenPassport.auth, 
  (req, res) => {
  console.log('authed:', req.user);
  res.send(req.user);
});



//////////////////////////////////////////////////////
// /api/users/duplicateCheck
// 아이디 중복 확인
//////////////////////////////////////////////////////
router.get('/duplicateCheck/:id', (req, res) => {
  console.log('req:', req.params.id);
  const id = req.params.id.replace(/[^0-9\.@a-zA-Z\-_]/gi, '');
  db.User.count({
    where: {
      userId: req.params.id
    }
  }).then((result) => {
    res.send({
      userId: id,
      ok: result>0 ? false: true
    });
    
  })
});


export default router;