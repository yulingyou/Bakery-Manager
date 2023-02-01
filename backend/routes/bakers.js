const express = require("express");
const router = express.Router();

const BakersController = require("../controllers/bakers");

router.get("/", BakersController.getAll);
router.get("/:id", BakersController.getBakerById);

module.exports = router;