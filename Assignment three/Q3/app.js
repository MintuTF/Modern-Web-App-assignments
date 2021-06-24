const express = require("express");
const app = express();
const gameroutes=require("./api/router/index")
require("./api/data/dbconnection").opend()

const path = require("path");
app.set("port", 3000);

app.use(function (req, resp, next) {
    console.log(req.method, req.url);
    next();
})


app.use(express.static(path.join(__dirname, "public")))

app.use("/games",gameroutes);
const server = app.listen(app.get("port"), function () {
    const port = server.address().port;
    console.log("Listening to port", port);
})