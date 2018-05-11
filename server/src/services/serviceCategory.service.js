import db from '../models';

export const getServiceCategoryList = (companyNo) => {

  db.ServiceCategory.hasMany(db.Service, {foreignKey: 'serviceCategoryNo'});
  
  return db.ServiceCategory.findAll({
    where: {
      companyNo: companyNo,
      del: 0
    },
    // include:[{
    //   model: db.Service,
    //   where: {del: 0},
    //   required: false
    // }]
  })

}

export const insertServiceCategory = (serviceCategory, userNo, companyNo) => {
  return db.ServiceCategory.create({
    serviceCategoryName: serviceCategory.serviceCategoryName,
    categoryDescription: serviceCategory.categoryDescription,
    companyNo: companyNo,
    createdUser: userNo
  });
}

export const updateServiceCategory = (serviceCategoryNo, serviceCategory, userNo, companyNo) => {
  return db.ServiceCategory.update({
    serviceCategoryName: serviceCategory.serviceCategoryName,
    categoryDescription: serviceCategory.categoryDescription,
    updatedUser: userNo,
  }, {where: {
      serviceCategoryNo: serviceCategoryNo,
      companyNo: companyNo
    }
  });
}

export const deleteServiceCategory = (serviceCategoryNo, userNo, companyNo) => {
  return db.ServiceCategory.update({
    updatedUser: userNo,
    del: 1
  }, {
    where: {
      serviceCategoryNo: serviceCategoryNo,
      companyNo: companyNo
    }
  });
}
