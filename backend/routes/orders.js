const express = require("express");
const router = express.Router();

const OrdersController = require("../controllers/orders");

router.get("/", OrdersController.getAll);
router.post("/", OrdersController.createOrder);
router.post("/addBatch", OrdersController.addBatch);
router.get("/getBatch/:batchID", OrdersController.getBatch);
router.get("/getBasketInfo/:orderID", OrdersController.getBasketInfoByID);
router.delete("/delete/batch/:batchID", OrdersController.deleteBatchByID)
// router.patch("/update/batch/:batchID", OrdersController.updateBasketByBatchID)
router.put("/update/:order_id", OrdersController.updateOrder);

module.exports = router;
