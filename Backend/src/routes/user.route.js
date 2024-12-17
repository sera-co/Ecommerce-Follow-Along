const express=require('express');
const { CreateUser,verifyUserController, signup, login } = require('../controllers/user.controller');
const upload=require('../middlewares/multer');
const router=express.Router();
router.post('/create-user',upload.single('file'),CreateUser);
router.get('/activation/:token',);
router.post("/signup",signup);
router.post("/login",login);
module.exports = router;