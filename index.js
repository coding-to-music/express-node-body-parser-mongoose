var express = require("express");
var app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./models/user.js");

//Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (req, res) {
  res.send("Hello World Three!");
});
app.post("/add", function (req, res) {
  const user = new User({
    userName: req.body.userName,
    userEmail: req.body.userEmail,
  });
  user.save().then((val) => {
    res.json({ msg: "User Added Successfully", val: val });
  });
});
//Database
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });
app.listen(8000, function () {
  console.log("Listening to Port 8000");
});
