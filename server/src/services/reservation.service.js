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
      },
      required: false
    },{
      model: db.Shop,
      where: {del:0, companyNo: criteria.companyNo}
    }]
  })
}

export const insertReservation = (reservation, user) => {
  const _reservation = {
    shopNo: 1,
    customerNo: reservation.notRegistered ? null : reservation.customerNo,
    customerName: reservation.customerName,
    phoneNumber: reservation.phoneNumber,
    employeeNo: reservation.employeeNo,
    reservationStatus: 'CONFIRMED',
    reservationDateTime: reservation.reservationDateTime,
    regDateTime: new Date(),
    responseDateTime: new Date(),
    parentReservationNo: null,
    reservationMethod: null,
    regDate: new Date(),
    timeRequired: reservation.timeRequired,
    remark: reservation.remark,
    createUser: user.no
  };
  
  return db.Reservation.create(_reservation)
}