const express = require("express");
const { connectToMongo } = require("./database/connect");
const { userRouter } = require("./users/controller");
const app = express();
const cors = require("cors");

// respond with "hello world" when a GET request is made to the homepage
app.get("/hello/", (req, res) => {
  res.send("hello world 2");
});

connectToMongo();
app.use(express.json());

// CORS setup
app.use(
  cors({
    origin: "*",
  })
);

app.use("/user", userRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
