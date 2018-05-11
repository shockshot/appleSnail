
import express from 'express';
import bodyParser from 'body-parser';
import tokenPassport from '../services/tokenPassport';
import { defaultErrorHandler, Mapper } from '../helpers';
import { serviceService } from '../services';

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
// /api/service/
// 서비스 리스트
//////////////////////////////////////////////////////
router.get('/',
  (req, res) => {
    const user = req.user;
    const companyNo = user.cn;
    serviceService.getServiceList(companyNo).then(result => {
      // console.log('######result', result);
      res.json(Mapper.map(result));
    }).catch(err => defaultErrorHandler(res, err)) 
});


//////////////////////////////////////////////////////
// /api/service/
// 서비스 post
//////////////////////////////////////////////////////
router.post('/',
  (req, res) => {

  const user = req.user;
  serviceService.insertService(req.body, user.no, user.cn )
    .then(result => {
      const serviceCategory = Mapper.map(result);
      res.send(serviceCategory);
    })
    .catch(err => defaultErrorHandler(res, err));
  
});

//////////////////////////////////////////////////////
// /api/service/:id
// 서비스 카테고리 put
//////////////////////////////////////////////////////
router.put('/:id',
  (req, res) => {
    const user = req.user;
    const id = req.params.id.replace(/[^0-9]/, '');
    
    serviceService.updateService(id, req.body, user.no, user.cn)
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
// /api/service/:id
// 서비스 카테고리 delete
//////////////////////////////////////////////////////
router.delete('/:id',
  (req, res) => {
    const user = req.user;
    const id = req.params.id.replace(/[^0-9]/, '');
    
    serviceService.deleteService(id, user.no, user.cn)
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