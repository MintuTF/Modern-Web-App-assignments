const mongoose=require("mongoose")
require("./school")
const dbName= "schoolDB";
const dbUrl= "mongodb://localhost:27017/"+dbName

mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on("connected",function(){
    console.log("mongoose connected"+dbUrl);

})
mongoose.connection.on("disconnected",function(){
    console.log("mongoose disconnected"+dbUrl);

})
mongoose.connection.on("error",function(){
    console.log("mongoose disconnected"+dbUrl);

})
process.on("SIGINT" ,function(){
   mongoose.connection.close(function(){
console.log("send disconnect to mongoose because of aaplication termination.")
    process.exit(0);
   })
    
})
process.on("SIGUSR2" ,function(){
   mongoose.connection.close(function(){
console.log("send disconnect to mongoose because of aaplication terminations.")
    process.exit(0);
    process.kill(process.pid,"SIGUSR2")
   })
    
})