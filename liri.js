require("dotenv").config();
var keys = require("./keys");
var fs = require("fs");


var spotify = new Spotify(keys.spotify);
var args = process.argv.slice(2);
