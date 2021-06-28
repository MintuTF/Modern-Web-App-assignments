const mongoose = require("mongoose");
const harden = require("../service/harden");
const User = mongoose.model("User");

// post api/users/:id/address
module.exports.addressAddone = function (req, resp) {
  const userId = req.params.id;
  const reqBody = req.body;
  const newAddress = {
    country: reqBody.country,
    state: reqBody.state,
    city: reqBody.city,
  };
  User.findById(userId).exec(function (err, result) {
    const response = harden.harden(err, result);

    if (response.status !== 200) {
      resp.status(response.status).json(response.massage);
    } else {
      result.address = newAddress;
      console.log(result.address);
      result.save(function (err, result) {
        console.log(result);
        const response = harden.harden(err, result);
        resp.status(response.status).json(response.massage);
      });
    }
  });
};

// get api/users/:id/address
module.exports.addressGetOne = function (req, resp) {
  const userId = req.params.id;

  User.findById(userId)
    .select("address")
    .exec(function (err, result) {
      const response = harden.harden(err, result);
      resp.status(response.status).json(response.massage);
    });
};

// delete api/users/:id/address
module.exports.addressRemoveOne = function (req, resp) {
  const userId = req.params.id;

  User.findById(userId).exec(function (err, result) {
    const response = harden.harden(err, result);

    if (response.status !== 200) {
      resp.status(response.status).json(response.massage);
    } else {
      result.address.remove();
      console.log(result.address);
      result.save(function (err, result) {
        console.log(result);
        const response = harden.harden(err, result);
        resp.status(response.status).json(response.massage);
      });
    }
  });
};

// put api/users/:id/address
module.exports.addressFullUpdate = function (req, resp) {
  const userId = req.params.id;
  const reqBody = req.body;

  User.findById(userId).exec(function (err, result) {
    const response = harden.harden(err, result);

    if (response.status !== 200) {
      resp.status(response.status).json(response.massage);
    } else {
      console.log(reqBody);
      result.address.country = reqBody.country;
      result.address.city = reqBody.city;
      result.address.state = reqBody.state;
      console.log(result.address);
      result.save(function (err, result) {
        console.log(result);
        const response = harden.harden(err, result);
        resp.status(response.status).json(response.massage);
      });
    }
  });
};
