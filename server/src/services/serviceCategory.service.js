import db from '../models';

export const getServiceCategoryList = (companyNo) => {

  // db.User.hasOne(db.Employee, {foreignKey: 'userNo'});
  // db.Employee.belongsTo(db.Company, {foreignKey: 'companyNo'});
  // db.Employee.hasMany(db.ShopEmployee, {foreignKey: 'employeeNo'});
  // db.ShopEmployee.belongsTo(db.Shop, {foreignKey: 'shopNo'});
  db.ServiceCategory.hasMany(db.Service, {foreignKey: 'serviceCategoryNo'});
  // db.ServiceCategory.belongsTo(db.Company, {foreignKey: 'companyNo'});
  
  return db.ServiceCategory.findAll({
    where: {
      companyNo: companyNo,
      del: 0
    },
    include:[{
      model: db.Service,
      where: {del: 0},
      required: false
    }]
  })

}

