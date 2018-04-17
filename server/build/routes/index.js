import express from 'express';

var router = express.Router();

router.post('/', function (req, res) {
  return res.json({ success: true });
});

export default router;