import express from 'express';

const router = express.Router();

router.post('/', (req, res) => res.json({success:true}) );

router.get('/', (req, res) => {
  return res.send('Hello world');
});

router.post('/users/login', (req, res) => {
  
  console.log("req:", req.body);

  const userInfo = {
      userNo : 1,
      userId : 'abcde@navar.com',
      userName : '홍길동'
  }

  return res.send(JSON.stringify(userInfo));
});

export default router;