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
        console.log(response.data[i].venue.city + ", " + response.data[i].venue.region)
        console.log(moment(response.data[i].datetime).format("MMMM DD, YYYY"));
    }
    })
      .catch(function(error) {
        console.log(error);
      });

  }
};
