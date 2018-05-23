import db from '../models';

export const getCustomerList = (criteria) => {

  return db.Customer.findAll({
    where: {
      del: 0,
      companyNo: criteria.companyNo
    }
  })
}


export const insertCustomer = (customer) => {
  return db.Customer.count({
    where: {
      companyNo: customer.companyNo,
      phoneNumber: customer.phoneNumber,
      del: 0
    }
  }).then(result => {
    // console.log('count', result);
    if(result === 0){
      return db.Customer.create(customer);
    }else{
      throw 'already exists';
    }
  })

}

export const deleteCustomer = (customerNo, userNo, companyNo) => {
  return db.Customer.update({
    del: 1,
    updatedUser: userNo
  }, {
    where: {
      customerNo: customerNo,
      companyNo: companyNo,
      del: 0
    }
  })
}