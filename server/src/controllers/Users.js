"use strict";
// https://cheese10yun.github.io/Passport-part1/
// https://github.com/auth0/node-jsonwebtoken

import express from 'express';
import db from '../models';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import { loginPassport, tokenPassport, issueToken, userService } from '../services';
// import tokenPassport from '../services/tokenPassport';
// import {issueToken} from '../services/tokenService';

import { Mapper, defaultErrorHandler } from '../helpers';
import { User } from '../viewModels';



const hashRounds = 10;
const router = express.Router();

/** middlewares */
router.use(bodyParser.urlencoded({extended: true}));
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token'); //1
  next();
});


//////////////////////////////////////////////////////
// /api/users/login
// ID, PW 토큰 발급
//////////////////////////////////////////////////////
router.post('/login', 
  loginPassport.init, loginPassport.auth, 
  (req, res) => {
  
    userService.getUser(req.user.userNo)
    .then(result => {
      // console.log('#result:', result.dataValues )
      // issuing token.
      const user = Mapper.map(result);
      
      const token = issueToken(user);
      console.log('#token:', token);
      
      res.setHeader('Authorization', token);
      res.status(200).send({
        Authorization: token,
        user: user
      });

    }).catch(err => defaultErrorHandler(res, err));
  }
);



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
// GET /api/users/duplicateCheck
// 아이디 중복 확인
//////////////////////////////////////////////////////
/*
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
  }).catch(err => defaultErrorHandler(res, err))
});
*/

//////////////////////////////////////////////////////
// POST /api/users
// 회원 등록
//////////////////////////////////////////////////////
/*
router.post('/', (req, res) => {
  console.log('req body:', req.body);
  // res.json(req.body);

  let password = req.body.password.substring(0, 30);

  // bcrypt.enc
  bcrypt.hash(password, hashRounds ).then(function(hash) {
    const user = {
      userId: req.body.userId,
      userName: req.body.userName,
      password: hash,
      phoneNo: req.body.phoneNo.replace(/[^0-9]/gi, '')
    }
    return db.User.create(user);
  })
  .catch( err => defaultErrorHandler(res, err))
  .then( result => {
    console.log("result", result);
    if(result){

      res.status(200).json({
        userNo: result.userNo,
        userId: result.userId,
        userName: result.userName,
        phoneNo: result.phoneNo
      });
    }
  }).catch(err => defaultErrorHandler(res, err));  


});*/


export default router;