const express=require('express');
const { CreateUser,verifyUserController } = require('../controllers/user.controller');
const upload=require('../middlewares/multer');
const router=express.Router();
router.post('/create-user',upload.single('file'),CreateUser);
router.get('/activation/:token',);
module.exports = router;