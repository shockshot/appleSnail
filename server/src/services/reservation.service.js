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
  
}