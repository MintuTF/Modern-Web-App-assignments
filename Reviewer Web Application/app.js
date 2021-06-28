const express = require("express");
require("./api/data/db");
const app = express();
const userRoute = require("./api/routes/userRoute");
const reviewRoute = require("./api/routes/reviewRoute");
const path = require("path");

app.set("port", 5000);

app.use(function (req, resp, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/api", userRoute);
app.use("/api/post", reviewRoute);

const server = app.listen(app.get("port"), function () {
  const port = server.address().port;
  console.log("server started eith port", port);
});
