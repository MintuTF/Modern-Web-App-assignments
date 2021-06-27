const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router
  .route("/user")
  .post(userController.userAddone)
  .get(userController.userGetAll);

router.route("/user/:id").delete(userController.userDeleteOne);

module.exports = router;
