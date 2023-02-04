const express = require("express");
const router = express.Router();

const OrdersController = require("../controllers/orders");

router.get("/", OrdersController.getAll);
router.post("/:userId", OrdersController.createOrder);

module.exports = router;
