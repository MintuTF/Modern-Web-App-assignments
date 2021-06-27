const mongoose = require("mongoose");
const harden = require("../../service/hardening");

const Students = mongoose.model("students");

module.exports.getAllStudents = function (req, resp) {
  let count = 8;
  let offset = 0;
  if (req.query.count && req.query.offset) {
    count = parseInt(req.query.count);
    offset = parseInt(req.query.offset);
  }

  Students.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, result) {
      console.log("found games", result);
      resp.status(200).json(result);
    });
};

module.exports.getOneStudent = function (req, resp) {
  Students.findById(req.params.id).exec(function (err, result) {
    const response = harden.harden(err, result);

    resp.status(response.status).json(response.massage);
  });
};

//post  api/student/
module.exports.studentAddOne = function (req, resp) {
  const reqBody = req.body;
  console.log(reqBody);
  const newStudent = {
    name: reqBody.name,
    grade: reqBody.grade,
    course: reqBody.course,
  };

  Students.create(newStudent, function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};

//  delete api/students/:id
module.exports.studentsRemoveOne = function (req, resp) {
  const studentId = req.params.id;
  Students.findByIdAndRemove(studentId).exec(function (err, result) {
    const response = harden.harden(err, result);

    resp.status(response.status).json(response.massage);
  });
};

// update students
// put api/students/:id

module.exports.studentsFullUpdate = function (req, resp) {
  const studentId = req.params.id;
  const reqBody = req.body;
  const newStudent = {
    name: reqBody.name,
    grade: reqBody.grade,
    course: reqBody.course,
  };
  console.log(newStudent);
  Students.findById(studentId).exec(function (err, result) {
    const response = harden.harden(err, result);
    if (response.status != 200) {
      resp.status(response.status).json(response.massage);
    } else {
      result.name = reqBody.name;
      result.grade = reqBody.grade;
      result.course = reqBody.course;

      //   result = newStudent;
      result.save(function (err, result) {
        console.log(result);
        const response2 = harden.harden(err, result);
        resp.status(response2.status).json(response2.massage);
      });
    }
  });
  //   Students.findByIdAndUpdate(studentId, newStudent, function (err, result) {
  //     const response = harden.harden(err, result);
  //     console.log(result);
  //     console.log(err);
  //     resp.status(response.status).json(response.massage);
  //   });
};
