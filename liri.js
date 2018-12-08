require("dotenv").config();
var movies = require('./movies.js');
var concerts = require('./concerts.js');
var songs = require('./songs.js');
var fs = require("fs");
var command = process.argv[2]; // get the command
var args = process.argv.slice(3); // get all remaining parameters


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
    songs.getSong(args);
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
