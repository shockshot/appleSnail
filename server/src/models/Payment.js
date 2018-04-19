/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payment', {
    paymentNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    salesNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Sales',
        key: 'salesNo'
      }
    },
    paymentMethod: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    payDate: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    payType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parnetPaymentNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    }
  }, {
    tableName: 'Payment'
  });
};
