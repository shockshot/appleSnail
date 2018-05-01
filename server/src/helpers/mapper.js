import models from '../viewModels'

export const map = (result)  => {
  // const model = to._modelName;
  const modelName = result.constructor.name;
  const to = models[modelName];

  // console.log('#models',  models  );
  
  // console.log(new models[modelName]());
  // console.log('#', model.getFieldNames())
  if(result instanceof Array){
    
  }else{
    const from = result.dataValues;
    return to ? Object.keys(to).reduce((obj, key) => {
      if(from[key] instanceof String){
        obj[key] = from[key];
      }else{
        obj[key] = map(from[key]);
      }
      return obj;
    }, {}) : null;
  }
};


// export class Mapper {
//   static map(obj, key) {
//     return Object.keys(to).reduce((obj, key) => {
//       obj[key] = from[key]
//       return obj;
//     }, {});
//   }
// }