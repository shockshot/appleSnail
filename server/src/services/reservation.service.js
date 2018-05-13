import db from '../models';

export const getReservationList = (criteria) => {

  db.Reservation.belongsTo(db.Shop, {foreignKey: 'shopNo'});
  db.Reservation.hasMany(db.ReservationService, {foreignKey: 'reservationNo'});
  db.ReservationService.hasOne(db.Service, {foreignKey: 'serviceNo'});

  return db.Reservation.findAll({
    where: {
      del: 0
    },
    include: [{
      model: db.ReservationService,
      where: {del:0},
      include: {
        model: db.Service,
        where: {del:0}
      }
    },{
      model: db.Shop,
      where: {del:0, companyNo: criteria.companyNo}
    }]
  })
}


// db.User.hasOne(db.Employee, {foreignKey: 'userNo'});
//   db.Employee.belongsTo(db.Company, {foreignKey: 'companyNo'});
//   db.Employee.hasMany(db.ShopEmployee, {foreignKey: 'employeeNo'});
//   db.ShopEmployee.belongsTo(db.Shop, {foreignKey: 'shopNo'});
  
//   return db.User.findOne({
//     where: {
//       userNo: userNo,
//       del: 0
//     },
//     include:{
//       model: db.Employee,
//       where: {del: 0},
//       include: [
//         { 
//           model: db.Company,
//           where: {del: 0}
//         },
//         {
//           model: db.ShopEmployee,
//           where: {del: 0},
//           include: {
//             model: db.Shop,
//             where: {del: 0}
//           }
//         }
//       ]
//     }
//   })