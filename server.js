const express = require("express");
const connectToDb = require("./src/db/db")

const app = express();//creating server
connectToDb()//connecting DB



app.use(express.json()); //middleware


//routes
let userData = [];

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.post("/profile", (req, res) => {
  const {user, password} = req.body;
  console.log(req.body);

  res.json({
    message: `User Data send Successfully`,
  });
});


//server-listening
app.listen(3000, () => {
  console.log("Server started at Port 3000");
});
