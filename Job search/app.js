const express = require("express");
const db = require("./api/data/db");
// const bodyParser =require("body-parser");
const app = express();
const path = require("path");
const gameroutes = require("./api/route/JobRoutes");

app.set("port", 3000);

app.use(function (req, resp, next) {
  console.log(req.method, req.url);
  next();
});

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use("/api", gameroutes);

const server = app.listen(app.get("port"), function () {
  const port = server.address().port;
  console.log("server start with port", port);
});
