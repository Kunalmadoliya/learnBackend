const express = require("express");

const app = express();

app.use(express.json()); //middleware

let userData = [];

// routes

// it will post the data from frontend to backend
app.post("/profile", (req, res) => {
  console.log(req.body);
  userData.push(req.body);
  res.json({
    message: `User added success`,
    userData: userData,
  });
});

app.get("/profile", (req, res) => {
  res.json(userData);
});

app.delete("/profile/:id", (req, res) => {
  let index = req.params.id;
  delete userData[index];

  res.json({
    message: `User deleted success with id ${index}`,
  });
});

app.patch("/profile/:id", (req, res) => {
  let index = req.params.id;
  const {password} = req.body;

  userData[index].password = password;
  res.json({
    message :`Password changed success!!`
  })
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 ");
});
