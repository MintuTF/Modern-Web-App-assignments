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

const userAccess = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    requored: true,
  },
  password: {
    type: String,
    required: true,
  },
});
mongoose.model("User", user);
mongoose.model("UserAccess", userAccess);
module.exports = user;
