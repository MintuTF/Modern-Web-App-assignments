const mongoose = require("mongoose");

const dbName = "bookReviewDB";
const dbUrl = "mongodb://localhost:27017/" + dbName;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", function () {
  console.log("mongoose connected " + dbUrl);
});
