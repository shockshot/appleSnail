// http://webframeworks.kr/tutorials/expressjs/expressjs_orm_three/
"use strict";

// var fs        = require("fs");
// var path      = require("path");
// var Sequelize = require("sequelize");
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

var env       = process.env.NODE_ENV || "development";
var config    = require(__dirname + '/../../config/config.json')[env]['db'];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


/** Join 관계 설정 */
// db.User.hasMany(db.Employee, {foreignKey: 'userNo'});
// db.Employee.belongsTo(db.Company, {foreignKey: 'companyNo'});
// db.Company.hasMany(db.Employee, {foreignKey: 'companyNo'});
// db.Company.hasMany(db.Employee, {foreignKey: 'companyNo'});




export default db;
// module.exports = db;