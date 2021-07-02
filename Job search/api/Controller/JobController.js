const mongoose = require("mongoose");
const harden = require("../sevice/harden");
const Job = mongoose.model("Job");

// post api/jobs
module.exports.addJob = function (req, resp) {
  const reqBody = req.body;
  const newJob = {
    title: reqBody.title,
    salary: reqBody.salary,
    location: reqBody.location,
    exprience: reqBody.exprience,
    skill: reqBody.skill,
    postDate: reqBody.postDate,
  };

  Job.create(newJob, function (err, result) {
    console.log(result);
    console.log(err);
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};

// get all
// api/jobs

module.exports.getAllJobs = function (req, resp) {
  let search = {};

  const searchKey = req.query.title;
  if (searchKey) {
    search = {
      title: searchKey,
    };
  }

  let count = 10;
  let offset = 0;
  let maxCount = 12;

  if (req.query) {
    if (req.query.count) {
      count = parseInt(req.query.count);
    }
    if (req.query.offset) {
      offset = parseInt(req.query.offset);
    }
    console.log(count, offset);
  }

  if (isNaN(count) || isNaN(offset)) {
    console.log("count or offset not number");
    resp.status(400).json({ error: "wrong input" });
  }
  if (count > maxCount) {
    count = maxCount;
  }

  Job.find(search)
    .skip(offset)
    .limit(count)
    .exec(function (err, result) {
      const response = harden.harden(err, result);
      resp.status(response.status).json(response.massage);
    });
};

// delete one job
// api /jobs/id

module.exports.deleteOneJob = function (req, resp) {
  const id = req.params.id;

  Job.findByIdAndDelete(id).exec(function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};

module.exports.updateOneJob = function (req, resp) {
  const id = req.params.id;
  const reqBody = req.body;
  const updateJob = {
    title: reqBody.title,
    salary: parseFloat(reqBody.salary),
    exprience: reqBody.exprience,
    skill: reqBody.skill,
    postDate: reqBody.postDate,
  };

  Job.findByIdAndUpdate(id, updateJob).exec(function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};

//get one
//api/jobs/id
module.exports.getOneJob = function (req, resp) {
  const id = req.params.id;

  Job.findById(id).exec(function (err, result) {
    const response = harden.harden(err, result);
    resp.status(response.status).json(response.massage);
  });
};

// // get All
// // get api/
// function gameGetAll(req, resp) {
//   const searchKey = req.query.searchKey;

//   const maxCount = 10;
//   let count = 6;
//   let offset = 0;
//   if (req.query.count && req.query) {
//     count = parseInt(req.query.count);
//   }

//   if (req.query.offset && req.query) {
//     offset = parseInt(req.query.offset);
//   }

//   if (isNaN(count) || isNaN(offset)) {
//     console.log("get one game called");
//     resp.status(400).json({ erroe: "error" });
//     return;
//   }
//   if (count > maxCount) {
//     count = maxCount;
//     console.log("error finding ", err);
//     resp.status(400).json({ error: "max count input error" });
//   }

//   let search = {};
//   if (searchKey) {
//     console.log("========");
//     search = {
//       title: searchKey,
//     };
//   } else {
//     search = {};
//   }
//   console.log(search);

//   Game.find(search)
//     .skip(offset)
//     .limit(count)
//     .exec(function (err, result) {
//       const response = harden.harden(err, result);
//       resp.status(response.status).json(response.massage);
//     });
// }

// // get One

// function gameGetOne(req, resp) {
//   // if(req.params.id.length<24)

//   Game.findById(req.params.id).exec(function (err, result) {
//     const response = {
//       status: 200,
//       massage: result,
//     };

//     if (err) {
//       response.status = 500;
//       response.massage = err;
//       console.log(err);
//     } else if (!result) {
//       response.status = 400;
//       response.massage = { massage: "Game id not found" };
//     }
//     console.log(response);
//     resp.status(response.status).json(response.massage);
//     // return response;
//   });
// }

// function gameAddOne(req, resp) {
//   console.log(req.body);

//   const newGame = {
//     title: req.body.title,
//     price: parseInt(req.body.price),
//     year: parseInt(req.body.year),
//     minPlayer: parseInt(req.body.minPlayer),
//     maxPlayer: parseInt(req.body.maxPlayer),
//     minAge: parseInt(req.body.minAge),
//     rate: parseInt(req.body.rate),
//     designers: req.body.designers,
//     publisher: {},
//   };

//   Game.create(newGame, function (err, result) {
//     const response = harden.harden(err, result);
//     resp.status(response.status).json(response.massage);
//   });
// }

// // full update
// function gameFullUpdateOne(req, resp) {
//   // if(req.params.id.length<24)

//   //console.log(req.body)

//   Game.findById(req.params.id).exec(function (err, result) {
//     let response = harden.harden(err, result);
//     if (response.status !== 204) {
//       resp.status(response.status).json(response.massage);
//     } else {
//       (result.title = req.body.title),
//         (result.price = parseInt(req.body.price)),
//         (result.year = parseInt(req.body.year)),
//         (result.minPlayer = parseInt(req.body.minPlayer)),
//         (result.maxPlayer = parseInt(req.body.maxPlayer)),
//         (result.minAge = parseInt(req.body.minAge)),
//         (result.rate = parseInt(req.body.rate)),
//         (result.designers = req.body.designers),
//         (result.publisher = {});

//       result.save(function (err, updateGame) {
//         const response = harden.harden(err, result);
//         resp.status(response.status).json(response.massage);
//       });
//     }
//   });
// }

// // delete
// function gameDeleteOne(req, resp) {
//   Game.findByIdAndRemove(req.params.id).exec(function (err, result) {
//     response = harden.harden(err, result);
//     resp.status(response.status).json(response.massage);
//   });
// }

// function gamePartialUpdateOne(req, resp) {
//   // if(req.params.id.length<24)

//   Game.findById(req.params.id).exec(function (err, result) {
//     let response = harden.harden(err, result);
//     resp.status(response.status).json(response.massage);
//     if (response.status !== 204) {
//       resp.status(response.status).json(response.massage);
//     } else {
//       (result.title = req.body.title),
//         (result.price = parseInt(req.body.price)),
//         (result.year = parseInt(req.body.year)),
//         (result.minPlayer = parseInt(req.body.minPlayer)),
//         (result.maxPlayer = parseInt(req.body.maxPlayer)),
//         (result.minAge = parseInt(req.body.minAge)),
//         (result.rate = parseInt(req.body.rate)),
//         (result.designers = req.body.designers),
//         (result.publisher = {});

//       result.save(function (err, result) {
//         response = harden.harden(err, result);
//         resp.status(response.status).json(response.massage);
//       });
//     }
//   });
// }

// module.exports = {
//   gameGetAll: gameGetAll,
//   gameGetOne: gameGetOne,
//   gameFullUpdateOne: gameFullUpdateOne,
//   gameAddOne: gameAddOne,
//   gameDeleteOne: gameDeleteOne,
// };
