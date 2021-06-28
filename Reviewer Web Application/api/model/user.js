const mongoose = require("mongoose");

const address = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },
  address: {
    type: address,
  },
  NumberOfReview: {
    type: Number,
  },
});

mongoose.model("User", user);
module.exports = user;
