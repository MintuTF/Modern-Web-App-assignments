const mongoose = require("mongoose");
// const user = require("./user");
const userFeedback = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  feedbackContent: {
    type: String,
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
    type: String,
    //required: true,
  },
  type: {
    type: String,
    required: true,
  },

  feedback: {
    type: [userFeedback],
  },
});

mongoose.model("Review", Reviews);
