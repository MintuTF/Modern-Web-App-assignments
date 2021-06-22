const express = require("express");
const app = express();
const path = require("path");

app.set("port", 5000);


app.get("/", function (req, resp) {
    resp.status(200).sendFile(path.join(__dirname, "public", "index.html"))
    //console.log(__dirname)
})


app.listen(app.get("port"), function () {
    console.log("start port number", app.get("port"))
})


