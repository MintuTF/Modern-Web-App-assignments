const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const Game = mongoose.model("Game");

function gameGetAll(req, resp) {
  const searchKey = req.query.searchKey;

  const maxCount = 10;
  let count = 6;
  let offset = 0;
  if (req.query.count && req.query) {
    count = parseInt(req.query.count);
  }

  if (req.query.offset && req.query) {
    offset = parseInt(req.query.offset);
  }

  if (isNaN(count) || isNaN(offset)) {
    console.log("get one game called");
    resp.status(400).json({ erroe: "error" });
    return;
  }
  if (count > maxCount) {
    console.log("error finding ", err);
    resp.status(400).json({ error: "max count input error" });
  }

  let search = {};
  if (searchKey) {
    console.log("========");
    search = {
      title: searchKey,
    };
  } else {
    search = {};
  }
  console.log(search);

  Game.find(search)
    .skip(offset)
    .limit(count)
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

function gameGetOne(req, resp) {
  // if(req.params.id.length<24)

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
    console.log(response);
    resp.status(response.status).json(response.massage);
    // return response;
  });
}

function gameAddOne(req, resp) {
  console.log(req.body);

  const newGame = {
    title: req.body.title,
    price: parseInt(req.body.price),
    year: parseInt(req.body.year),
    minPlayer: parseInt(req.body.minPlayer),
    maxPlayer: parseInt(req.body.maxPlayer),
    minAge: parseInt(req.body.minAge),
    rate: parseInt(req.body.rate),
    designers: req.body.designers,
    publisher: {},
  };

  Game.create(newGame, function (err, result) {
    const response = {
      status: 200,
      massage: result,
    };

    if (err) {
      (response.status = 500), (response.massage = err);
    } else if (!result) {
      (response.status = 400),
        (response.massage = { error: "user insert empty value" });
    }
    resp.status(response.status).json(response.massage);
  });
}

function gameFullUpdateOne(req, resp) {
  // if(req.params.id.length<24)

  //console.log(req.body)

  Game.findById(req.params.id).exec(function (err, result) {
    const response = {
      status: 204,
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
    if (response.status !== 204) {
      resp.status(response.status).json(response.massage);
    } else {
      (result.title = req.body.title),
        (result.price = parseInt(req.body.price)),
        (result.year = parseInt(req.body.year)),
        (result.minPlayer = parseInt(req.body.minPlayer)),
        (result.maxPlayer = parseInt(req.body.maxPlayer)),
        (result.minAge = parseInt(req.body.minAge)),
        (result.rate = parseInt(req.body.rate)),
        (result.designers = req.body.designers),
        (result.publisher = {});

      result.save(function (err, updateGame) {
        if (err) {
          response.status = 500;
          response.massage = err;
        } else {
          response.massage = updateGame;
        }
        resp.status(response.status).json(response.massage);
      });
    }
  });
}

function gameDeleteOne(req, resp) {
  Game.findByIdAndRemove(req.params.id).exec(function (err, result) {
    const response = {
      status: 204,
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

    resp.status(response.status).json(response.massage);
  });
}

function gamePartialUpdateOne(req, resp) {
  // if(req.params.id.length<24)

  Game.findById(req.params.id).exec(function (err, result) {
    const response = {
      status: 204,
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
    if (response.status !== 204) {
      resp.status(response.status).json(response.massage);
    } else {
      (result.title = req.body.title),
        (result.price = parseInt(req.body.price)),
        (result.year = parseInt(req.body.year)),
        (result.minPlayer = parseInt(req.body.minPlayer)),
        (result.maxPlayer = parseInt(req.body.maxPlayer)),
        (result.minAge = parseInt(req.body.minAge)),
        (result.rate = parseInt(req.body.rate)),
        (result.designers = req.body.designers),
        (result.publisher = {});

      result.save(function (err, updateGame) {
        if (err) {
          response.status = 500;
          response.massage = err;
        } else {
          response.massage = updateGame;
        }
      });
    }
  });
}

module.exports = {
  gameGetAll: gameGetAll,
  gameGetOne: gameGetOne,
  gameFullUpdateOne: gameFullUpdateOne,
  gameAddOne: gameAddOne,
  gameDeleteOne: gameDeleteOne,
};
