/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoucherPurchase', {
    voucherPurchaseNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    voucherNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Voucher',
        key: 'voucherNo'
      }
    },
    customerNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'CustomerNo'
      }
    },
    purchaseDate: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    expireDate: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    expire: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'VoucherPurchase'
  });
};
