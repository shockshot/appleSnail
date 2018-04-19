// https://cheese10yun.github.io/Passport-part1/
// https://github.com/auth0/node-jsonwebtoken
import db from '../models';

const env = process.env.NODE_ENV || "development";
const jwt = require('jsonwebtoken');
const config = require('../../config/config.json')[env].jwt;

const errHandler = (res, err) => {
  return res.send(err);
}

export const login = (req, res) => {
  
  // console.log('config', config);

  // const {userId, password} = req.body;
  const {userId, password} = {userId:'admin', password: null}

  db.User.findAll({
    where: {
      userId: userId,
      password: password
    }
  })
  .then( result => {
    const users = result
      .map(data=>data.dataValues)
    ;
    if(users && users.length){
      return users[0];
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

