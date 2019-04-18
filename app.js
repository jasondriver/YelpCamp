var express = require("express");
var app = express();

var bodyParser = require("body-parser");

// var request = require("request");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var data = [
	{name: "Salmon Creek", image: "https://farm7.staticflickr.com/6188/6106475454_cf4dab4d64.jpg"},
	{name: "Halfmoon Bay", image: "https://farm2.staticflickr.com/1832/42962226542_cf23d7050f.jpg"},
	{name: "Pacifica", image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg"},
	{name: "Santa Cruz", image: "https://farm4.staticflickr.com/3189/3062178880_4edc3b60d5.jpg"},
	{name: "Salmon Creek", image: "https://farm7.staticflickr.com/6188/6106475454_cf4dab4d64.jpg"},
	{name: "Halfmoon Bay", image: "https://farm2.staticflickr.com/1832/42962226542_cf23d7050f.jpg"},
	{name: "Pacifica", image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg"},
	{name: "Santa Cruz", image: "https://farm4.staticflickr.com/3189/3062178880_4edc3b60d5.jpg"},
	{name: "Salmon Creek", image: "https://farm7.staticflickr.com/6188/6106475454_cf4dab4d64.jpg"},
	{name: "Halfmoon Bay", image: "https://farm2.staticflickr.com/1832/42962226542_cf23d7050f.jpg"},
	{name: "Pacifica", image: "https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg"},
	{name: "Santa Cruz", image: "https://farm4.staticflickr.com/3189/3062178880_4edc3b60d5.jpg"}
]

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	res.render("campgrounds", {campgrounds: data});
});

app.post("/campgrounds", function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	data.push({name: name, image: image});
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
	res.render("new.ejs")
});

app.listen(8000, function(req, res) {
	console.log("Yelp Camp Server has Started!");
});