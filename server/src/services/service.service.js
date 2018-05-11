import db from '../models';

export const getServiceList = (companyNo) => {

  return db.Service.findAll({
    where: {
      companyNo,
      del:0
    }
  })
}