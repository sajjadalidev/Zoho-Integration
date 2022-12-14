const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router
  .route('/')
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);

router
    .route('/:id')
    .get(orderController.getOrder)
    .patch(orderController.updateOrder);

router
  .route('/client/:clientId')
  .get(orderController.getClientOrders);

  
module.exports = router; 