const express = require("express");
const reviewController = require("../controller/reviewController");

const router = express.Router();

router
  .route("/reviews")
  .get(reviewController.reviewsGetAll)
  .post(reviewController.addReview);
// .get(bookReviewController.userGetAll);

module.exports = router;
