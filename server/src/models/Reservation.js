/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reservation', {
    reservationNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shopNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Shop',
        key: 'shopNo'
      }
    },
    customerNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'Customer',
        key: 'CustomerNo'
      }
    },
    customerName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    employeeNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    reservationStatus: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reservationDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    regDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    responseDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    parentReservationNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'Reservation',
        key: 'reservationNo'
      }
    },
    reservationMethod: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    regDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    createdUser: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedUser: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    del: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'Reservation'
  });
};
