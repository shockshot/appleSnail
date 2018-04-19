import express from 'express';
import db from '../models';

const router = express.Router();

router.post('/', (req, res) => res.json({success:true}) );

router.get('/', (req, res) => {
  return res.send('Hello world');
});

router.get('/users/login', (req, res) => {
  
  // console.log("models:", models.User.findAll());

  // console.log("req:", req.body);
  db.User.findAll().then(function(result){
    result.map(data=>data.dataValues).forEach(d=>{
      console.log(d);
    });
    
  });

  const userInfo = {
      userNo : 1,
      userId : 'abcde@navar.com',
      userName : '홍길동'
  }

  return res.send(JSON.stringify(userInfo));
});

export default router;