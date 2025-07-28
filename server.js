const express = require("express");

const app = express();

app.use(express.json());

let userData = [];

// / routes

app.post("/profile", (req, res) => {
  console.log(req.body);
  userData.push(req.body);
  res.json({
    message: `User added success`,
    userData: userData,
  });
});

app.get("/user" ,(req , res) =>{
  res.get()
})

app.listen(3000, () => {
  console.log("Server is running on port 3000 ");
});
