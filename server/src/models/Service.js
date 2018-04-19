/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Service', {
    serviceNo: {
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
    serviceCategoryNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    serviceName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    serviceDescription: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    serviceDescriptionPostNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    openDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    closeDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    display: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    exceptDiscount: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    pointRate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    timeRequired: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
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
    tableName: 'Service'
  });
};
