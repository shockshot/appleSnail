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

// const passport = require('passport');
// const Strategy = require('passport-local').Strategy;



// passport.use(new Strategy(
//   function(userId, password, done) {
//     console.log(12344444);
//     db.User.findAll({
//       where: {
//         userId: userId
//       }
//     })
//     .then( result => {
//       const users = result.map(data=>data.dataValues);

//       if(!users || !users.length){
//         return done(null, false);
//       }

//       if(users[0].password !== password){
//         return done(null, false);
//       }

//       const payload = {
//         id: users[0].userId
//       };
//       const token = jwt.sign(payload, config.secret, config.options);
//       return done(null, token);

//     }, err => done(err) );
//   }
// ));

// passport.serializeUser(function(user, cb) {
//   console.log('serial');
//   cb(null, user.id);
// });

// passport.deserializeUser(function(id, cb) {
//   console.log('deserial');
//   db.Users.find({
//     where: {
//       userId: id
//     }
//   }).then(user => {
//     cb(null, user);
//   }, err=>{
//     cb(err);
//   })
// });


// router.use(passport.initialize());
// router.use(passport.session());

const errHandler = (res, err) => {
  res.send('err:'+err);
}
  
router.post('/login', (req, res)=>{
  const {userId, password} = req.body;
  console.log(req.body);

  db.User.findAll({
      where: {
        userId: userId,
        password: password
      }
    })
    .then( result => {
      const users = result
        .map(data=>data.dataValues);
      
      console.log(users);

      if(users && users.length){
        return users[0];
      }else{
        throw 'user not found';
      }
  
    }, err => errHandler(res, err) )
    .then(user => {
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



export default router;