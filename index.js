const mongoose = require("mongoose");

const DATABASE = "mongodb://mymongo:27017/testup";

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("ERROR in DB connection");
  });
