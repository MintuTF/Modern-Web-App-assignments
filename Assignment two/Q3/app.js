const express=require("express");
const controller=require("./api/controller")

const app=express();

app.set("port",5000);

app.get("/:val2",controller.multiply)

app.listen(app.get("port"),function(){

    console.log("server started with port",app.get("port"));
})
