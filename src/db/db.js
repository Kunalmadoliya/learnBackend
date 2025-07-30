const mongoose = require("mongoose");

function connectToDb() {
  mongoose.connect(
    "mongodb+srv://kunal:LP498G3ZOjzETSTE@cohort.mkjliqy.mongodb.net/cohort"
  ).then(()=>{
    console.log("Connected to DB");
    
  })
}


module.exports = connectToDb