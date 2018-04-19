import db from '../models';

const env = process.env.NODE_ENV || "development";
const jwt = require('jsonwebtoken');
const config = require('../../config/config.json')[env].jwt;

export const login = (req, res) => {
  
  // console.log('config', config);

  const {userId, password} = req.body;

  db.User.findAll().then( result => {
    const users = result
      .map(data=>data.dataValues)
    ;
    if(users && users.length){
      return users[0];
    }

  }, err => { return res.send(err); } ).then(user => {
    const payload = {
      id: user.userId,
    };

    const token = jwt.sign(payload, config.secret, config.options);
    // return res.send(JSON.stringify(token));
    return res.send(token);
  }, err => {return res.send(err);})

}

