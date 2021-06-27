const mongoose = require("mongoose");
const user = require("./user");
const readerFeedback = new mongoose.Schema({
  user: {
    type: user.user,
    required: true,
  },
  date: {
    type: String,
  },
});

const bookReview = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  edition: {
    type: String,
    required: true,
  },
  reader: {
    type: [readerFeedback],
    required: true,
  },
});

mongoose.model("BookReview", bookReview);
