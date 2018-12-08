var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
const chalk = require('chalk');
const key = chalk.bold.magenta;

module.exports = {

getSong:    function(s) {
        // https://www.npmjs.com/package/node-spotify-api
        var song = "The Sign Ace of Base";
        if (s.length > 0) {song = s.join(" ")};
        
        spotify.search({ type: 'track', query: song, limit: 1 })
        .then(function(response) {
          // console.log(response)
          console.log(key("\nArtist: ") + response.tracks.items[0].artists[0].name);
          console.log(key("Song: ") + response.tracks.items[0].name);
          console.log(key("Preview: ") + response.tracks.items[0].preview_url);
          console.log(key("Album Title: ") + response.tracks.items[0].album.name);
        //   console.log("\n-------------------------------------------\n");
        })
        .catch(function(err) {
          console.log(err);
        });
      }
     
}