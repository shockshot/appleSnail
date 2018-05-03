"use strict";
// https://cheese10yun.github.io/Passport-part1/
// https://github.com/auth0/node-jsonwebtoken

import express from 'express';
import db from '../models';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';

import { loginPassport, tokenPassport, issueToken } from '../services';
import { Mapper, defaultErrorHandler } from '../helpers';
import { User } from '../viewModels';

const hashRounds = 10;
const router = express.Router();


/** middlewares */
router.use(bodyParser.urlencoded({extended: true}));
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token'); //1
  next();
});




//////////////////////////////////////////////////////
// GET /api/users/duplicateCheck
// 아이디 중복 확인
//////////////////////////////////////////////////////
router.get('/duplicateCheck/:id', (req, res) => {
  console.log('req:', req.params.id);
  const id = req.params.id.replace(/[^0-9\.@a-zA-Z\-_]/gi, '');
  db.User.count({
    where: {
      userId: req.params.id
    }
  }).then((result) => {
    res.send({
      userId: id,
      ok: result>0 ? false: true
    });
  }).catch(err => defaultErrorHandler(res, err))
});


//////////////////////////////////////////////////////
// POST /api/register/user
// 회원 등록
//////////////////////////////////////////////////////
router.post('/user', (req, res) => {
  console.log('req body:', req.body);
  // res.json(req.body);

  let password = req.body.password.substring(0, 30);

  // bcrypt.enc
  bcrypt.hash(password, hashRounds ).then(function(hash) {
    const user = {
      userId: req.body.userId,
      userName: req.body.userName,
      password: hash,
      phoneNo: req.body.phoneNo.replace(/[^0-9]/gi, '')
    }
    return db.User.create(user);
  })
  .catch( err => defaultErrorHandler(res, err))
  .then( result => {
    console.log("result", result);
    if(result){

      res.status(200).json({
        userNo: result.userNo,
        userId: result.userId,
        userName: result.userName,
        phoneNo: result.phoneNo,
        Authorization: issueToken(result)
      });
    }
  }).catch(err => defaultErrorHandler(res, err));  

});


//////////////////////////////////////////////////////
// POST /api/register/companyWithShop
// 회사/매장 동시 등록
//////////////////////////////////////////////////////
router.post('/companyWithShop', tokenPassport.auth, 
  (req, res) => {
    db.sequelize.transaction().then((transaction) => {
      const data = req.body;
      let user = null;
      let shop = null;
      let company = null;
      let employee = null;
      let shopEmployee = null;

      return db.User.findOne({where: {userNo: req.user.no}})
        .then(({dataValues}) => {
          //insert company
          console.log('dataValues', dataValues);
          user = dataValues;

          let _company = {
            companyName: data.companyName,
            businessNo:  data.businessNo,
            telNo:       data.telNo,
            website:     data.website,
            ownerName:   data.ownerName,
            addressNo:   '',
            createdUser: user.userNo
          }

          return db.Company.create(_company, {transaction});
        })
        .catch(err => defaultErrorHandler(res, err))
        .then(result => {
          //insert employee
          company = result.dataValues;

          const _employee = {
            userNo: user.userNo,
            companyNo: company.companyNo,
            position: '대표',
            joinDate: '00000101',
            retireDate: '99991231',
            employeeState: 'OWNER'
          }

          return db.Employee.create(_employee, {transaction})
        })
        .catch(err => defaultErrorHandler(res, err))
        .then((result) => {
          // shop = result.dataValues;
          employee = result.dataValues;

          const _shop = { 
            companyNo:   company.companyNo,
            businessNo:  company.businessNo,
            shopName:    data.shopName,
            openDate:    data.openDate,
            closeDate:   '99991231',
            remark:      data.remark,
            createdUser: user.userNo
          }

          return db.Shop.create(_shop, {transaction})

        }).catch(err => defaultErrorHandler(res, err))
        .then( result => {
          shop = result.dataValues;

          const _shopEmployee = {
            shopNo : shop.shopNo,
            employeeNo : employee.employeeNo,
            owner : user.userName,
            authority : null,
            remark : null
          }

          return db.ShopEmployee.create(_shopEmployee, {transaction})
        }).catch(err => defaultErrorHandler(res, err))
        .then( result => {
          shopEmployee = result.dataValues;

          res.json({
            shop: shop,
            company: company,
            employee: employee,
            shopEmployee: shopEmployee
          });
          console.log('commit');
          return transaction.commit();
        })
        .catch(err=>{

          defaultErrorHandler(res, err)
          return transaction.rollback();
        })
    })
});

export default router;