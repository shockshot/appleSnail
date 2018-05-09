
import express from 'express';
import db from '../models';
import bodyParser from 'body-parser';
import tokenPassport from '../services/tokenPassport';
import { defaultErrorHandler, Mapper } from '../helpers';
import { serviceCategoryService } from '../services';

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
// /api/serviceCategory/
// 서비스 카테고리 리스트 + 서비스 리스트
//////////////////////////////////////////////////////
router.get('/',
  (req, res) => {
    const user = req.user;
    const companyNo = user.cn;
    serviceCategoryService.getServiceCategoryList(companyNo).then(result => {
      // console.log('######result', result);
      res.json(Mapper.map(result));
    }).catch(err => defaultErrorHandler(res, err)) 
});


//////////////////////////////////////////////////////
// /api/serviceCategory/
// 서비스 카테고리 post
//////////////////////////////////////////////////////
router.post('/',
  (req, res) => {

  const user = req.user;
  serviceCategoryService.insertServiceCategory(req.body, user.no, user.cn )
    .then(result => {
      const serviceCategory = Mapper.map(result);
      res.send(serviceCategory);
    })
    .catch(err => defaultErrorHandler(res, err));
  
});

//////////////////////////////////////////////////////
// /api/serviceCategory/:id
// 서비스 카테고리 put
//////////////////////////////////////////////////////
router.put('/:id',
  (req, res) => {
    const user = req.user;
    const id = req.params.id.replace(/[^0-9]/, '');
    
    serviceCategoryService.updateServiceCategory(id, req.body, user.no, user.cn)
    .then(result => {
      if(result > 0){
        res.json({success: true});
      }else{
        res.json({success: false});
      }
    })
    .catch(err => defaultErrorHandler(res, err));

});


//////////////////////////////////////////////////////
// /api/serviceCategory/:id
// 서비스 카테고리 delete
//////////////////////////////////////////////////////
router.delete('/:id',
  (req, res) => {
    const user = req.user;
    const id = req.params.id.replace(/[^0-9]/, '');
    
    serviceCategoryService.deleteServiceCategory(id, user.no, user.cn)
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