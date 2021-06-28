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

const Reviews = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: user.user,
    //required: true,
  },
  edition: {
    type: Number,
    required: true,
  },
  readerFeedback: {
    type: [readerFeedback],
    required: true,
  },
});

mongoose.model("Review", Reviews);
