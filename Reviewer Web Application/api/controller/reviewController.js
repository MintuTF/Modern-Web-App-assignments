const mongoose = require("mongoose");
const harden = require("../service/harden");
const Review = mongoose.model("Review");

// post api/BookReview

module.exports.addReview = function (req, resp) {
  const reqBody = req.body;

  const newReview = {
    title: reqBody.title,
    author: reqBody.author,
    type: reqBody.type,
    feedback: [reqBody.readerFeedback],
  };
  console.log(newReview);
  Review.create(newReview, function (err, result) {
    console.log(err);
    const response = harden.harden(err, result);

    resp.status(response.status).json(response.massage);
  });
};

// get api/post/reviews
module.exports.reviewsGetAll = function (req, resp) {
  const count = 8;
  const offset = 0;

  if (req.query.count && req.query.offset) {
    count = req.query.count;
    offset = req.query.count;
  }

  if (isNaN(req.query.count) || isNaN(req.query.offset)) {
    resp.status(400).json({ error: "user input error" });
    return;
  }

  Review.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, result) {
      const response = harden.harden(err, result);
      resp.status(response.status).json(response.massage);
    });
};
