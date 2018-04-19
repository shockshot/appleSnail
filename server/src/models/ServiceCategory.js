/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ServiceCategory', {
    serviceCategoryNo: {
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
    serviceCategoryName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    categoryDescription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    parentServiceCategoryNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'ServiceCategory',
        key: 'serviceCategoryNo'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
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
    tableName: 'ServiceCategory'
  });
};
