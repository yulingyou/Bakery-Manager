const express = require("express");
const router = express.Router();

const OrdersController = require("../controllers/orders");

router.get("/", OrdersController.getAll);
router.post("/", OrdersController.createOrder);
router.post("/addBatch", OrdersController.addBatch);
router.get("/getBatch/:batchID", OrdersController.getBatch);
router.get("/getBasketInfo/:orderID", OrdersController.getBasketInfoByID);


module.exports = router;
