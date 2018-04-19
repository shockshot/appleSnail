/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShopPointRate', {
    shopPointRateNo: {
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
    paymentMethod: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    beginDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    endDate: {
      type: DataTypes.STRING(8),
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
    tableName: 'ShopPointRate'
  });
};
