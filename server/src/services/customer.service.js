import db from '../models';

export const getCustomerList = (criteria) => {

  return db.Customer.findAll({
    where: {
      del: 0,
      companyNo: criteria.companyNo
    }
  })
}