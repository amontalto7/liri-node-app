var axios = require("axios");
var moment = require("moment");
const chalk = require('chalk');
const key = chalk.keyword("orange");
const fs = require("fs");

module.exports = {
  getConcert: function(p) {
    if (p.length === 0) { console.log(chalk.red("Please enter an artist/band. \n") +chalk.inverse("> node liri.js concert-this <artist name>")) }
    else {
    var artist = p.join("%20");
    var artistName = p.join(" ");
    var queryUrl =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=codingbootcamp";

    axios
      .get(queryUrl)
      .then(function(response) {
        if (response.status === 200) {
        // console.log(response);
        
        if (response.data.length > 0) {
          console.log("\n" + key(artistName.toUpperCase()) + " - performing at...\n");
          var concertData = "";

          // console.log("\n" + key(artistName.toUpperCase()) + " - performing at...");
          for (var i = 0; i < response.data.length; i++) {
            concertData += "\n" + response.data[i].venue.name;

            var location = response.data[i].venue.city;
            if (response.data[i].venue.region) {
              location += ", " + response.data[i].venue.region;
            }
            if (response.data[i].venue.country) {
              location += ", " + response.data[i].venue.country;
            }

            concertData += "\n" + location + "\n";
            concertData += moment(response.data[i].datetime).format("MM/DD/YYYY")+ "\n";
          } 
        } else { console.log("\nNo concert dates found for "+ artistName)};
        var divider = "\n------------------------------------------------\n";
        console.log(concertData + divider);
      }

      var logCommand = "> node liri.js concert-this " + artistName + "\n";

      fs.appendFile("log.txt", logCommand + concertData + divider, function(err) {
        if (err) throw err;
      });

      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
};
