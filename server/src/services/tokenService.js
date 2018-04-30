import db from '../models';
import jwt from 'jsonwebtoken';

const env = process.env.NODE_ENV || "development";
const config = require('../../config/config.json')[env].jwt;

export const issueToken = (user) => {
  const payload = {
    id: user.userId,
    no: user.userNo,
    nm: user.userName
  };
  const token = jwt.sign(payload, config.secret, config.options);

  return token;
}