var axios = require("axios");
var moment = require('moment');

module.exports = {
  getConcert: function(p) {
      var artist = p.join("%20");
    var queryUrl =
      "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios
      .get(queryUrl)
      .then(function(response) {
        // console.log(response);
        console.log("\n"+p.join(" ") +" is performing at...");
        for (var i = 0; i < response.data.length; i++) {
        console.log("\n" + response.data[i].venue.name);
        // console.log(response.data[i].venue)
        var location = response.data[i].venue.city;
        if (response.data[i].venue.region) {location += ", " + response.data[i].venue.region}
        if (response.data[i].venue.country) {location += ", " + response.data[i].venue.country}
        
        console.log(location)
        console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
    }
    })
      .catch(function(error) {
        console.log(error);
      });

  }
};
