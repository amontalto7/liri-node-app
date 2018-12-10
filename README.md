# LIRI Bot

### Overview
This is a Javascript Node application that returns either concert data, song information, or movie info based on what command-line paramaters are entered. Results are displayed in the terminal, as well as written to a log file.

---

### concert-this
This will call the [Bands in town](https://manager.bandsintown.com/support/bandsintown-api) API using the [Axios](https://www.npmjs.com/package/axios) package and fetch concert information for the provided artist or band. Results are displayed on the screen as well as written to the log.

**usage:**

> node liri.js concert-this <artist/band name>

![concert-this example](/images/concert-this.gif)

---

### spotify-this-song
This utilizes the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package, which calls the [Spotify API](https://developer.spotify.com/documentation/web-api/) and retrieves info for the song specified. It prints results to both the screen and to the log. If no song is provided, it will default to "The Sign" by Ace of Base.

**usage:**

> node liri.js spotify-this-song <song title>

![spotify-this-song example](/images/spotify-this-song.gif)

---

### movie-this
This utilizes [Axios](https://www.npmjs.com/package/axios) package to call the [OMDB API](http://www.omdbapi.com/) and retrieves information about the movie specified. If no movie name is provided, it will default to *Mr Nobody*. It will print results to both the screen and to the log.

**usage:**

> node liri.js movie-this <Movie name>

![movie-this-song example](/images/movie-this.gif)

--- 

### do-what-it-says
This will use the built in Node FS library to parse input from *random.txt* and run each command listed in the file. 

**usage:**

> node liri.js do-what-it-says
![do-what-it-says example](/images/do-what-it-says.gif)


