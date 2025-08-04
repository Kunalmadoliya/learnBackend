const mongoose = require("mongoose");


function connectDb() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = connectDb;
