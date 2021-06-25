
const express=require("express");
const gamecontroller=require("../controller/gamesController");
const router=express.Router();

router.get("/games",gamecontroller.getAllGame);

router.get("/games/:id",gamecontroller.gamesGetOne)
router.get("/games/addGames",gamecontroller.gamesAddone);
module.exports=router;