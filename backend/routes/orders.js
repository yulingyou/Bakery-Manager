const express = require("express");
const router = express.Router();

const OrdersController = require("../controllers/orders");

router.get("/", OrdersController.getAll);
router.post("/", OrdersController.createOrder);
router.post("/update", OrdersController.updateOrder);

module.exports = router;
