// https://cheese10yun.github.io/Passport-part1/
// https://github.com/auth0/node-jsonwebtoken

import express from 'express';
import db from '../models';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());

const env = process.env.NODE_ENV || "development";
const jwt = require('jsonwebtoken');
const config = require('../../config/config.json')[env].jwt;


/**passport */

const passport = require('passport');
const Strategy = require('passport-local').Strategy;

passport.use(new Strategy({
    usernameField: 'userId',
    passwordField: 'password',
    session: false, // 세션에 저장 여부
    passReqToCallback: false
  },
  function(userId, password, done) {
    db.User.findOne({
      where: {
        userId: userId
      }
    })
    .then( result => {
      if(!result) {
        return done(null, false);
      }

      const user = result.dataValues;
      if(user.password !== password){
        return done(null, false);
      }

      const payload = {
        id: user.userId
      };
      const token = jwt.sign(payload, config.secret, config.options);

      return done(null, token);

    }, err => done(err) );
  }
));

passport.serializeUser(function(user, cb) {
  console.log('serializeUser');
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
  console.log('deserial');
  db.Users.find({
    where: {
      userId: user.userId
    }
  }).then(user => {
    cb(null, user.dataValues);
  }, err=>{
    console.log('deserializeUser err', err);
    cb(err);
  })
});


router.use(passport.initialize());
// router.use(passport.session());


const errHandler = (res, err) => {
  res.status(200).send('err:'+err);
}

router.post('/login', passport.authenticate('local', {
  // successRedirect: '/',
  // failureRedirect: '/',
  // failureFlash: true
}), (req, res) => {
  res.send('login success');
});

/*

router.post('/login', (req, res)=>{
  const {userId, password} = req.body;
  console.log(req.body);

  db.User.findOne({
      where: {
        userId: userId,
        password: password
      }
    })
    .then( result => {

      if(!result){
        throw new Error('user not found');
      }

      const user = result.dataValues;
      const payload = {
        id: user.userId,
      };

      const pr = new Promise((resolve, err) => jwt.sign(payload, config.secret, config.options, (err, token) => {
        if (err) reject(err)
        resolve(token) 
      }));
      // return res.send(JSON.stringify(token));
      return pr;
  
    }, err => errHandler(res, err) )
    .then( token => {
      return res.send(token);
    }, err => errHandler(res, err))

  }
);
*/

export default router;