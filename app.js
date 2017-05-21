// requires
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// setting directory views

app.use(express.static("node_modules"));
app.use(express.static("public"));

// setting app
app.use(bodyParser.urlencoded({extended:true}));

// setting view engine for make ejs standart
app.set("view engine", "ejs");

// site routes
app.get("/", function (req, res) {
  res.render("landing");
})

// running app.js on Port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})