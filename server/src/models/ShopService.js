/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShopService', {
    ShopServiceNo: {
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
    serviceNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Service',
        key: 'serviceNo'
      }
    },
    use: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    serviceDescriptionPostNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    maxReserveDate: {
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
    },
    del: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'ShopService'
  });
};
