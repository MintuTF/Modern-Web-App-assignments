const mongoose = require("mongoose");
require("../model/user");
require("../model/reviews");

const dbName = "BookReviewDB";
const dbUrl = "mongodb://localhost:27017/" + dbName;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", function () {
  console.log("mongoose connected " + dbUrl);
});
