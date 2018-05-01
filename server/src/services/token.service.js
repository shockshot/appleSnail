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
  if(user.Employees.length){
    // console.log('employee', );
    const employee = user.Employees[0].dataValues; 

    const company = employee.Company.dataValues;

    console.log('employee', employee);
    payload.cn = company.companyNo;
  }

  // console.log('payload', payload)
  const token = jwt.sign(payload, config.secret, config.options);

  return token;
}