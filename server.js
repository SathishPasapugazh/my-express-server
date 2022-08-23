//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Email: xxx@m.com");
});
app.get("/about", function (req, res) {
  res.send("I'm Sathish");
});
app.get("/hobbie", function (req, res) {
  res.send("coding");
});

app.listen(3000, function () {
  console.log("Server startd on port 3000");
});