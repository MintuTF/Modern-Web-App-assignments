const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router
  .route("/users")
  .post(userController.userAddone)
  .get(userController.userGetAll);

router
  .route("/users/:id")
  .get(userController.userGetOne)
  .put(userController.userFullUpdate)
  .delete(userController.userDeleteOne);

module.exports = router;
