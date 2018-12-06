var axios = require("axios");

module.exports = {
  getConcert: function(p) {
    console.log("get concert");
      var artist = p.join("%20");
    var queryUrl =
      "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    // "https://rest.bandsintown.com/artists/" + artist + "events?app_id=codingbootcamp";

    axios
      .get(queryUrl)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log(queryUrl);
  }

  // queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp
};
