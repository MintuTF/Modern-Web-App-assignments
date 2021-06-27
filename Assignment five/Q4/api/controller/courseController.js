const mongoose = require("mongoose");
const Students = mongoose.model("students");
const harden = require("../../service/hardening");

// get api/students/:id/course
module.exports.courseGetOne = function (req, resp) {
  const studentId = req.params.id;

  Students.findById(studentId)
    .select("course")
    .exec(function (err, result) {
      console.log(result.course);

      const response = harden.harden(err, result);
      resp.status(response.status).json(response.massage);
    });
};

// post api/students/:id/course

module.exports.courseAddone = function (req, resp) {
  const studentId = req.params.id;
  const reqBody = req.body;
  const Newcourse = {
    courseId: reqBody.courseId,
    courseName: reqBody.courseName,
  };

  Students.findById(studentId)
    .select("course")
    .exec(function (err, result) {
      const response = harden.harden(err, result);

      if (response.status != 200) {
        resp.status(response.status).json(response.json);
      } else {
        result.course.push(Newcourse);
        result.save(function (err, result) {
          const response2 = harden.harden(err, result);

          resp.status(response2.status).json(response2.json);
        });
      }
    });
};
