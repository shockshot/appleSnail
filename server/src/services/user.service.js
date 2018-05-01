import db from '../models';
import {defaultErrorHandler, Mapper } from '../helpers';
import { User } from '../viewModels';


export const getUser = (userNo) => {

  db.User.hasOne(db.Employee, {foreignKey: 'userNo'});
  db.Employee.belongsTo(db.Company, {foreignKey: 'companyNo'});
  db.Employee.hasMany(db.ShopEmployee, {foreignKey: 'employeeNo'});
  db.ShopEmployee.belongsTo(db.Shop, {foreignKey: 'shopNo'});
  
  return db.User.findOne({
    where: {userNo: userNo},
    include:{
      model: db.Employee,
      include: [
        db.Company,
        {
          model: db.ShopEmployee,
          include: db.Shop
        }
      ]
    }
  }).then(result => {
    const user = result.dataValues;
    const employee = user.Employee.dataValues;
    const company = employee.Company.dataValues;
    const shopEmployee = employee.ShopEmployees.map(shopEmployee => shopEmployee.dataValues);

    // console.log('#employee:', employee);
    // console.log('#company:', company);
    // console.log('#shopEmployee:', shopEmployee);

    Mapper.map(user, User);

    // return {
    //   userNo : user.userNo,
    //   userId : user.userId,
    //   userName : user.userName,
    //   phoneNo : user.phoneNo,
    //   company: {

    //   }
    // }
  }).catch(err => {
    console.log('err:', err);
    return null;
  })

}

