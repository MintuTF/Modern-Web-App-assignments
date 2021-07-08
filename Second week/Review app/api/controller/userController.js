const mongoose = require("mongoose");
const user = require("../model/user");
const harden = require("../service/harden");
const User = mongoose.model("User");
const UserAccess = mongoose.model("UserAccess");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  bcrypt.hash(req.body.password, 10, function (err, hashPassword) {
    const newUserAccess = {
      name: reqBody.name,
      username: reqBody.username,
      password: hashPassword,
    };

    UserAccess.create(newUserAccess, function (err, result) {
      const response = harden.harden(err, result);
      resp.status(response.status).json(response.massage);

      // if (response.status == 200) {
      //   User.create(newUser, function (err, result) {
      //     response = harden.harden(err, result);
      //     resp.status(response.status).json(response.massage);
      //   });
      // }
    });
  });
};

//get  post api/users/login

module.exports.loginUser = function (req, resp) {
  const username = req.body.username;
  const password = req.body.password;

  UserAccess.findOne({ username: username }).exec(function (err, result) {
    const response = harden.harden(err, result);

    if (result.status == 400) {
      console.log({ error: "user doesn't exit" });
      resp.status(response.status).json(response.massage);
    }
    if (result.status == 500) {
      console.log({ error: "user doesn't exit" });
      resp.status(response.status).json(response.massage);
    }
    if ((result.status = 200)) {
      bcrypt.compare(password, result.password, function (err, result) {
        if (err) {
          console.log("Err", err);
          resp.status(400).json({ message: "unauthorized" });
        }
        if (result) {
          console.log("User found", result);
          const jwtToken = jwt.sign({ name: result.username }, "cs572", {
            expiresIn: 3600,
          });

          resp.status(200).json({ result: result, jwt: jwtToken });
        } else {
          console.log("wrong password");
          resp.status(400).json({ message: "unauthorized" });
        }
      });
    }
  });
};

// get api/user
module.exports.userGetAll = function (req, resp) {
  let count = 8;
  let offset = 0;

  if (req.query.count && req.query.offset) {
    count = req.query.count;
    offset = req.query.count;
    if (isNaN(req.query.count) || isNaN(req.query.offset)) {
      resp.status(400).json({ error: "user input error" });
      return;
    }
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
