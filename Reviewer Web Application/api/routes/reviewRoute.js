const express = require("express");
const bookReviewController = require("../controller/reviewController");

const router = express.Router();

router
  .route("/reviews")
  .post(bookReviewController.userAddone)
  .get(bookReviewController.userGetAll);
