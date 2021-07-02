const express = require("express");
const JobController = require("../Controller/JobController");

const router = express.Router();

router.route("/jobs").post(JobController.addJob).get(JobController.getAllJobs);

router
  .route("/jobs/:id")
  .delete(JobController.deleteOneJob)
  .put(JobController.updateOneJob)
  .get(JobController.getOneJob);

// router
//   .route("/games")
//   .get(gameController.gameGetAll) //.post(gameController.gameAddOne);
//   .post(gameController.gameAddOne);

// router
//   .route("/games/:id")
//   .get(gameController.gameGetOne)
//   .put(gameController.gameFullUpdateOne)
//   .delete(gameController.gameDeleteOne);

// router
//   .route("/games/:id/publisher")
//   .get(publisherController.publisherGetAll)
//   .post(publisherController.publisherAddOne)
//   .put(publisherController.publisherUpdate);

// router
//   .route("/games/:id/publisher/:publisherId")
//   .get(publisherController.publisherGetone);

module.exports = router;

// module.exports={
//     router:router
// };
