require("dotenv").config();
var keys = require("./keys");
var fs = require("fs");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var args = process.argv.slice(2);

function getConcert() {
    console.log("get concert");
}

function getSong() {
    console.log("get song");
}

function getMovie() {
    console.log("get movie");
}

function readFile() {
    console.log("read file");
}


switch(args[0]) {
    case "concert-this":
        // assume args[1] is an artist name
        getConcert();
        break;
    case "spotify-this-song":
        // assume args[1] is a song name
        getSong();
        break;
    case "movie-this":
        getMovie();
        break;
    case "do-what-it-says":
        readFile();
        break;
    default:
        console.log("invalid command");
}


// var movieParams = process.argv.slice(2);
// var movieName = movieParams.join("+");
// // ...


// // Then run a request with axios to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// // Then create a request with axios to the queryUrl
// // ...

// axios.get(queryUrl).then(
//     function(response){
//         // console.log(response);
//         // If the request with axios is successful
//         // ...

//         if (response.status === 200){
//             // Then log the Release Year for the movie
//             console.log(response.data.Year);

//         }
//     }
// )

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);
