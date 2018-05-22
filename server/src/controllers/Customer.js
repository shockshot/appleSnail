
import express from 'express';
import bodyParser from 'body-parser';
import tokenPassport from '../services/tokenPassport';
import { defaultErrorHandler, Mapper } from '../helpers';
// import { reservationService } from '../services';
import { customerService } from '../services';
import { map } from '../helpers/mapper';

const router = express.Router();


/** middlewares */
router.use(bodyParser.urlencoded({extended: true}));
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token'); //1
  next();
});

// token 확인
router.use(tokenPassport.auth );


//////////////////////////////////////////////////////
// /api/customers/search
// 고객 리스트
//////////////////////////////////////////////////////
router.post('/search',
  (req, res) => {
    const user = req.user;
    const companyNo = user.cn;

    const criteria = {
      companyNo
    }

    customerService.getCustomerList(criteria).then(result => {
      if(!result){
        res.status(204).send({message: 'there is no data'});
      }else{
        // const data = result.map(result => Mapper.map(result.dataValues) );
        res.json(Mapper.map(result));
      }
    }).catch(err=> defaultErrorHandler(res, err));
    
});

//////////////////////////////////////////////////////
// /api/customers/
// 고객 등록
//////////////////////////////////////////////////////
router.post('/',
  (req, res) => {
    const user = req.user;
    const companyNo = user.cn;
    const customer = req.body;

    console.log('user', user);

    customer.companyNo = companyNo;
    customer.managerNo = customer.managerNo | user.no;
    customer.createdUser = user.no;

    
    customerService.insertCustomer(customer).then(result => {
      if(!result){
        res.status(204).send({message: 'there is no data'});
      }else{
        res.status(200).json(Mapper.map(result));
      }
    }).catch(err=> defaultErrorHandler(res, err));

});


//////////////////////////////////////////////////////
// /api/customers/:customerNo
// 고객 삭제
//////////////////////////////////////////////////////
router.delete('/:id',
  (req, res) => {
    const user = req.user;
    const id = req.params.id.replace(/[^0-9]/, '');
    
    customerService.deleteCustomer(id, user.cn, user.no)
    .then(result => {
      // const serviceCategory = Mapper.map(result);
      if(result > 0){
        res.json({success: true});
      }else{
        res.json({success: false});
      }
    })
    .catch(err => defaultErrorHandler(res, err));

});

export default router;