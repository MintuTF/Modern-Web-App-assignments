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
