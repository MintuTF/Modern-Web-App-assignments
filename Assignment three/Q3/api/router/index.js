
const express=require("express");
const gamecontroller=require("../controller/gamesController");
const router=express.Router();

router.get("/",gamecontroller.getAllGame);


module.exports=router;