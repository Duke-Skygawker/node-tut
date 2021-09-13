const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const peopleRouter = require("./routes/people");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
// router setup
app.use("/login", authRouter);
app.use("/api/people", peopleRouter);

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
