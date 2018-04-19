import express from 'express';
// import db from '../models';
import users from '../controllers/Users';


const router = express.Router();

// router.post('/', (req, res) => res.json({success:true}) );

router.get('/', (req, res) => {
  return res.send('Hello world');
});

// router.get( '/users/login', login);







router.use('/users', users);

export default router;