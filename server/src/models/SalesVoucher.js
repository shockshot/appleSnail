/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesVoucher', {
    salesVoucherNo: {
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
    voucherNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Voucher',
        key: 'voucherNo'
      }
    },
    originalPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    salesPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    eventNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(1000),
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
    tableName: 'SalesVoucher'
  });
};
