/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Company', {
    companyNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    companyName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    businessNo: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    telNo: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ownerName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    addressNo: {
      type: DataTypes.INTEGER(10),
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
    tableName: 'Company'
  });
};
