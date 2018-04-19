import express from 'express';
import models from '../models';

const router = express.Router();

router.post('/', (req, res) => res.json({success:true}) );

router.get('/', (req, res) => {
  return res.send('Hello world');
});

router.get('/users/login', (req, res) => {
  
  // console.log("req:", req.body);
  models.sequelize.models.User.findAll().then(function(result){
    // data = JSON.parse(result);
    console.log(result[0].dataValues);
    
    
  });

  const userInfo = {
      userNo : 1,
      userId : 'abcde@navar.com',
      userName : '홍길동'
  }

  return res.send(JSON.stringify(userInfo));
});

export default router;