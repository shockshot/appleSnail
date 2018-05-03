import db from '../models';
// import {defaultErrorHandler, Mapper, ModelAttributes } from '../helpers';
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
    include:{
      model: db.Employee,
      where: {del: 0},
      include: [
        { 
          model: db.Company,
          where: {del: 0}
        },
        {
          model: db.ShopEmployee,
          where: {del: 0},
          include: {
            model: db.Shop,
            where: {del: 0}
          }
        }
      ]
    }
  })

}

