const mongoose=require("mongoose")

const Game=mongoose.model("Game");

module.exports.getAllGame=function(req,resp){
    let count=8;
    let offset=0
    if(req.query.count&&req.query.offset){
         count= parseInt(req.query.count);
         offset=parseInt(req.query.offset);
        
    }
    

Game.find().skip(offset*count).limit(count).exec(function(err,games){
    console.log("found games",games);
    resp.status(200).json(games);
})


}


module.exports.gamesGetOne=function(req,resp){
Game.findById(req.params.id).exec(function(err,games){
    console.log("found games",games);
    resp.status(200).json(games);
})


}


module.exports.gamesAddone=function(req,resp){

    Game.insertOne(resp.body).exec(function(err,games){
    console.log(games);

    });
}