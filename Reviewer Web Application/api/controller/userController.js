const mongoose = require("mongoose");
const harden = require("../service/harden");
const User = mongoose.model("User");

// post api/user
module.exports.userAddone = function (req, resp) {
  const reqBody = req.body;
  console.log(reqBody);
  const newUser = {
    name: reqBody.name,
    role: reqBody.role,
    address: reqBody.address,
    NumberOfReview: reqBody.NumberOfReview,
  };

  User.create(newUser, function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};

// get api/user
module.exports.userGetAll = function (req, resp) {
  const count = 8;
  const offset = 0;

  if (req.query.count && req.query.offset) {
    count = req.query.count;
    offset = req.query.count;
  }

  if (isNaN(req.query.count) || isNaN(req.query.offset)) {
    resp.status(400).json({ error: "user input error" });
    return;
  }

  User.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, result) {
      const response = harden.harden(err, result);
      resp.status(response.status).json(response.massage);
    });
};

// delete api/user/:id

module.exports.userDeleteOne = function (req, resp) {
  const userId = req.params.id;
  User.findByIdAndRemove(userId).exec(function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};

//get api/user/:id
module.exports.userGetOne = function (req, resp) {
  const userId = req.params.id;
  User.findById(userId).exec(function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};

//get api/user/:id
module.exports.userFullUpdate = function (req, resp) {
  const userId = req.params.id;
  const reqBody = req.body;
  console.log(reqBody);
  const newUser = {
    name: reqBody.name,
    role: reqBody.role,
    address: reqBody.address,
    NumberOfReview: reqBody.NumberOfReview,
  };
  User.findByIdAndUpdate(userId, newUser).exec(function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};
