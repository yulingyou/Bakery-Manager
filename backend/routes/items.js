const express = require("express");
const router = express.Router();

const ItemsController = require("../controllers/items");

router.get("/", ItemsController.getAll);
router.post("/", ItemsController.createItem);
router.get("/:name", ItemsController.getItemByName);

module.exports = router;
