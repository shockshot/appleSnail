import db from '../models';
import {defaultErrorHandler, Mapper, ModelAttributes } from '../helpers';
// import { User } from '../viewModels';


export const getUser = (userNo) => {

  db.User.hasOne(db.Employee, {foreignKey: 'userNo'});
  db.Employee.belongsTo(db.Company, {foreignKey: 'companyNo'});
  db.Employee.hasMany(db.ShopEmployee, {foreignKey: 'employeeNo'});
  db.ShopEmployee.belongsTo(db.Shop, {foreignKey: 'shopNo'});
  
  return db.User.findOne({
    where: {
      userNo: userNo,
      del: 0
    },
    // attributes: ModelAttributes.user,
    include:{
      model: db.Employee,
      // attributes: ModelAttributes.employee,
      where: {del: 0},
      include: [
        { 
          model: db.Company,
          // attributes: ModelAttributes.company,
          where: {del: 0}
        },
        {
          model: db.ShopEmployee,
          where: {del: 0},
          // attributes: ModelAttributes.shopEmployee,
          include: {
            model: db.Shop,
            where: {del: 0}
          }
        }
      ]
    }
  }).then(result => {
    // const user = result.dataValues;
    // const employee = user.Employee.dataValues;
    // const company = employee.Company.dataValues;
    // const shopEmployee = employee.ShopEmployees.map(shopEmployee => shopEmployee.dataValues);

    // console.log('#employee:', employee);
    // console.log('#company:', company);
    // console.log('#shopEmployee:', shopEmployee);
    // console.log('#result:', result.constructor.name)
    
    // console.log('#mapped:', );
    return Mapper.map(result);
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

