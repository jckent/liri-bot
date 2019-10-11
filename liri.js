require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var search= process.argv.splice(3, process.argv.length - 1);

switch (process.argv[2]) {
    case 'concert-this':
        //axios to bit;
        //console.log results;
        break;
    
    case 'spotify-this-song':
        //axios to spotify;
        //console.log results
        break;

    case 'movie-this':
        axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log('The movie is called: ' + response.data.Title);
    console.log('The movie came out in: ' + response.data.Year);
    console.log("The movie's rating is: " + response.data.imdbRating);
    console.log("The movie's Rotten Tomatoes rating is: " + response.data.Metascore);
    console.log('The movie was made in: ' + response.data.Country);
    console.log('The movie was recorded in: ' + response.data.Language);
    console.log('The following people appeared in the movie: ' + response.data.Actors);
    console.log('The plot is: ' + response.data.Plot);

  });
        //console.log results
        break;

    case 'do-what-it-says':
        //run random.txt thru spotify-this-song
        //console.log results
        break;

    default:
        console.log('Invalid request');
}       
