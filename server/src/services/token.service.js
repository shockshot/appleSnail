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

  // console.log('##user', user.Employees);
  
  // console.log('employee', );
  const employee = user.Employee; 
  
  if(employee){
    const company = employee.Company;
    payload.cn = company.companyNo;
  }

  // console.log('payload', payload)
  const token = jwt.sign(payload, config.secret, config.options);

  return token;
}