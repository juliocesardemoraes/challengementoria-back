const express = require("express");
const { connectToMongo } = require("./database/connect");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/hello/", (req, res) => {
  res.send("hello world 2");
});

connectToMongo();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
