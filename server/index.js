const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port: ${port}`);
  } else {
    console.log(`Server is not running due to: ${error}`);
  }
});
