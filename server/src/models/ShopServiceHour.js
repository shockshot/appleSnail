/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShopServiceHour', {
    shopServiceHourNo: {
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
    day: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    opening: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    closing: {
      type: DataTypes.STRING(5),
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
    tableName: 'ShopServiceHour'
  });
};
