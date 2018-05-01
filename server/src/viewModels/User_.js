import BaseModel from './BaseModel';

export class User extends BaseModel{
  userNo;
  userId;
  userName;
  phoneNo;
  employee;

  static getFieldNames() {
    return User.prototype
  }
}