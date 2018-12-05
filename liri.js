require("dotenv").config();
var keys = require("./keys");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var axios = require("axios");

var spotify = new Spotify(keys.spotify);
var command = process.argv[2]; // get the command
var args = process.argv.slice(3); // get all remaining parameters

function getConcert(p) {
  console.log("get concert");
  var artist = p.join("%20");
  var queryUrl =
    "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";

  axios.get(queryUrl).then(function(response) {
    console.log(response);
    // If the request with axios is successful
    // ...

    if (response.status === 200) {
      // Then log the Release Year for the movie
    //   var cast = response.data.Actors.split(",");
    //   var rtRating = getRottenTomatoesScore(response.data.Ratings);

    //   console.log("Title: " + response.data.Title);
    //   console.log("Year: " + response.data.Year);
    //   console.log("IMDB Rating: " + response.data.imdbRating);
    //   console.log("Rotten Tomatoes Rating: " + rtRating);
    //   // JSON.stringify(response.data.Ratings,undefined,2));
    //   console.log("Country: " + response.data.Country);
    //   console.log("Language(s): " + response.data.Language);
    //   console.log("\nPlot: \n" + response.data.Plot);
    //   console.log("\nCast:");
    //   cast.forEach(element => {
    //     console.log(" " + element.trim());
    //   });
    }
  });

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);
}

function getSong() {
  console.log("get song");
}

function readFile() {
  console.log("read file");
}

function getMovie(p) {
    var movieName = "Mr+Nobody";
    if (p.length > 0) {
        movieName = p.join("+");
    } else {  console.log("No movie specified! Providing data for 'Mr. Nobody'\n");}

  function getRottenTomatoesScore(r) {
    for (var i = 0; i < r.length; i++) {
      if (r[i].Source === "Rotten Tomatoes") {
        return r[i].Value;
        break;
      }
    }
  }

  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl).then(function(response) {
    // console.log(response);
    // If the request with axios is successful
    // ...

    if (response.status === 200) {
      // Then log the Release Year for the movie
      var cast = response.data.Actors.split(",");
      var rtRating = getRottenTomatoesScore(response.data.Ratings);

      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + rtRating);
      // JSON.stringify(response.data.Ratings,undefined,2));
      console.log("Country: " + response.data.Country);
      console.log("Language(s): " + response.data.Language);
      console.log("\nPlot: \n" + response.data.Plot);
      console.log("\nCast:");
      cast.forEach(element => {
        console.log(" " + element.trim());
      });
    }
  });

  // This line is just to help us debug against the actual URL.
  // console.log(queryUrl);
}

switch (command) {
  case "concert-this":
    // assume args[1] is an artist name
    getConcert(args);
    break;
  case "spotify-this-song":
    // assume args[1] is a song name
    getSong();
    break;
  case "movie-this":
    getMovie(args);
    break;
  case "do-what-it-says":
    readFile();
    break;
  default:
    console.log("invalid command");
}
