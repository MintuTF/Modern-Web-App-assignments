const express = require("express");
const app = express();
const path = require("path");

app.set("port", 5050);


app.get("/", function (req, resp) {
    resp.status(200).sendFile(path.join(__dirname, "public", "index.html"))
 })


const server=app.listen(app.get("port"), function () {
    const ports=server.address.port;
    console.log("start server with port number", app.get("port"));
})


