const mongoose=require("mongoose")
require("./game_model")
const dbName= "meanGames";
const dbUrl= "mongodb://localhost:27017/"+dbName

mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on("connected",function(){
    console.log("mongoose connected"+dbUrl);

})

