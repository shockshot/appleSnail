/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerPoint', {
    customerPointNo: {
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
    shopNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Shop',
        key: 'shopNo'
      }
    },
    customerNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'CustomerNo'
      }
    },
    paymentNo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'Payment',
        key: 'paymentNo'
      }
    },
    point: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    regDate: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    expirationDate: {
      type: DataTypes.STRING(8),
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
    }
  }, {
    tableName: 'CustomerPoint'
  });
};
