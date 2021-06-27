const mongoose = require("mongoose");

const user = {
  name: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },
  adderss: {
    type: String,
    required: true,
  },
};

mongoose.model("BookReview", user);
