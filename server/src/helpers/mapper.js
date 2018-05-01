import fs from 'fs';
import path from 'path';

const models = [];
fs
  .readdirSync(__dirname+'/../viewModels')
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(file => {
    models[file.replace('.js','') ] = require(path.join(__dirname+'/../viewModels/', file) )[file.replace('.js','') ];
  });

export const map = (from, to)  => {
  const modelName = (new to()).getClassName();
  const model = new models[modelName]();

  // console.log('to',    );
  
  // console.log(new models[modelName]());
  console.log('#', model.getFieldNames())

  return Object.keys(to).reduce((obj, key) => {
    obj[key] = from[key]
    return obj;
  }, {});
};


// export class Mapper {
//   static map(obj, key) {
//     return Object.keys(to).reduce((obj, key) => {
//       obj[key] = from[key]
//       return obj;
//     }, {});
//   }
// }