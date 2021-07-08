const mongoose = require("mongoose");
const Game = mongoose.model("Game");

const _addPublisher = function (req, resp, game) {
  console.log("Publisher: ", req.body);
  game.publisher.push(req.body);
  game.save(function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};

module.exports.publisherGetOne = function (req, resp) {
  const gameID = req.params.gameID;
  const publisherId = req.params.publisherId;

  Game.findById(gameID, function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);

    if (result) {
      const doc = result.publisher.id(publisherId);
      console.log(doc);
      resp.status(200).json(doc);
    }
  });
};

module.exports.publisherGetAll = function (req, resp) {
  const gameID = req.params.gameID;

  Game.findById(gameID)
    .select("publisher")
    .exec(function (err, publishser) {
      console.log("Found Game ", publishser);
      resp.status(200).json(publishser);
    });
};

module.exports.publisherAddOne = function (req, resp) {
  const gameID = req.params.gameID;

  Game.findById(gameID).exec(function (err, game) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);

    if (result) {
      _addPublisher(req, res, game);
    } else {
      resp.status(response.status).json(response.message);
    }
  });
};
module.exports.publisherFUllUpdateOne = function (req, resp) {
  const gameID = req.params.gameID;
  Game.findByIdAndUpdate(gameID, {
    publisher: {
      name: req.body.name,
      address: req.body.address,
    },
  }).exec(function (err, game) {
    console.log("Found Game ", game);
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);

    if (game) {
      game.publisher.name = req.body.name;
      game.save(function (err, result) {
        const response = harden.harden(err, result);
        resp.status(response.status).json(response.massage);
      });
    }
  });
};

module.exports.publisherDeleteOne = function (req, resp) {
  const gameID = req.params.gameID;

  Game.findById(gameID).exec(function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
    if (result) {
      game.publisher.remove();
      game.save(function (err, updatedGame) {
        const response = harden.harden(err, result);
        resp.status(response.status).json(response.massage);
      });
      //resp.status(204).json(publishser);
    }
    //res.status(200).json(publishser);
  });
};
