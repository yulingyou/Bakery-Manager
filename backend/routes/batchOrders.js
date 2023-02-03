const express = require("express");
const router = express.Router();

const BatchOrdersController = require("../controllers/batchOrders");

router.put("/update/batch/:batchID", BatchOrdersController.updateBatchByID)

module.exports = router;
