import fs from 'fs';
import path from 'path';

const models = [];
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(file => {
    models[file.replace('.js','') ] = require(path.join(__dirname+'/../viewModels/', file) )[file.replace('.js','') ];
  });

export default models;