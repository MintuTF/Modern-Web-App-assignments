const express = require("express");
const reviewController = require("../controller/reviewController");
const feedbackController = require("../controller/feedbackController");

const router = express.Router();

router
  .route("/reviews")
  .get(reviewController.reviewsGetAll)
  .post(reviewController.addReview);
// .get(bookReviewController.userGetAll);

router.route("/reviews/:id/feedback").post(feedbackController.addFeedback);

module.exports = router;
