/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sales', {
    salesNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shopNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    reservationNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    customerNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    originalPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    discount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    salesPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    payMethod: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    saleDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    salesType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    parentSalesNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'Sales',
        key: 'salesNo'
      }
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
    tableName: 'Sales'
  });
};
