const express = require("express");
const db=require("./api/data/db")
// const bodyParser =require("body-parser");
const app = express();
const gameroutes=require("./api/route/gameRoutes")



app.set("port", 3000);

app.use(express.json());

app.use(function (req, resp, next) {
    console.log(req.method, req.url);
    next();
})



app.use("/api",gameroutes);


const server=app.listen(app.get("port"),function(){
    const port=server.address().port;
    console.log("server start with port",port);
})