const express = require('express');
const router = express.Router();
const verifyUser  = require('../middlewares/jwt-verify.js');
const {CreateOrderController,GetUserOrdersController}=require('../controllers/order.controller.js')

router.post('/confirm-order', verifyUser, CreateOrderController);
router.get('/user-orders-data',verifyUser,GetUserOrdersController)

module.exports = router;