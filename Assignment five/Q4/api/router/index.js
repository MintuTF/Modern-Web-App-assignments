const express = require("express");
const studentsController = require("../controller/schoolController");
const courseController = require("../controller/courseController");
const router = express.Router();

router
  .route("/students")
  .get(studentsController.getAllStudents)
  .post(studentsController.studentAddOne);

router
  .route("/students/:id")
  .get(studentsController.getOneStudent)
  .delete(studentsController.studentsRemoveOne)
  .put(studentsController.studentsFullUpdate);
router
  .route("/students/:id/course")
  .get(courseController.courseGetOne)
  .post(courseController.courseAddone);

module.exports = router;
