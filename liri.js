require("dotenv").config();
var keys = require("./keys");
var movies = require('./movies.js');
var concerts = require('./concerts.js')
var fs = require("fs");
var Spotify = require("node-spotify-api");


var spotify = new Spotify(keys.spotify);
var command = process.argv[2]; // get the command
var args = process.argv.slice(3); // get all remaining parameters


function getSong() {
  console.log("get song");
}

function readFile() {
  console.log("read file");
}


switch (command) {
  case "concert-this":
    // assume args[1] is an artist name
    concerts.getConcert(args);
    break;
  case "spotify-this-song":
    // assume args[1] is a song name
    getSong();
    break;
  case "movie-this":
    movies.getMovie(args);
    break;
  case "do-what-it-says":
    readFile();
    break;
  default:
    console.log("invalid command");
}
