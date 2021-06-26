const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const Game = mongoose.model("Game");
const getGameController = require("../Controller/gameController");

// get all publisher
function publisherGetAll(req, resp) {
  Game.findById(req.params.id)
    .select("publisher")
    .exec(function (err, result) {
      const response = {
        status: 200,
        massage: result,
      };
      if (err) {
        response.status = 500;
        response.massage = err;
      } else if (!result) {
        response.status = 400;
        response.massage = {
          error: "can not find your request in the database",
        };
      }

      resp.status(response.status).json(response.massage);
    });
}

// get one publisher function
function publisherGetone(req, resp) {
  const gameId = req.params.id;
  const publisherId = req.params.publisherId;
  Game.findById(gameId)
    .select("publisher")
    .exec(function (err, result) {
      // find({_id:ObjectID(req.params.publisherId)})
      const publisher = result.publisher.id(publisherId);

      const response = {
        status: 200,
        massage: publisher,
      };

      if (err) {
        response.status = 500;
        response.massage = err;
      } else if (!publisher) {
        response.status = 400;
        response.massage = { massage: "publishe id not found" };
      }

      resp.status(response.status).json(response.massage);
      console.log();
    });
}

function addPublisher(req, resp, game) {
  const reqBody = req.body;
  console.log(reqBody);
  const newPublisher = {
    name: reqBody.name,
    address: reqBody.address,
  };

  console.log(game.publisher.address);
  game.publisher = newPublisher;

  game.save(function (err, result) {
    const response = {
      status: 200,
      massage: result,
    };

    if (err) {
      response.status = 500;
      response.massage = err;
      console.log(err);
    } else if (!result) {
      response.status = 400;
      response.massage = { massage: "Game id not found" };
    }
    resp.status(response.status).json(result);
  });
}

function publisherAddOne(req, resp) {
  console.log("add publisher");

  Game.findById(req.params.id).exec(function (err, result) {
    const response = {
      status: 200,
      massage: result,
    };

    if (err) {
      response.status = 500;
      response.massage = err;
      console.log(err);
    } else if (!result) {
      response.status = 400;
      response.massage = { massage: "Game id not found" };
    }
    if (result) {
      addPublisher(req, resp, result);
    } else {
      resp.status(response.status).json(response.message);
    }

    //console.log(response)
    // resp.status(response.status).json(response.massage);
    // return response;
  });

  // call one publisher

  // console.log(getGameController.gameGetOne(req,resp));
}

const _updatePublisher = function (req, res, game) {
  game.publisher.name = req.body.name;
  game.publisher.address = req.body.address;
  // game.publisher.location.coordinates = [
  //   parseFloat(req.body.lng),
  //   parseFloat(req.body.lat),
  // ];
  game.save(function (err, updateGame) {
    const response = { status: 204 };
    if (err) {
      console.log("Error finding game");
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(updateGame);
  });
};
function publisherUpdate(req, res) {
  const gameId = req.params.id;
  console.log("PUT gameId ", gameId);
  Game.findById(gameId)
    .select("publisher")
    .exec(function (err, game) {
      const response = { status: 204 };
      if (err) {
        console.log("Error finding game");
        response.status = 500;
        response.message = err;
      } else if (!game) {
        response.status = 404;
        response.message = { message: "Game ID not found" };
      }
      if (response.status !== 204) {
        res.status(response.status).json(response.message);
      } else {
        _updatePublisher(req, res, game);
      }
    });
}

module.exports = {
  publisherGetAll: publisherGetAll,
  publisherGetone: publisherGetone,
  publisherAddOne: publisherAddOne,
  publisherUpdate: publisherUpdate,
};
