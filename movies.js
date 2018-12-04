function getMovie(p) {
    var movieName = p.join("+");
    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    function getRottenTomatoesScore(r){
        for (var i = 0; i < r.length; i++) {
            if (r[i].Source === "Rotten Tomatoes") {
                return r[i].Value;
                break;
            }
        }
    }
    
    axios.get(queryUrl).then(
        function(response){
        // console.log(response);
        // If the request with axios is successful
        // ...

            if (response.status === 200){
            // Then log the Release Year for the movie
            var cast = response.data.Actors.split(",")
            var rtRating = getRottenTomatoesScore(response.data.Ratings);

            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + rtRating);
            // JSON.stringify(response.data.Ratings,undefined,2));
            console.log("Country: " + response.data.Country);
            console.log("Language(s): " + response.data.Language);
            console.log("\nPlot: \n" + response.data.Plot);
            console.log("\nCast:");
            cast.forEach(element => {
                console.log(" " +element.trim())
            });    
            }
     }
    )

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

}
