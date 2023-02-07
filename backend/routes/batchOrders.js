const express = require("express");
const router = express.Router();

const BatchOrdersController = require("../controllers/batchOrders");

router.put("/update/batch/:batchID", BatchOrdersController.updateBatchByID)
router.get("/getAll", BatchOrdersController.getAll)

module.exports = router;