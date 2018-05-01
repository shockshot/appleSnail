class BaseModel {
  getClassName() { 
    return this.constructor.name; 
  }
}

export default BaseModel;