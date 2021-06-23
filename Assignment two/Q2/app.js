const express = require("express");
const app = express();
const path = require("path")

app.set("port", 3000);

app.use(function (req, resp, next) {
    console.log(req.method, req.url);
    next();
})

app.use(express.static(path.join(__dirname, "public")))

const server = app.listen(app.get("port"), function () {
    const port = server.address().port;
    console.log("Listening to port", port);
})