import models from '../viewModels'

export const map = (result)  => {
  if(!result) { 
    return null; 
  }else if(result instanceof Array){
    return result.map(item => map(item));
  }

  const modelName = result.constructor.name;
  const from = result.dataValues;
  const to   = models[modelName];
  
  if(!to) { return null; }

  return Object.keys(to).reduce((obj, key) => {
    if(from[key] instanceof Array){
      obj[key] = from[key].map(i => map(i));
    }else if(from[key] instanceof Object && !( from[key] instanceof Date || from[key] instanceof Number || from[key] instanceof String )){
      obj[key] = map(from[key]);
    }else{
      obj[key] = from[key];
    }
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