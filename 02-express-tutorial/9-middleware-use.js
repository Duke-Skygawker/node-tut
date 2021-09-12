const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

//req(uest) => middleware => res(ponse)

//order is important with the middleware array
app.use([logger, authorize]);
// api/home/products - anything that comes after api will also be logged
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
  res.send("About");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
