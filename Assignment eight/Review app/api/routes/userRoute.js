const express = require("express");
const userController = require("../controller/userController");
const addressControler = require("../controller/addressController");

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

router
  .route("/users/:id/address")
  .post(addressControler.addressAddone)
  .get(addressControler.addressGetOne)
  .delete(addressControler.addressRemoveOne)
  .put(addressControler.addressFullUpdate);

module.exports = router;
