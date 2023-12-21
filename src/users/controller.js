const { Router } = require("express");
const { createUser, getUsers } = require("./service");
const userRouter = Router();

// GET POST PATCH PUT DELETE
userRouter.get("/", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

userRouter.post("/", async (req, res) => {
  const creationResponse = await createUser(req.body);
  res.send(creationResponse);
});

module.exports = { userRouter };
