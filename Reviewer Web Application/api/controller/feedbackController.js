const mongoose = require("mongoose");
const harden = require("../service/harden");
const Review = mongoose.model("Review");

// post  api/post/reviews/:id/feedback
module.exports.addFeedback = function (req, resp) {
  const reviewId = req.params.id;
  const reqBody = req.body;
  const newFeedBack = {
    userName: reqBody.userName,
    feedbackContent: reqBody.feedbackContent,
    date: reqBody.date,
  };

  Review.findById(reviewId)
    .select("feedback")
    .exec(function (err, result) {
      const response = harden.harden(err, result);

      if (response.status != 200) {
        resp.status(response.status).json(response.json);
      } else {
        result.feedback.push(newFeedBack);
        result.save(function (err, result) {
          const response2 = harden.harden(err, result);

          resp.status(response2.status).json(response2.json);
        });
      }
    });
};
