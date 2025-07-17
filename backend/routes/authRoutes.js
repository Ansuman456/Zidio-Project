const express=require('express');
const router=express.Router();
const authController=require('../controllers/authController');

router.post('/signup',authController.register);
router.get('/ping', (req, res) => {
  res.send('pong');
});


router.post('/login',authController.login);

module.exports=router;