require("dotenv").config();
var keys = require("./keys");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var axios = require("axios");


var spotify = new Spotify(keys.spotify);
var command = process.argv[2];          // get the command
var args = process.argv.slice(3);       // get all remaining parameters


function getConcert() {
    console.log("get concert");
}

function getSong() {
    console.log("get song");
}

function getMovie(p) {
    console.log("get movie");
    var movieName = p.join("+");
    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    
    axios.get(queryUrl).then(
        function(response){
        console.log(response);
        // If the request with axios is successful
        // ...

            if (response.status === 200){
            // Then log the Release Year for the movie
             console.log(response.data.Year);

            }
     }
    )

// This line is just to help us debug against the actual URL.
console.log(queryUrl);


}

function readFile() {
    console.log("read file");
}


switch(command) {
    case "concert-this":
        // assume args[1] is an artist name
        getConcert();
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