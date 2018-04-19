/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Voucher', {
    voucherNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    companyNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'companyNo'
      }
    },
    voucherName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    openDate: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    closeDate: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    validDays: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    originalValue: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    salePrice: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    displayed: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
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
    tableName: 'Voucher'
  });
};
