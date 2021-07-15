const express = require("express");
var cors = require("cors");
const db = require("./api/data/db");
// const bodyParser =require("body-parser");
const app = express();
const path = require("path");
const gameroutes = require("./api/routes/index");

app.set("port", 3000);

const corsOptions = {
  origin: "http://localhost:4200/",
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors());
app.use(function (req, resp, next) {
  console.log(req.method, req.url);
  next();
});
app.get("/api", function (req, res, next) {
  res.json({ msg: "This Cors enable for http://localhost:4200" });
  console.log("enabled");
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
