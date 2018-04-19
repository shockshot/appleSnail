/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoucherShop', {
    voucherShopNo: {
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
    shopNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Shop',
        key: 'shopNo'
      }
    },
    openDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    closeDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    displayed: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
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
    tableName: 'VoucherShop'
  });
};
