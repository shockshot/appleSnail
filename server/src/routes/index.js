import express from 'express';
import db from '../models';
import {login} from '../controllers/users';

const router = express.Router();

// router.post('/', (req, res) => res.json({success:true}) );

router.get('/', (req, res) => {
  return res.send('Hello world');
});

router.get( '/users/login', login);
router.post('/users/login', login);

export default router;