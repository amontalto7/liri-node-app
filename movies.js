var axios = require("axios");
const chalk = require('chalk');
const key = chalk.keyword('orange');

module.exports = {

getMovie: function(p) {
    var movieName = "Mr+Nobody";
    if (p.length > 0) {
        movieName = p.join("+");
    } else {  console.log("\nNo movie specified! Providing data for 'Mr. Nobody'\n");}

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

      console.log(key("\nTitle: ") + response.data.Title);
      console.log(key("Year: ") + response.data.Year);
      console.log(key("IMDB Rating: ") + response.data.imdbRating);
      console.log(key("Rotten Tomatoes Rating: ") + rtRating);
      // JSON.stringify(response.data.Ratings,undefined,2));
      console.log(key("Country: ") + response.data.Country);
      console.log(key("Language(s): ") + response.data.Language);
      console.log(key("\nPlot: \n") + response.data.Plot);
      console.log(key("\nCast:"));
      cast.forEach(element => {
        console.log(" " + element.trim());
      });
    }
    // console.log("\n-------------------------------------------\n");
  });

  // This line is just to help us debug against the actual URL.
  // console.log(queryUrl);
}
}