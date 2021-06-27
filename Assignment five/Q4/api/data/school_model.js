//compile the model
const mongoose = require("mongoose");

const courseList = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
});

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  course: {
    type: [courseList],
    required: true,
  },
});

mongoose.model("students", schoolSchema);

// games collections

//mongoose.model("Game",gamesSchema,"games");
