const express = require("express");
const connectToDb = require("./src/db/db");
const userModel = require("./src/models/user.model");

const app = express();
connectToDb();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const {user, password} = req.body;
  console.log(req.body);

  await userModel.create({
    user,
    password,
  });

  res.json({
    message: "User SignedIn ",
  });
});

app.get("/signup", async (req, res) => {
  const users = await userModel.find();

  res.json({
    message: "User fetch Sucess",
    users,
  });
});

app.patch("/signup/:id", async (req, res) => {
  const userId = req.params.id;
  const {password} = req.body;

  await userModel.findByIdAndUpdate(
    {
      _id: userId,
    },
    {
      password: password,
    }
  );

  res.json({
    message : "User Updated!"
  })
});

app.delete("/signup/:id", async (req, res) => {
  const userId = req.params.id;
  await userModel.findOneAndDelete({
    _id: userId,
  });
  res.json({
    message: "User Deleted Success",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
