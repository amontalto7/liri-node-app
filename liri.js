require("dotenv").config();
var movies = require("./movies.js");
var concerts = require("./concerts.js");
var songs = require("./songs.js");
var fs = require("fs");
var command = process.argv[2]; // get the command
var args = process.argv.slice(3); // get all remaining parameters

function readFile() {
  // console.log("read file");
  fs.readFile("random.txt", "utf8", function(error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    // split input by newlines
    var lineArr = data.split("\n");

    lineArr.forEach(function(line) {
      // Split input it by commas (to make it more readable)
      var dataArr = line.split(",");

      // We will then re-display the content as an array for later use.
      // console.log(dataArr);
      command = dataArr[0];
      args = dataArr.slice(1);
      liriBot();
    });
  });
}

function liriBot() {
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
      console.log("> node liri.js <concert-this | spotify-this-song | movie-this | do-what-it-says> <search term>");
  }
}

liriBot();
