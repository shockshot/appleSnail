/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employee', {
    employeeNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'User',
        key: 'userNo'
      }
    },
    companyNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'companyNo'
      }
    },
    position: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    joinDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    retireDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    employeeState: {
      type: DataTypes.STRING(20),
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
    tableName: 'Employee'
  });
};
