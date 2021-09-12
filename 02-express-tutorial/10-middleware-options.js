const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

//req(uest) => middleware => res(ponse)

// app.use("api",logger)
// api/home/products - anything that comes after api will also be logged

// app.use([logger, authorize]);
//order is important with the middleware array
// app.use(express.static("./public")) - expresses built in middleware
// app.user(morgan("tiny")); - 3rd party logger

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Home");
});
app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
