const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const harden = require("../service/hardening");

const User = mongoose.model("User");

module.exports.register = function (req, resp) {
  console.log("controller register:");
  bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
    if (!err) {
      const newUser = {
        username: req.body.username,
        password: hashedPassword,
        name: req.body.name,
      };

      User.create(newUser, function (err, result) {
        const response = harden.harden(err, result);
        resp.status(response.status).json(response.massage);
      });
    }
  });
};

module.exports.login = function (req, resp) {
  console.log("controller Login");
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username }).exec(function (err, user) {
    if (err) {
      resp.status(500).json(err);
    }
    console.log("er", err);
    console.log("user", user);
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          console.log("Err", err);
          resp.status(400).json({ message: "unauthorized" });
        } else {
          if (result) {
            console.log("User found", user);
            const token = jwt.sign({ name: user.name }, "cs572", {
              expiresIn: 3600,
            });
            resp.status(200).json({ success: "true", token: token });
          }
        }
      });
    } else {
      resp.status(400).json({ message: "unauthorized 2" });
    }
  });
};

module.exports.authenticate = function (req, resp, next) {
  const headerExists = req.headers.authorization;

  if (headerExists) {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, "cs572", function (err, decodedToken) {
      if (err) {
        console.log("JWT verify error ", err);
        resp.status(401).json({ message: "Unauthorized" });
      } else {
        next();
      }
    });
  } else {
    resp.status(403).json({ message: "Token Missing" });
  }
};
