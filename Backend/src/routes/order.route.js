const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/jwt-verify.js');
const {
  CreateOrderController,GetUserOrdersController
} = require('../controllers/order.controller.js');

router.post('/confirm-order', verifyToken, CreateOrderController);
router.get('/user-orders-data',verifyToken,CreateOrderController)

module.exports = router;