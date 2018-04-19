/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    CustomerNo: {
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
    customerName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    birthDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    userNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    lastSalesNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedUser: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    del: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'Customer'
  });
};
