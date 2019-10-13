require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var moment = require('moment');
var fs = require('fs-extra');
var search = process.argv.splice(3, process.argv.length - 1);

switch (process.argv[2]) {
    case 'concert-this':
        axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp").then(
            function (response) {
                //var correctFormat = (moment("response.data.datetime", "MM-DD-YYYY"));
                console.log('The venue is called: ' + response.data.venue.name);
                console.log('The venue is in: ' + response.data.venue.city);
                //console.log('The concert is on: ' + correctFormat);
            }
        )

        break;

    case 'spotify-this-song':
        spotify
            .search({
                type: 'track',
                query: search
            })
            .then(function (response) {
                console.log(response.data.artists);
                console.log(response.data.track.name);
                console.log(response.data.track.album);
                console.log(response.data.track.preview_url);
            })
            .catch(function (err) {
                console.log(err);
            });

        break;

    case 'movie-this':
        axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log('The movie is called: ' + response.data.Title);
                console.log('The movie came out in: ' + response.data.Year);
                console.log("The movie's rating is: " + response.data.imdbRating);
                console.log("The movie's Rotten Tomatoes rating is: " + response.data.Metascore);
                console.log('The movie was made in: ' + response.data.Country);
                console.log('The movie was recorded in: ' + response.data.Language);
                console.log('The following people appeared in the movie: ' + response.data.Actors);
                console.log('The plot is: ' + response.data.Plot);

            });
        break;

    case 'do-what-it-says':
        fs.copy('./random.txt')
            .then(() => console.log('success!'))
            .catch(err => console.error(err))
        break;

    default:
        console.log('Invalid request');
}