import express from 'express';
// import db from '../models';
import users from '../controllers/Users';
import sales from '../controllers/Sales';
import register from '../controllers/Register';
import serviceCategory from '../controllers/ServiceCategory';
import service from '../controllers/Service';
import reservation from '../controllers/Reservation';
import customer from '../controllers/Customer';

const router = express.Router();

// router.post('/', (req, res) => res.json({success:true}) );

// router.get('/', (req, res) => {
//   return res.send('Hello world');
// });

// router.get( '/users/login', login);

router.use('/users', users);
router.use('/sales', sales);
router.use('/register', register);
router.use('/serviceCategory', serviceCategory);
router.use('/service', service);
router.use('/reservation', reservation);
router.use('/customer', customer);

export default router;