const mongoose = require("mongoose");

const connectDb = mongoose
  .connect(process.env.mongodb_url)
  .then(() => {
    console.log("mongodb connection succesfull");
  })
  .catch((err) => {
    console.error(err);
  });
