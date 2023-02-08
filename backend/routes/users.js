const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.post("/", UsersController.Create);
router.get("/", UsersController.getAll);
router.get("/:userID", UsersController.getUserByID);
router.put("/:userID", UsersController.updateUserBasket);
// router.delete("/", UsersController.Delete);

module.exports = router;