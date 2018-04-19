/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Code', {
    codeNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    parentCodeNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'Code',
        key: 'codeNo'
      }
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
    tableName: 'Code'
  });
};
