const mongoose = require("mongoose");

const Review = mongoose.model("Review");

// post api/BookReview

module.exports.addReview = function (req, resp) {
  const reqBody = req.body;

  const newReview = {
    title: reqBody.title,
    author: reqBody.author,
    edition: reqBody.edition,
    readerFeedback: [reqBody.readerFeedback],
  };

  Review.create(newReview, function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};
