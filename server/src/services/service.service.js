import db from '../models';

export const getServiceList = (companyNo) => {

  return db.Service.findAll({
    where: {
      companyNo,
      del:0
    }
  })
}



export const insertService = (service, userNo, companyNo) => {
  return db.Service.create({
    serviceCategoryNo: service.serviceCategoryNo,
    serviceName: service.serviceName,
    serviceDescription: service.serviceDescription,
    price: service.price,
    timeRequired: service.timeRequired,
    companyNo: companyNo,
    createdUser: userNo
  });
}

export const updateService = (serviceNo, service, userNo, companyNo) => {
  console.log('service',service);
  return db.Service.update({
    serviceName: service.serviceName,
    serviceDescription: service.serviceDescription,
    price: service.price,
    timeRequired: service.timeRequired,
    updatedUser: userNo,
  }, {where: {
      serviceNo: serviceNo,
      companyNo: companyNo
    }
  });
}

export const deleteService = (serviceNo, userNo, companyNo) => {
  return db.Service.update({
    updatedUser: userNo,
    del: 1
  }, {
    where: {
      serviceNo: serviceNo,
      companyNo: companyNo
    }
  });
}