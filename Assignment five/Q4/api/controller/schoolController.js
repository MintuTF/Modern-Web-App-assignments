const mongoose = require("mongoose");

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
    console.log("found games", result);
    resp.status(200).json(result);
  });
};

module.exports.gamesAddone = function (req, resp) {
    
  Students.insertOne(.body).exec(function (err, result) {
    console.log(result);
  });
};

