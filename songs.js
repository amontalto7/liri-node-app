var keys = require("./keys");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);


module.exports = {

getSong:    function(s) {
        // https://www.npmjs.com/package/node-spotify-api
        var song = "The Sign Ace of Base";
        if (s.length > 0) {song = s.join(" ")};
        
        spotify.search({ type: 'track', query: song, limit: 1 })
        .then(function(response) {
          // console.log(response)
          console.log("\nArtist: " + response.tracks.items[0].artists[0].name);
          console.log("Song: " + response.tracks.items[0].name);
          console.log("Preview: " + response.tracks.items[0].preview_url);
          console.log("Album Title: " + response.tracks.items[0].album.name);
        })
        .catch(function(err) {
          console.log(err);
        });
      }
     
}