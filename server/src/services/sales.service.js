import db from '../models';

export const getSalesList = (criteria, user) => {
  const where = {
    // companyNo : user.cn,
    del: 0
  };

  if(criteria.shopNo){
    where.shopNo = criteria.shopNo;
  }

  db.Sales.hasOne(db.Customer, {foreignKey: 'customerNo'});
  db.Sales.hasOne(db.Shop, {foreignKey: 'shopNo'});

  return db.Sales.findAll({
    where: where,
    include:[{
      model: db.Customer,
      where: {del: 0},
      required: false
    },
    {
      model: db.Shop,
      where: {del: 0, companyNo: user.cn}
    }]
  })
}
