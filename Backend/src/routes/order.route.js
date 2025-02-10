const express = require('express');
const router = express.Router();
const verifyUser  = require('../middlewares/jwt-verify.js');
const {CreateOrderController,GetUserOrdersController,CancelOrder}=require('../controllers/order.controller.js')

router.post('/confirm-order', verifyUser, CreateOrderController);
router.get('/user-orders-data',verifyUser,GetUserOrdersController);
router.patch('/cancel-order', verifyUser, CancelOrder);

module.exports = router;