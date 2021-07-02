const mongoose = require("mongoose");

const location = new mongoose.Schema({
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});
const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  location: location,
  description: {
    type: String,
  },
  exprience: {
    type: String,
  },
  skill: {
    type: String,
  },
  postDate: {
    type: Number,
  },
});

mongoose.model("Job", JobSchema);
