const express=require("express");
const gameController=require("../Controller/gameController")
const publisherController=require("../Controller/publisherController")
const  router=express.Router();

router.route("/games")
.get(gameController.gameGetAll) //.post(gameController.gameAddOne);
.post(gameController.gameAddOne);


router.route("/games/:id")
.get(gameController.gameGetOne).
put(gameController.gameFullUpdateOne)
.delete(gameController.gameDeleteOne);

router.route("/games/:id/publisher")
.get(publisherController.publisherGetAll)
.post(publisherController.publisherAddOne);


router.route("/games/:id/publisher/:publisherId")
.get(publisherController.publisherGetone);



module.exports=router;

// module.exports={
//     router:router
// };
